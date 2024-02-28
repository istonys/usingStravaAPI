import React, { useState, useEffect } from "react";
import {
  handleAthleteRequest,
  handleDeauthorize,
  handleAthleteStatsRequest,
  isTokenExpired,
  handleExpiredToken,
  getBestGear,
} from "../utils/functions";
import { Container, Row } from "react-bootstrap";
import AthleteCard from "../components/athleteCard";
import AthleteBestGearCard from "../components/athleteBestGearCard";

function Athlete() {
  const [athlete, setAthlete] = useState({
    id: "",
    profilePhoto: "",
    firstName: "",
    lastName: "",
    username: "",
    country: "",
    city: "",
    runTotal: "",
    swimTotal: "",
    rideTotal: "",
    bikes: [],
    shoes: [],
    bestBike: {},
    bestShoes: {},
  });

  const storedTokens = JSON.parse(localStorage.getItem("tokens"));
  const [tokens, setTokens] = useState({
    expiresAt: storedTokens.expires_at,
    refreshToken: storedTokens.refresh_token,
    accessToken: storedTokens.access_token,
  });

  async function getAthlete() {
    try {
      if (tokens.accessToken) {
        const athleteResponse = await handleAthleteRequest(tokens.accessToken);

        const bestBike = getBestGear(athleteResponse.bikes);
        const bestShoes = getBestGear(athleteResponse.shoes);

        return {
          id: athleteResponse.id,
          profilePhoto: athleteResponse.profile,
          firstName: athleteResponse.firstname,
          lastName: athleteResponse.lastname,
          username: athleteResponse.username,
          country: athleteResponse.country,
          city: athleteResponse.city,
          bikes: athleteResponse.bikes,
          shoes: athleteResponse.shoes,
          bestBike: bestBike,
          bestShoes: bestShoes,
        };
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  }

  async function getAthleteStats(athleteId) {
    try {
      if (athleteId) {
        const athleteResponse = await handleAthleteStatsRequest(
          athleteId,
          tokens.accessToken
        );
        setAthlete((prevAthlete) => ({
          ...prevAthlete,
          runTotal: athleteResponse.all_run_totals.distance,
          swimTotal: athleteResponse.all_swim_totals.distance,
          rideTotal: athleteResponse.all_ride_totals.distance,
        }));
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  }

  function gatheringAthleteInfo() {
    getAthlete()
      .then((athleteData) => {
        const athleteId = athleteData.id;
        setAthlete((prevAthlete) => ({
          ...prevAthlete,
          id: athleteData.id,
          profilePhoto: athleteData.profilePhoto,
          firstName: athleteData.firstName,
          lastName: athleteData.lastName,
          username: athleteData.username,
          country: athleteData.country,
          city: athleteData.city,
          bikes: athleteData.bikes,
          bestBike: athleteData.bestBike,
        }));
        getAthleteStats(athleteId);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    if (tokens.accessToken && !isTokenExpired(tokens.expiresAt)) {
      gatheringAthleteInfo();
    } else {
      handleExpiredToken(tokens.refreshToken)
        .then((newTokens) => {
          setTokens(() => ({
            expiresAt: newTokens.expires_at,
            refreshToken: newTokens.refresh_token,
            accessToken: newTokens.access_token,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokens]);

  if (!athlete.id) {
    return <div />;
  } else {
    return (
      <section>
        <Container className="py-5 fluid">
          <Row className="d-flex ">
            <AthleteCard
              tokens={tokens}
              handleDeauthorize={handleDeauthorize}
              athlete={athlete}
            />
            <AthleteBestGearCard athlete={athlete} />
          </Row>
        </Container>
      </section>
    );
  }
}

export default Athlete;

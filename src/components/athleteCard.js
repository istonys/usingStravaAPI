import React from "react";
import { faStrava } from "@fortawesome/free-brands-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Card, Button, Image } from "react-bootstrap";
import AthleteTotals from "./athleteTotals";

function AthleteCard({ athlete, tokens, handleDeauthorize }) {
  return (
    <Col lg="4">
      <Card className="mb-4 shadow">
        <Card.Header
          className="text-center"
          style={{
            color: "#f5f5f5",
            backgroundColor: "#fe6601",
          }}
        >
          <h5 style={{ margin: 0 }}>
            <FontAwesomeIcon icon={faStrava} /> Strava Athlete
          </h5>
        </Card.Header>
        <Card.Body className="text-center">
          <Image
            src={athlete.profilePhoto}
            alt="avatar"
            className="rounded-circle pt-1"
            style={{ width: "150px" }}
            fluid
          />
          <p className="fw-bold pt-2" style={{ margin: 0, fontSize: 18 }}>
            {athlete.firstName} {athlete.lastName}
          </p>
          <p className="text-muted" style={{ fontSize: 14 }}>
            @{athlete.username}
          </p>
          {athlete.city !== null && athlete.country !== null && (
            <p className="text-muted mb-4">
              {athlete.city}, {athlete.country}
            </p>
          )}
          <AthleteTotals athlete={athlete} />
          <div className="d-flex justify-content-center mb-2 pt-4">
            <Button
              className="btn-danger"
              onClick={() => handleDeauthorize(tokens.accessToken)}
            >
              <FontAwesomeIcon icon={faShieldAlt} /> Deauthorize
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default AthleteCard;

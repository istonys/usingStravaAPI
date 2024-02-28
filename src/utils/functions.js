import axios from "axios";

export const handleTokenRequest = async (authorizationCode) => {
  const postData = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    code: authorizationCode,
    grant_type: "authorization_code",
  };

  try {
    const response = await axios.post(
      "https://www.strava.com/oauth/token",
      postData
    );
    delete response.data.athlete;

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
  }
};

export const handleAthleteRequest = async (accessToken) => {
  try {
    const response = await axios.get("https://www.strava.com/api/v3/athlete", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
  }
};

export const handleDeauthorize = (accessToken) => {
  axios.post("https://www.strava.com/oauth/deauthorize", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  localStorage.removeItem("tokens");
  window.location = "http://localhost:3000/";
};

export const handleAthleteStatsRequest = async (athleteId, accessToken) => {
  try {
    const response = await axios.get(
      `https://www.strava.com/api/v3/athletes/${athleteId}/stats`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    return response.data;
  } catch (error) {
    console.log("handle mistake");
    console.error("API Error: ", error);
  }
};

export const isTokenExpired = (expiresAt) => {
  return Math.floor(Date.now() / 1000) >= expiresAt;
};

export const handleExpiredToken = async (refreshToken) => {
  const postData = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  };
  const newTokens = await axios.post(
    "https://www.strava.com/api/v3/oauth/token",
    postData
  );
  localStorage.setItem("tokens", JSON.stringify(newTokens.data));
  return newTokens.data;
};

export const getBestGear = (gears) => {
  const bestGear = gears.reduce((maxObj, currentObj) => {
    return currentObj.distance > maxObj.distance ? currentObj : maxObj;
  }, gears[0]);

  delete bestGear.resource_state;
  delete bestGear.converted_distance;

  return bestGear;
};

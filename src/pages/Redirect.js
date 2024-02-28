import { handleTokenRequest } from "../utils/functions";

function Redirect() {
  const urlParams = new URLSearchParams(window.location.search);
  const authorizationCode = urlParams.get("code");

  handleTokenRequest(authorizationCode)
    .then((tokens) => {
      localStorage.setItem("tokens", JSON.stringify(tokens));
      window.location = "http://localhost:3000/athlete";
    })
    .catch((error) => {
      console.error("Error getting tokens:", error);
    });
}

export default Redirect;

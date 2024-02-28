import AuthorizeCard from "../components/authorizeCard";

function Authorize() {
  const { REACT_APP_CLIENT_ID } = process.env;
  const redirectUrl = "http://localhost:3000/redirect";
  const tokens = JSON.parse(localStorage.getItem("tokens")) || false;
  const handleLogin = () => {
    if (!tokens.access_token) {
      window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
        redirectUrl
      )}&approval_prompt=force&scope=profile:read_all`;
    } else {
      window.location = "http://localhost:3000/athlete";
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center mt-5"
      style={{ minHeight: "75vh" }}
    >
      <AuthorizeCard handleLogin={handleLogin} />
    </div>
  );
}

export default Authorize;

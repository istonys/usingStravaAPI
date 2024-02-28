import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStrava } from "@fortawesome/free-brands-svg-icons";

function AuthorizeCard({ handleLogin }) {
  return (
    <Card className="shadow" style={{ width: "20rem" }}>
      <Card.Body className="text-center">
        <div>
          <h5>Welcome to our Fitness App!</h5>
          <p>Connect with Strava to get started.</p>
        </div>
        <Button onClick={handleLogin} className="btn-warning text-white">
          <FontAwesomeIcon icon={faStrava} /> Connect with Strava
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AuthorizeCard;

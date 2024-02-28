import {
  faRankingStar,
  faPersonBiking,
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card } from "react-bootstrap";

function AthleteBestGearCard({ athlete }) {
  return (
    <Col lg="8">
      <Card className="shadow d-flex">
        <Card.Header
          className="text-center"
          style={{
            color: "#f5f5f5",
            backgroundColor: "#fe6601",
          }}
        >
          <h5 style={{ margin: 0 }}>
            <FontAwesomeIcon icon={faRankingStar} /> Your most used gear
          </h5>
        </Card.Header>
        <Row className="p-4 justify-content-center">
          <Col md="6">
            <Card className="mb-4 mb-md-0">
              <Card.Header
                className="text-white text-center"
                style={{ backgroundColor: "#424242" }}
              >
                <h5 style={{ margin: 0 }}>
                  <FontAwesomeIcon icon={faPersonBiking} /> Most Ridden Bike
                </h5>
              </Card.Header>
              {athlete.bestBike.id ? (
                <Card.Body>
                  <h5 className="card-title mb-3">
                    {athlete.bestBike.name}
                    <hr />
                  </h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <b>ID:</b> {athlete.bestBike.id}
                    </li>
                    <li className="list-group-item">
                      <b>Nickname:</b> {athlete.bestBike.nickname}
                    </li>
                    <li className="list-group-item">
                      <b>Distance:</b> {athlete.bestBike.distance} km
                    </li>
                    {athlete.bestBike.primary && (
                      <li className="list-group-item text-success">
                        Primary Bike
                      </li>
                    )}
                    {athlete.bestBike.retired && (
                      <li className="list-group-item text-danger">
                        Retired Bike
                      </li>
                    )}
                  </ul>
                </Card.Body>
              ) : (
                <Card.Body>
                  <p className="text-danger">
                    You do not have any bikes registered!
                  </p>
                </Card.Body>
              )}
            </Card>
          </Col>

          <Col md="6">
            <Card className="mb-4 mb-md-0">
              <Card.Header
                className="text-white text-center"
                style={{ backgroundColor: "#424242" }}
              >
                <h5 style={{ margin: 0 }}>
                  <FontAwesomeIcon icon={faShoePrints} /> Most Used Shoes
                </h5>
              </Card.Header>
              {athlete.bestShoes.id ? (
                <Card.Body>
                  <h5 className="card-title mb-3">
                    {athlete.bestShoes.name}
                    <hr />
                  </h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <b>ID:</b> {athlete.bestShoes.id}
                    </li>
                    <li className="list-group-item">
                      <b>Nickname:</b> {athlete.bestShoes.nickname}
                    </li>
                    <li className="list-group-item">
                      <b>Distance:</b> {athlete.bestShoes.distance} km
                    </li>
                    {athlete.bestShoes.primary && (
                      <li className="list-group-item text-success">
                        Primary Shoes
                      </li>
                    )}
                    {athlete.bestShoes.retired && (
                      <li className="list-group-item text-danger">
                        Retired Shoes
                      </li>
                    )}
                  </ul>
                </Card.Body>
              ) : (
                <Card.Body>
                  <p className="text-danger">
                    You do not have any shoes registered!
                  </p>
                </Card.Body>
              )}
            </Card>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export default AthleteBestGearCard;

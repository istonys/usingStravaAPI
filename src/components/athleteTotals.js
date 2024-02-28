import React from "react";
import "./athleteTotals.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRunning,
  faPersonBiking,
  faPersonSwimming,
} from "@fortawesome/free-solid-svg-icons";

function AthleteTotals({ athlete }) {
  return (
    <Row className="my-2">
      <Col md={4} className="mb-3 mb-md-0">
        <div className="p-2 bg-primary d-flex flex-column rounded text-white stats">
          <span className="person-info">
            <FontAwesomeIcon icon={faRunning} />
          </span>
          <span className="property">{athlete.runTotal} km</span>
        </div>
      </Col>
      <Col md={4} className="mb-3 mb-md-0">
        <div className="p-2 bg-primary d-flex flex-column rounded text-white stats">
          <span className="person-info">
            <FontAwesomeIcon icon={faPersonBiking} />
          </span>
          <span className="property">{athlete.rideTotal} km</span>
        </div>
      </Col>
      <Col md={4}>
        <div className="p-2 bg-primary d-flex flex-column rounded text-white stats">
          <span className="person-info">
            <FontAwesomeIcon icon={faPersonSwimming} />
          </span>
          <span className="property">{athlete.swimTotal} km</span>
        </div>
      </Col>
    </Row>
  );
}

export default AthleteTotals;

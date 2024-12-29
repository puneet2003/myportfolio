import React from "react";
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="d-flex flex-column align-items-center text-center">
        <img
          style={{ width: "300px" }}
          className="bg-white"
          src={data.companylogo}
          alt={`${data.role} Logo`}
        />
        <p className="lead mb-0">
          <strong>{data.role}</strong>
        </p>
        <p className="text-muted">{data.date}</p>
      </div>
    </Col>
  );
};

export default ExperienceCard;

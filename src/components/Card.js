import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Card.css";

import image from "../assets/images/logo.jpeg";

const Card = () => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
      <a href="/">
        <div className="card">
          <div className="top-container">
            <div className="image-container">
              <img className="image" alt="Apple logo" src={image} />
            </div>
            <div className="title-container">
              <div className="title-company">Apple</div>
              <div className="title-role">Data Engineer</div>
            </div>
          </div>
          <div className="information-container">
            <div className="information-timestamp">1 minute ago</div>
            <div className="information-type">Data</div>
          </div>
          <div className="line-container">
            <hr></hr>
          </div>
          <div className="techstack-container">
            <span className="techstack">Oracle</span>
            &nbsp;
            <span className="techstack">HDFS</span>
            &nbsp;
            <span className="techstack">Hive</span>
            &nbsp;
            <span className="techstack">Spark</span>
            &nbsp;
            <span className="techstack">yarn</span>
            &nbsp;
            <span className="techstack">ETL</span>
            &nbsp;
            <span className="techstack">ETL</span>
            &nbsp;
            <span className="techstack">ETL</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;

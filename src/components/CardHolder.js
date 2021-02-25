import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "./Card";

const CardHolder = () => {
  return (
    <div className="container flex justify-content-center">
      <div className="row">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardHolder;

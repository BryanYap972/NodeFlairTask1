import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "./Card";

const CardHolder = () => {
  return (
    <div className="container">
      <div className="gutter-2 row">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardHolder;

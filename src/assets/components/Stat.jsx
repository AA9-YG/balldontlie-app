import React, { useEffect, useState } from "react";
import "../css/Stat.css";

const Stat = (stat) => {
  const handleHeight = (feet, inches) => {
    if (feet === null || inches === null) {
      return "No Listed Height";
    } else {
      return `${stat.hFeet}' ${stat.hInches}"`;
    }
  };

  const handleWeight = (weight) => {
    if (weight === null) {
      return "No Listed Weight";
    } else {
      return stat.weight + "lbs";
    }
  };

  return (
    <div className="stat-container">
      <h2>{stat.fName + " " + stat.lName}</h2>
      <h3>{stat.team}</h3>
      <h3>{handleHeight(stat.hFeet, stat.hInches)}</h3>
      <h3>{handleWeight(stat.weight)}</h3>
    </div>
  );
};

export default Stat;

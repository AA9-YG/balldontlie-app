import React, { useState, useEffect } from "react";
import Stat from "./Stat";
import "../css/StatList.css";

const StatList = () => {
  const [stat, setStat] = useState([]);

  useEffect(() => {
    // code to fetch data and update state
    const fetchData = async () => {
      try {
        const response = await fetch(
            "https://www.balldontlie.io/api/v1/players"
        );

        const { data } = await response.json();
        console.log(data);
        setStat(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData()

  }, [stat.length]);

  return <div>
    {stat.map(player => {
        return <div key={player.id} className="stat-list">
            <Stat fName={player.first_name} lName={player.last_name}
                team={player.team.full_name} hFeet={player.height_feet}
                hInches={player.height_inches} weight={player.weight_pounds}
                 />
        </div>
    })}
  </div>;
};

export default StatList;
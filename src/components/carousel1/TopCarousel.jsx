import React, { useEffect, useState } from "react";
import Match from "../../data/Match.json";

function TopCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Match.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div
        className="cards-container"
        style={{
          transform: `translateX(-${currentIndex * (100 / Match.length)}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {Match.map((elem, i) => (
          <div key={i} className="card">
            <div className="series-name">
              <h1>{elem.seriesName}</h1>
            </div>
            <div className="teams">
              <h3>
                {elem.Team1Name} -{" "}
                {elem.scores.find((score) => score.team === elem.Team1SName)
                  ?.score || "N/A"}
              </h3>
              <h3>
                {elem.Team2Name} -{" "}
                {elem.scores.find((score) => score.team === elem.Team2SName)
                  ?.score || "N/A"}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCarousel;

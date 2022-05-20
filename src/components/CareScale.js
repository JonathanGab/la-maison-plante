import React from "react";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType = careType === "light" ? "☀️" : "💧";

  const information = () => {
    if (careType === "light" && scaleValue === 3) {
      alert("Cette plante requiert beaucoup de lumière");
    } else if (careType === "light" && scaleValue === 2) {
      alert("Cette plante requiert modérement de lumière");
    } else if (careType === "light" && scaleValue === 1) {
      alert("Cette plante requiert peu de lumière");
    } else if (careType === "water" && scaleValue === 3) {
      alert("Cette plante requiert beaucoup d'arrosage");
    } else if (careType === "water" && scaleValue === 2) {
      alert("Cette plante requiert modérement d'arrosage");
    } else if (careType === "water" && scaleValue === 1) {
      alert("Cette plante requiert peu d'arrosage");
    }
  };

  return (
    <div role="none" onClick={information}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;

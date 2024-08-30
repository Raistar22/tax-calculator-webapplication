import React from "react";

const TaxSlabs = ({ slabs }) => {
  if (!slabs) {
    return <div>Please select a year to view tax slabs.</div>;
  }

  return (
    <div>
      <h2>Tax Slabs for {slabs.year}</h2>
      <ul>
        {slabs.brackets.map((bracket, index) => (
          <li key={index}>
            Income from ₹{bracket.start} to ₹{bracket.end || "above"}: {bracket.rate}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaxSlabs;

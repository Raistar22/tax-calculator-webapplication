import React, { useState } from "react";
import axios from "axios";

const TaxForm = ({ onTaxSlabsFetch }) => {
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");
  const [year, setYear] = useState("");
  const [deductions, setDeductions] = useState({
    standardDeduction: 50000,
    section80C: 0,
    section80D: 0,
    otherDeductions: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch tax slabs from backend based on the selected year
      const response = await axios.get(`/api/tax-slabs?year=${year}`);
      onTaxSlabsFetch(response.data);
    } catch (error) {
      console.error("Error fetching tax slabs", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Income (INR):</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Standard Deduction (₹50,000):</label>
        <input
          type="number"
          value={deductions.standardDeduction}
          readOnly
        />
      </div>
      <div>
        <label>Section 80C (Max ₹1,50,000):</label>
        <input
          type="number"
          value={deductions.section80C}
          onChange={(e) =>
            setDeductions({ ...deductions, section80C: e.target.value })
          }
        />
      </div>
      <div>
        <label>Section 80D (Medical Insurance):</label>
        <input
          type="number"
          value={deductions.section80D}
          onChange={(e) =>
            setDeductions({ ...deductions, section80D: e.target.value })
          }
        />
      </div>
      <div>
        <label>Other Deductions:</label>
        <input
          type="number"
          value={deductions.otherDeductions}
          onChange={(e) =>
            setDeductions({ ...deductions, otherDeductions: e.target.value })
          }
        />
      </div>
      <button type="submit">Calculate Tax</button>
    </form>
  );
};

export default TaxForm;

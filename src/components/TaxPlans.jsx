import React, { useEffect, useState } from "react";
import axios from "axios";

const TaxPlans = () => {
  const [taxPlans, setTaxPlans] = useState([]);

  useEffect(() => {
    // Fetch all saved tax plans for the user
    const fetchTaxPlans = async () => {
      try {
        const response = await axios.get("/api/tax-plans");
        setTaxPlans(response.data);
      } catch (error) {
        console.error("Error fetching tax plans", error);
      }
    };

    fetchTaxPlans();
  }, []);

  const handleDelete = async (planId) => {
    try {
      await axios.delete(`/api/tax-plans/${planId}`);
      setTaxPlans(taxPlans.filter((plan) => plan.id !== planId));
    } catch (error) {
      console.error("Error deleting tax plan", error);
    }
  };

  return (
    <div>
      <h2>Saved Tax Plans</h2>
      <ul>
        {taxPlans.map((plan) => (
          <li key={plan.id}>
            Year: {plan.year}, Income: {plan.income}, Calculated Tax: {plan.tax}
            <button onClick={() => handleDelete(plan.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaxPlans;

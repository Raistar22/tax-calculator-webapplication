import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaxForm from "./components/TaxForm";
import TaxPlans from "./components/TaxPlans";
import TaxSlabs from "./components/TaxSlabs";

const App = () => {
  const [taxSlabs, setTaxSlabs] = useState(null);

  return (
    <Router>
      <div>
        <h1>Income Tax Calculator</h1>
        <Routes>
          <Route path="/" element={<TaxForm onTaxSlabsFetch={setTaxSlabs} />} />
          <Route path="/tax-plans" element={<TaxPlans />} />
          <Route path="/tax-slabs" element={<TaxSlabs slabs={taxSlabs} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

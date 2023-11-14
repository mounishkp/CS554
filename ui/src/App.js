import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import CarForm from "./CarForm";
import Home from "./Home";

const App = () => {
  const [cars, setCars] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleAddCar = (newCar) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  const handleFormSubmit = () => {
    // Perform form submission logic
    setIsFormSubmitted(true);
  };

  const handlesetFalse = () => {
    // Perform form submission logic
    setIsFormSubmitted(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
       <br />
      <Container maxWidth="xl" style={{ flex: 1 }}>
        <Typography variant="h4" align="center" gutterBottom  style={{backgroundColor:'#1c1c1c', color: 'white'}}>
          Vehicle Inventory Management System
        </Typography>
        <CarForm onAddCar={handleAddCar} onSubmit={handleFormSubmit} />
        <br />
        <Home isFormSubmitted={isFormSubmitted} setFalse={handlesetFalse} />
      </Container>

      <footer
        style={{
          backgroundColor: "lightgray",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Vehicle Inventory Management System
        </Typography>
      </footer>
    </div>
  );
};

export default App;

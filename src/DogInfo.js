import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./DogDetails.css";

function DogInfo({ dog }) {

  if (!dog) return <Navigate to="/dogs" />

  return (
    <div className="row DogDetails">
      <div className="col d-flex flex-column align-items-center">
        
        <h2>{dog.name}</h2>
        <h3>{dog.age} years old</h3>
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Go Back</Link>
      </div>
    </div>
  );
}

export default DogInfo;
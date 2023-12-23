import React, { useState } from 'react';
import './TemperatureConverter.css';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);

  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
  };

  const convertToFahrenheit = (celsius) => (celsius * 9/5) + 32;
  const convertToKelvin = (celsius) => parseFloat(celsius) + 273.15;
  const convertToReaumur = (celsius) => celsius * 0.8;

  return (
    <div className="temperature-converter">
      <h2>Sıcaklık Dönüştürücü</h2>
      <div className="input-group mb-3">
        <input 
          type="number" 
          className="form-control" 
          value={celsius} 
          onChange={handleCelsiusChange} 
        />
        <span className="input-group-text">°C</span>
      </div>
      <div className="results">
        <p>Fahrenheit: {convertToFahrenheit(celsius).toFixed(2)} °F</p>
        <p>Kelvin: {convertToKelvin(celsius).toFixed(2)} K</p>
        <p>Réaumur: {convertToReaumur(celsius).toFixed(2)} Ré</p>
      </div>
    </div>
  );
}

export default TemperatureConverter;
import React, { useState, useEffect } from 'react';

export default function WeatherWidget() {
        
    const [weatherData, setWeatherData] = useState(null);
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=jakarta&units=metric&appid=d04f35281cbb1e5dc6b40415cebcd6af';
    useEffect(() => {
        // Fetch weather data from an API
        const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.log('Error fetching weather data:', error);
        }
        };
    
        fetchData();
    }, []);

    const getWeatherIcon = (iconCode) => {
        // Map weather icon codes to respective icon URLs
        const iconBaseUrl = 'https://openweathermap.org/img/wn/'; 
    
        // Add more icon mappings as needed
        const iconMappings = {
          '01d': '01d.png',
          '02d': '02d.png',
          '03d': '03d.png',
          '04d': '04d.png',
          '09d': '09d.png',
          '10d': '10d.png',
          '11d': '11d.png',
          '13d': '13d.png',
          '50d': '50d.png',
        };
    
        const iconUrl = iconMappings[iconCode];
        return iconUrl ? iconBaseUrl + iconUrl : null;
    };
    
    return (
        <div style={{ minWidth: 300 }}>
        <h2>Weather</h2>
        {weatherData ? (
            <div>
                <div style={{ float: "left" }}>
                    <p>Location: {weatherData.name}</p>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Conditions: {weatherData.weather[0].main} | {weatherData.weather[0].description}</p>
                </div>
                <div style={{ float: "right" }}>
                {weatherData.weather[0].icon && (
                    <img src={getWeatherIcon(weatherData.weather[0].icon)} alt="Weather Icon" />
                )}
                </div>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    )
}
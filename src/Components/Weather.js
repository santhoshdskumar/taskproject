import React from "react";

const Weather = (props) => {
var  months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
var d = new Date();
var monthName=months[d.getMonth()]; // "July" (or current month)
    
 return (
  <div className="weather_data">
    <div className="weather_title">
      <p>{monthName} {d.getFullYear()}</p>
      <h1> {props.data.city_name} </h1>
      <h3> {props.data.weather_status} </h3>
      <p> {props.data.weather_desc} </p>
    </div>
    <div className="weather_status">
      <ul className="nav">
        <li>
          Temp : <span> {props.data.temp}°C </span>
        </li>
        <li>
          Rain : <span> {props.data.rain} </span>
        </li>
        <li>
          Humidity : <span>{props.data.humidity}%</span>
        </li>
        <li>
          Wind : <span>{props.data.wind}km/s</span>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Weather;

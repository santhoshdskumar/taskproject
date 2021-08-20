import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

// Components
import Form from '../Components/Form'
import Weather from "../Components/Weather";

const API_KEY = "d0f30d0ef26524ab8fc67add631bf76d";

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      city_name: "Bangalore",
      temp: "28",
      humidity: "56",
      wind: "13",
      weather_status: "Drizzle",
      weather_desc: "Mostly cloudy ",
      weather_icon: "",
      rain:'',
    };
  }

  handleChange = (e) => {
    this.setState({
      term: e.target.value
    });
  };

  handleClick = (e) => {
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          this.state.term +
          "&units=metric&appid=" +
          API_KEY
      )
      .then((res) => {
        this.setState({
          city_name: res.data.name,
          temp: res.data.main.temp,
          humidty: res.data.main.humidity,
          wind: res.data.wind.speed,
          rain:res.data.rain,
          weather_status: res.data.weather[0].main,
          weather_desc: res.data.weather[0].description,
          weather_icon: res.data.weather[0].icon
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.rain, 'rain');
    return (
      <div className="weathercontainer">
        <div className="innerRow">
        <Form onChange={this.handleChange} onClick={this.handleClick} />
        <Weather data={this.state} />
        <Link to="/" className="logout">Logout</Link>
        </div>

      </div>
    );
  }
}

import React, { Component } from "react";
import moment from "moment";
import Quote from "./components/quote/quote";
import Display from "./components/display/display";
import Expanded from "./components/expanded-display/expanded";

import "./App.css";

class App extends Component {
  state = {
    userInfo: {},
    worldInfo: {},
    quote: {},
    show: false,
  };

  componentDidMount() {
    this.fetchIP().then((data) => {
      this.fetchTime(data).then((worldData) =>
        this.setState({ worldInfo: worldData })
      );
      this.setState({ userInfo: data });
    });
    this.fetchQuote().then((data) => this.setState({ quote: data }));
  }

  refreshQuote = (e) => {
    e.preventDefault();
    this.fetchQuote().then((data) => this.setState({ quote: data }));
  };

  getTimeOfDay = (currentHour) => {
    var dayPeriod;
    switch (true) {
      case currentHour >= 5 && currentHour <= 11:
        dayPeriod = "morning";
        break;
      case currentHour >= 12 && currentHour <= 17:
        dayPeriod = "afternoon";
        break;
      case currentHour >= 18 && currentHour < 5:
        dayPeriod = "evening";
        break;
      default:
        return "morning";
    }
    return dayPeriod;
  };

  fetchQuote = async () => {
    const data = await fetch("https://api.quotable.io/random");
    return data.json();
  };

  fetchIP = async () => {
    const data = await fetch("https://freegeoip.app/json/");
    return data.json();
  };

  fetchTime = async (info) => {
    const { ip } = info;
    const data = await fetch(`https://worldtimeapi.org/api/ip/${ip}`);

    return data.json();
  };

  handleToggle = (e) => {
    e.preventDefault();
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { userInfo, worldInfo, quote, show } = this.state;
    const currentHour = moment(worldInfo.datetime).hours();
    const isDay = currentHour > 6 && currentHour < 18;
    const dayPeriod = this.getTimeOfDay(currentHour);
    return (
      <div className={isDay ? "App background-day" : "App background-night"}>
        <div
          className={
            show ? "container content" : "container content content-height"
          }
        >
          <Quote quote={quote} show={show} handleClick={this.refreshQuote} />
          <Display
            userInfo={userInfo}
            worldInfo={worldInfo}
            isDay={isDay}
            dayPeriod={dayPeriod}
            show={show}
            handleToggle={this.handleToggle}
          />
        </div>
        <div className={show ? "show" : "hide"}>
          <Expanded worldInfo={worldInfo} isDay={isDay} />
        </div>
      </div>
    );
  }
}

export default App;

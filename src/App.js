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
    const data = await fetch(`http://worldtimeapi.org/api/ip/${ip}`);

    return data.json();
  };

  handleToggle = (e) => {
    e.preventDefault();
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { userInfo, worldInfo, quote, show } = this.state;
    const time = moment(worldInfo.datetime).format("LT");

    return (
      <div
        className={
          time.includes("AM") ? "App background-day" : "App background-night"
        }
      >
        <div
          className={
            show ? "container content" : "container content content-height"
          }
        >
          <Quote quote={quote} show={show} />
          <Display
            userInfo={userInfo}
            worldInfo={worldInfo}
            handleToggle={this.handleToggle}
          />
        </div>
        <div className={show ? "show" : "hide"}>
          <Expanded worldInfo={worldInfo} />
        </div>
      </div>
    );
  }
}

export default App;

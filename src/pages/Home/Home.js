import React, { Component } from "react";
import NavigationBar from "../../components/NavigationBar";
import Title from "../../pages/Home/Title";
// import Story from "../../pages/Home/Story";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Title />
      </>
    );
  }
}

export default Home;

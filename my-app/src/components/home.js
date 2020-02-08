import React, { Component } from "react";
import "./css/home.css";
import CypherText from "react-cypher-text-loop";

class Home extends Component {
  render() {
    return (
      <div>
        <CypherText
          className="transitionText"
          delay={2000}
          textList={["Goal Oriented", "Optimistic", "Confident"]}
        />
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import "./css/home.css";
import CypherText from "react-cypher-text-loop";
import { Grid, Cell } from "react-mdl";
import me from "../images/my_avatar.jpg";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="home-grid">
          <Cell col={12}>
            <CypherText
              className="transitionText"
              delay={2000}
              placeholders="01"
              textList={["Goal Oriented", "Optimistic", "Confident"]}
            />
            <div className="introBox">
              <p>
                Hello. I'm <span>Chao Lin</span>.
                <br />
                I'm a <span>Software Engineer</span>.
              </p>
              <img className="avatar-img" src={me} alt="avatar" />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;

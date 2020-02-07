import React from "react";
import "./App.css";
import { Layout, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "1000px", position: "relative" }}>
      <Layout>
        <Drawer style={{ fontFamily: "monospace" }}>
          <Navigation>
            <Link to="/home">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"></div>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;

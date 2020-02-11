import React from "react";
import "./App.css";
import { Layout, Navigation, Header, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  function hideToggle() {
    var selectorId = document.querySelector(".mdl-layout");
    selectorId.MaterialLayout.toggleDrawer();
  }

  return (
    <div style={{ height: "1000px", position: "relative" }}>
      <Layout>
        <Header className="header-color"></Header>
        <Drawer style={{ fontFamily: "monospace" }}>
          <Navigation>
            <Link to="/" onClick={hideToggle}>
              Home
            </Link>
            <Link to="/aboutme" onClick={hideToggle}>
              About Me
            </Link>
            <Link to="/resume" onClick={hideToggle}>
              Resume
            </Link>
            <Link to="/projects" onClick={hideToggle}>
              Projects
            </Link>
            <Link to="/contact" onClick={hideToggle}>
              contact
            </Link>
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

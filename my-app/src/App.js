import React from "react";
import "./App.css";
import { Layout, Navigation, Drawer, Content } from "react-mdl";

function App() {
  return (
    <div
      style={{ height: "1000px", position: "relative", background: "#F9F8EB" }}
    >
      <Layout>
        <Drawer tyle={{ fontFamily: "monospace" }}>
          <Navigation>
            <a href="#">Resume</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>
    </div>
  );
}

export default App;

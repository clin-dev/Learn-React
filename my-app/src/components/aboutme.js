import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import {
  FlippingCard,
  FlippingCardFront,
  FlippingCardBack
} from "react-ui-cards";
import "./css/aboutme.css";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import RouterIcon from "@material-ui/icons/Router";
import TabletMacIcon from "@material-ui/icons/TabletMac";

class Aboutme extends Component {
  render() {
    return (
      <div>
        <Grid className="aboutme-grid-1">
          <Cell col={12}>
            <h3 id="top-interest">My TOP interests ...</h3>
          </Cell>
        </Grid>
        <Grid className="aboutme-grid-2">
          <Cell col={4}>
            <FlippingCard className="interest-container">
              <FlippingCardFront>
                <DesktopWindowsIcon
                  style={{ fontSize: 60 }}
                ></DesktopWindowsIcon>
                <h5>Systems</h5>
              </FlippingCardFront>
              <FlippingCardBack>
                <p>Operating systems and embedded systems</p>
              </FlippingCardBack>
            </FlippingCard>
          </Cell>
          <Cell col={4}>
            <FlippingCard className="interest-container">
              <FlippingCardFront>
                <RouterIcon style={{ fontSize: 60 }}></RouterIcon>
                <h5>Networking</h5>
              </FlippingCardFront>
              <FlippingCardBack>I'm back!</FlippingCardBack>
            </FlippingCard>
          </Cell>
          <Cell col={4}>
            <FlippingCard className="interest-container">
              <FlippingCardFront>
                <TabletMacIcon style={{ fontSize: 50 }}></TabletMacIcon>
                <h5>App Development</h5>
              </FlippingCardFront>
              <FlippingCardBack>I'm back!</FlippingCardBack>
            </FlippingCard>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;

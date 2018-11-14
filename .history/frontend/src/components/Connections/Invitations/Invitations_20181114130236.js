import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Columns from "react-bootstrap-columns";

import myStyles from "../Connections.css";
import { register } from "../../../serviceWorker";

class Invitations extends Component {
  /* <div className="row" style={myStyles.invitations}>
                  <h3 style={myStyles.h3pending}>No pending invitations</h3>
                </div> */
  render() {
    return (
      <div className="row" style={myStyles.invitations}>
        <div
          className="row"
          style={{
            width: "100%",
            height: "50px",
            margin: "0px",
            paddingBottom: "40px",
            borderBottom: "solid 1px lightgray"
          }}
        >
          <h3
            style={{
              width: "100%",
              height: "50px",
              margin: "0px",
              marginLeft: "20px",
              marginTop: "20px",

              fontSize: "1.8rem",
              color: "rgba(0,0,0,.9)",
              fontWeight: "400"
            }}
          >
            Invitations
          </h3>
        </div>
        <div
          className="row"
          style={{
            height: "130px",
            marginTop: "10px"
          }}
        >
          <div className="col-md-2">
            <img
              src="Kriti_Jar.jpg"
              style={{
                width: "100%",
                height: "90%",

                marginLeft: "30px",
                border: "solid 1px lightgray"
              }}
            />
          </div>
          <div
            className="col-md-5"
            style={{
              marginLeft: "20px"
            }}
          >
            <span>
              <h2>Kriti Jar</h2>
            </span>
            <br />

            <span
              style={{
                textAlign: "center",
                lineHeight: "1.6rem!important",
                maxHeight: "3.2rem",
                fontSize: "1.2rem",
                fontWeight: "400",

                color: "rgba(0,0,0,.6)"
              }}
            >
              Actively seeking summer internship opportunities\Graduate computer
              science
            </span>
          </div>
          <div className="col-md-4" style={{ marginTop: "50px" }}>
            <a
              href="#"
              class="btn btn-primary"
              style={{
                textAlign: "center",
                backgroundColor: "white",
                color: "#006097",
                boxShadow: "inset 0 0 0 1px #006097",
                padding: "10 16px",
                width: "80px",
                font: "400 13.3333px Arial"
              }}
            >
              Accept
            </a>
            <a
              href="#"
              class="btn btn-primary"
              style={{
                textAlign: "center",
                backgroundColor: "white",
                color: "#006097",
                boxShadow: "inset 0 0 0 1px #006097",
                padding: "10 16px",
                width: "80px",
                marginLeft: "40px",
                font: "400 13.3333px Arial"
              }}
            >
              Ignore
            </a>
          </div>
        </div>
        <div
          className="row"
          style={{
            height: "130px",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          <div className="col-md-2">
            <img
              src="Kriti_Jar.jpg"
              style={{
                width: "100%",
                height: "90%",

                marginLeft: "30px",
                border: "solid 1px lightgray"
              }}
            />
          </div>
          <div
            className="col-md-5"
            style={{
              marginLeft: "20px"
            }}
          >
            <span>
              <h2>Kriti Jar</h2>
            </span>
            <br />

            <span
              style={{
                textAlign: "center",
                lineHeight: "1.6rem!important",
                maxHeight: "3.2rem",
                fontSize: "1.2rem",
                fontWeight: "400",

                color: "rgba(0,0,0,.6)"
              }}
            >
              Actively seeking summer internship opportunities\Graduate computer
              science
            </span>
          </div>
          <div className="col-md-4" style={{ marginTop: "50px" }}>
            <a
              href="#"
              class="btn btn-primary"
              style={{
                textAlign: "center",
                backgroundColor: "white",
                color: "#006097",
                width: "80px",
                boxShadow: "inset 0 0 0 1px #006097",
                padding: "10 16px",

                font: "400 13.3333px Arial"
              }}
            >
              Accept
            </a>
            <a
              href="#"
              class="btn btn-primary"
              style={{
                textAlign: "center",
                backgroundColor: "white",
                color: "#006097",
                boxShadow: "inset 0 0 0 1px #006097",
                padding: "10 16px",
                width: "80px",
                marginLeft: "40px",
                font: "400 13.3333px Arial"
              }}
            >
              Ignore
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Invitations;

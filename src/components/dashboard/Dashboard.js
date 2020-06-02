import React, { Component } from "react";
import dashboard from "../css/dashboard.css";


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
      <div className="container">
        <div className="content">
          <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <div style={{ background: "#fae", marginLeft: 8, padding: 8, borderRadius: 2, borderColor: "red" }}>
              <h4>
                LIVE
              </h4>
            </div>
            {/* <div style={{ height: 50, width: 100, background: "red", marginLeft: 8 }}></div>
            <div style={{ height: 50, width: 100, background: "red", marginLeft: 8 }}></div>
            <div style={{ height: 50, width: 100, background: "red", marginLeft: 8 }}></div> */}
          </div>


          <div className="card_content">
            {arr.map((items, index) => (
              <div className="_card" >
                <div className="card_heading">
                  <p>Country Championship Division Two,2020</p>
                </div>
                <hr className="style-two" />
                <div className="match_place">
                  <p>
                    Match 1. London
                 </p>
                  <p>MID</p>
                  <p>WOR</p>

                  <div className="match_status">
                    <p>Match cancelled</p>
                  </div>
                </div>
                <div className="profile">
                  <div className="profile_img" />
                  <div className="man_of_the_match">
                    <p>TBA</p>
                    <p>
                      Man of the Match
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


    )
  }
}
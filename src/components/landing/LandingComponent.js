/* eslint react/prop-types: 0 */
import React, { Component } from "react";
import Slider from "react-slick";
// import "./../../css/landing.css";
import "../css/style.css";
import img from "../images/landing/header/leaguex_logo.png";
import mobile from "../images/landing/banner/leaguex_mobile.png";


export default class LandingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      scrollPosition: null
    };
    window.scrollTo(0, 0);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const userData = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : "";

    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  handleScroll() {
    this.setState({
      scrollPosition: window.scrollY
    });
  }

  render() {
    const card = [1, 2, 3, 4, 5]


    var settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 0,
      infinite: false,
      dots: false,
      variableWidth: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 575.98,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false
          }
        }
      ]
    };
    var matches = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      dots: false,
      variableWidth: true,
      arrows: true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false
          }
        }
      ]
    };
    var easyplayfade = {
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      pauseOnHover: true,
      focusOnSelect: true,
      fade: true,
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true
    };
    var easyplaytext = {
      slidesToShow: 4,
      slidesToScroll: 0,
      swipeToSlide: true,
      pauseOnHover: true,
      focusOnSelect: true,
      vertical: true,
      verticalSwiping: true,
      fade: false,
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false
          }
        }
      ]
    };

    return (
      <div className="main_container" >
        <div className="sub_container">
          <div style={{ height: 80, width: "100%", }}>
            <div
              className={
                this.state.scrollPosition > 40 ? "header sticky" : "header"
              }
            >
              <div className="header_inner">
                <div className="header_left">
                  <a href="https://www.leaguex.com/">
                    <img
                      src={img}
                      alt="Leaguex Logo"
                    />
                  </a>
                </div>
                <div className="header_right">
                  <ul>
                    <li className="header_points">
                      <a
                        onClick={() => {
                          alert("Working")
                        }
                        }
                      >
                        Points System
                  </a>
                    </li>
                    <li className="header_contact">
                      <a
                        onClick={() => {
                          alert("Working")
                        }
                        }
                      >
                        Contact Us
                  </a>
                    </li>
                    <li>
                      <a
                        className="btn-download"
                        onClick={() => {
                          alert("Working")
                        }
                        }
                      >
                        Download App
                  </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section className="banner">
            <div className="container2">
              <div className="banner_info ">
                <div className="banner_content">
                  <h1>
                    Play the Ultimate <span>Fantasy Sports</span>
                  </h1>
                  <div className="banner_tagline">
                    Show off your sports knowledge by picking squads{" "}
                    <span>and win real money daily.</span>
                  </div>
                  <div className="banner_button">
                    <a
                      onClick={() => {
                        alert("LOgin");
                      }

                      }
                      className="btn btn-black"
                    >
                      LOGIN
                  </a>
                    <a
                      onClick={() => {
                        alert("SignUp")
                      }}
                      className="btn btn-blue"
                    >
                      SIGNUP NOW & GET ₹100*
                  </a>
                  </div>
                </div>
                <div className="banner_mobile">
                  <img
                    src={mobile}
                  />

                </div>
              </div>
            </div>

          </section>

          {/* <div class="box effect1">
            <div className="card_header">
              <p >
                07:00 AM, 22 March
              </p>
              <div className="match_date">
                <span style={{ fontFamily: "barlow_bold" }}>
                  IND
              </span>
                <span>
                  VS
                </span>
                <span>
                  PAK
                </span>

              </div>
              <p style={{ marginTop: 2 }}>ODI</p>
            </div>
          </div> */}


          <section className="upcoming-matches">
            <div className="container2">
              <div className="section-title">
                <div className="popular_matches_bar" />
                <h3>Popular Matches</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                {card && card.map((item, index) => (
                  <div class="box effect1" key={index} style={{ marginLeft: 12 }}>
                    <div className="card_header">
                      <p >
                        07:00 AM, 22 March
                   </p>
                      <div className="match_date">
                        <span style={{ fontFamily: "barlow_bold" }}>
                          IND
                      </span>
                        <span>
                          VS
                      </span>
                        <span>
                          PAK
                      </span>

                      </div>
                      <p style={{ marginTop: 2 }}>ODI</p>
                    </div>
                  </div>
                ))}

              </div>

            </div>
          </section>
        </div>


      </div>
    );
  }
}

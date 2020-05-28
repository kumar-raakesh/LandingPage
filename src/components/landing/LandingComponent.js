/* eslint react/prop-types: 0 */
import React, { Component } from "react";
import Slider from "react-slick";
// import "./../../css/landing.css";
import "../css/style.css";
import leaguexLogo from "../images/landing/header/leaguex_logo.png";
import mobile from "../images/landing/banner/leaguex_mobile.png";
import Images from "../images/landing/highlights/instant_withdraw.png";
import Mobile1 from "../images/landing/downloadapp/matches_mobile.png";
import Mobile2 from "../images/landing/downloadapp/leagues-mobile.png";
import greenPath from "../images/landing/downloadapp/green_path.png";
import cashfree from "../images/landing/footer/cashfree.png";
import facebook from "../images/landing/footer/facebook.png";
import youtube from "../images/landing/footer/youtube.png";
import twitter from "../images/landing/footer/twitter.png";
import instagram from "../images/landing/footer/instagram.png";

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
      <div>
        <div
          className={
            this.state.scrollPosition > 40 ? "header sticky" : "header"
          }
        >
          <div className="header_inner content">
            <div className="header_left">
              <a href="https://www.leaguex.com/">
                <img
                  src={leaguexLogo}
                  alt="Leaguex Logo"
                />
              </a>
            </div>
            <div className="header_right">
              <ul>
                <li className="header_points">
                  <a
                  >
                    Points System
                  </a>
                </li>
                <li className="header_contact">
                  <a
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className="btn-download"
                  >
                    Download App
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="banner">
          <div className="content banner_fantasy">
            <div className="banner_content" >
              <h1>
                Play the Ultimate <span>Fantasy Sports</span>
              </h1>
              <div className="banner_tagline">
                Show off your sports knowledge by picking squads{" "}
                <span>and win real money daily.</span>
              </div>
            </div>
            <div className="banner_button">
              <a className="btn btn-black">
                LOGIN
              </a>
              <a className="btn btn-blue">
                SIGNUP NOW & GET ₹100*
              </a>
            </div>

            <div className="banner_mobile">
              <img
                src={mobile}
                className="banner_mobile_img"
              />
            </div>
          </div>
        </section>

        <section className="download-app">
          <div className="download-app_container">
            <div className="download_left">
              <img
                className="mobile1"
                alt="Mobile"
                src={Mobile1}
              />
              <img
                className="mobile2"
                alt="Mobile"
                src={Mobile2}
              />
            </div>
            <div className="download-app_right">
              <h2>Download for mobile</h2>
              <p>
                Experience LeagueX faster and better from anywhere with
                <span className="our_mobile">our mobile apps.</span>
              </p>
              <a
                className="btn btn-blue"
              >
                GET THE APP
                </a>
            </div>
          </div>
        </section>




        {/* <section className="upcoming-matches">
            <div className="container2">
              <div className="section-title">
                <div className="popular_matches_bar" />
                <h3>Popular Matches</h3>
              </div>
              <div className="match_card">
                {card && card.map((item, index) => (
                  <div class="card effect1" key={index} style={{ marginLeft: 12 }}>
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
          </section> */}


        {/* <section className="easy-play">
            <div className="container2">
              <div className="section-title">
                <h3 >Easy to play</h3>
              </div>
            </div>

          </section> */}



        {/* <section className="highlights">
            <div className="container2">
              <div className="section-title">
                <div className="card_title">More than just fantasy</div>
              </div>
              <div className="more_card">
                <div class="heightlight_card" >
                  <div className="withdraw_card">
                    <img
                      src={Images}
                      className="withdrawal_img"
                      alt="Instant Withdrawal"
                    />
                  </div>
                  <div className="card_label">
                    <h4>Instant Withdrawal</h4>
                  </div>
                  <div className="card_label">

                    <p>
                      Join in various types of leagues and increase your
                      probability to win.
                  </p>
                  </div>
                </div>

                <div class="heightlight_card" >
                  <div className="withdraw_card">
                    <img
                      src={Images}
                      className="withdrawal_img"
                      alt="Instant Withdrawal"
                    />
                  </div>
                  <div className="card_label">
                    <h4>More league types</h4>

                  </div>
                  <div className="card_label">

                    <p>
                      Win real money and withdraw your winnings to your bank
                      instantly.
                  </p>
                  </div>
                </div>
                <div class="heightlight_card" >
                  <div className="withdraw_card">
                    <img
                      src={Images}
                      className="withdrawal_img"
                      alt="Instant Withdrawal"
                    />
                  </div>
                  <div className="card_label">
                    <h4>Pick squad after toss</h4>
                  </div>
                  <div className="card_label">
                    <p>
                      You can pick your best squad even after the toss before
                      match starts.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        {/* <section className="fantasy-players_img">
            <div className="container2">
              <div className="section-title">
                <h3>Fantasy Players ❤️ LeagueX</h3>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 60, paddingBottom: 80 }}>
                <div className="fantasy_player">
                  <div
                    className="player_image"
                    style={{
                      backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      height: 100,
                      width: 100,
                      borderRadius: 100,
                      marginTop: -80

                    }}
                  />
                  <h4 className="player_name">MATHI</h4>
                  <div style={{ margin: 24, lineHeight: 1.2, textAlign: "center" }}>

                    <p>
                      I have been playing fantasy sports from long time And I
                      think LeagueX is the best one that I’ve Played with all
                      the unique features.
                    </p>
                  </div>
                </div>

                <div className="fantasy_player">
                  <div
                    className="player_image"
                    style={{
                      backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      height: 100,
                      width: 100,
                      borderRadius: 100,
                      marginTop: -80

                    }}
                  />
                  <h4 className="player_name">MATHI</h4>
                  <div style={{ margin: 24, lineHeight: 1.2, textAlign: "center" }}>

                    <p>
                      I have been playing fantasy sports from long time And I
                      think LeagueX is the best one that I’ve Played with all
                      the unique features.
                    </p>
                  </div>
                </div>

                <div className="fantasy_player">
                  <div
                    className="player_image"
                    style={{
                      backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      height: 100,
                      width: 100,
                      borderRadius: 100,
                      marginTop: -80

                    }}
                  />
                  <h4 className="player_name">MATHI</h4>
                  <div style={{ margin: 24, lineHeight: 1.2, textAlign: "center" }}>
                    <p>
                      I have been playing fantasy sports from long time And I
                      think LeagueX is the best one that I’ve Played with all
                      the unique features.
                    </p>
                  </div>
                </div>
              </div>
              <div className="league_count">
                <div>
                  <h2>23768768+</h2>
                  <p>Total Winners</p>
                </div>

                <div>
                  <h2>23768768+</h2>
                  <p>Total Winnings</p>
                </div>

                <div>
                  <h2>23768768+</h2>
                  <p>Total League count</p>
                </div>
              </div>

            </div>
          </section> */}



        {/* <section className="download-app">
            <img
              className="download-app_green-path"
              src={greenPath}
              alt=""
            />
            <div className="container2">
              <div className="mobile_">
                <img
                  className="mobile1"
                  alt="Mobile"
                  src={Mobile1}
                />
                <img
                  className="mobile2"
                  alt="Mobile"
                  src={Mobile2}
                />
                <div className="download-app_right">
                  <h2>Download for mobile</h2>
                  <p>
                    Experience LeagueX faster and better from anywhere with
                  <span>our mobile apps.</span>
                  </p>
                  <a
                    className="btn btn-blue"
                  >
                    GET THE APP
                </a>
                </div>
              </div>


            </div>
          </section> */}

        <section className="footer">
          <div className="footer_top">
            <div className="content">
              <div className="footer_content">
                <div className="footer_section">
                  <div className="footer_title">About the game</div>
                  <div className="footer_col1">
                    <ul>
                      <li>
                        <a>
                          How to Play
                        </a>
                      </li>
                      <li>
                        <a>
                          Fantasy Points System
                        </a>
                      </li>
                      <li>
                        <a>
                          {`FAQ's`}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer_section">
                  <div className="footer_title">About LeagueX</div>
                  <div className="footer_col1">
                    <ul>
                      <li>
                        <a>
                          Legeal
                        </a>
                      </li>
                      <li>
                        <a>
                          We are secured
                        </a>
                      </li>
                      <li>
                        <a>
                          Terms & Conditions
                          </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="footer_section">
                  <div className="footer_title">Get updates in</div>
                  <div className="footer_col1">
                    <ul>
                      <li>
                        <a>
                          We are secured
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", width: 200, }}>
                    <img
                      src={facebook}
                      alt="Facebook"
                      className="facebook"
                    />
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="instagram"
                    />
                    <img
                      src={twitter}
                      alt="twitter"
                      className="twitter"

                    />
                    <img
                      src={youtube}
                      alt="youtube"
                      className="youtube"

                    />
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <img
                      src={cashfree}
                      alt="Cashfree"
                    />
                  </div>
                </div>
                <div className="footer_section_col4">
                  <div className="footer_title">For more queries</div>
                  <div className="footer_col4">
                    <a
                      className="btn btn-outline"
                    >
                      CONTACT
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="footer_bottom">
            <div className="container">
              <div className="footer_not-affiliated">
                <p>
                  {`LeagueX is not affiliated in any way to and claims no
                  association, in any capacity whatsoever, with the (i)
                  International Cricket Council ("ICC") or any national cricket
                  board or team, (ii) Board of Control for Cricket in India
                  ("BCCI"), the Indian Premier League ("IPL") or any IPL
                  franchises, or (iii) any other domestic cricket
                  tournament/league, or tournament franchise/team (other than
                  where specifically stated). LeagueX acknowledges that the ICC,
                  BCCI/IPL and its franchises, respective national cricket
                  boards, domestic tournament organisers and franchises/teams,
                  respectively, own all proprietary names and marks relating to
                  the relevant tournament or competition.`}
                </p>
                <p className="footer_notplay">
                  Residents of the states of Assam, Odisha and Telangana, and
                  where otherwise prohibited by law are not eligible to enter
                  LeagueX’s pay-to-play leagues.
                </p>
              </div>
              <div className="footer_copyright">
                Copyright &copy; LeagueX. All rights reserved.
              </div>
            </div>
          </div>
        </section>
        <div className="bottom_banner" >
          <a style={{ padding: 20, textAlign: "center", fontSize: 14 }}>
            SIGNUP NOW & GET ₹100*
          </a>
        </div>
      </div >
    );
  }
}

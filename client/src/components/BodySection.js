import React from "react";
import "../assets/BodySection.css";
import Grid from "@material-ui/core/Grid";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function BodySection(props) {
  return (
    <>
      <div className="background">
        <div
          style={{ textAlign: "-webkit-center", backgroundColor: "#f0ede8" }}
        >
          <ul id="nav-main-list">
            <li class="nav-main-sublist dropdown">
              <a href="javascript:void(0)" class="dropbtn">
                Man
              </a>
              <div class="dropdown-content">
                <Link to="/product">
                  <a href="/product">Jacket</a>
                </Link>
                <Link to="/jean">
                  <a href="/jean">Jean</a>
                </Link>
                <Link to="/t-shirt">
                  <a href="/t-shirt">T-shirt</a>
                </Link>
              </div>
            </li>
            <li class="nav-main-sublist dropdown">
              <a href="javascript:void(0)" class="dropbtn">
                Woman
              </a>
              <div class="dropdown-content">
                <Link to="/femalejacket">
                  <a href="/femalejacket">Jacket</a>
                </Link>
                <Link to="/femalejean">
                  <a href="/femalejean">Jean</a>
                </Link>
                <Link to="/femalet-shirt">
                  <a href="/femalet-shirt">T-shirt</a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="body-one-container">
          <div className="body-one-wrapper">
            <Grid container spacing={0} className="center">
              {/* <Grid item xs={6} className='set-relative'>
                  <img 
                    className='img-body-section' 
                    src="https://www.scotch-soda.com/on/demandware.static/-/Sites/default/dw259dcb42/campaigns/WK51_HP_NYE_02_d-2.jpg" 
                    alt="Gift one"></img>
                </Grid>
                <Grid item xs={6} className='set-relative'>
                  <img 
                    className='img-body-section' 
                    src="https://www.scotch-soda.com/on/demandware.static/-/Sites/default/dwa438167c/campaigns/WK51_HP_NYE_03_d-2.jpg" 
                    alt="Gift two"></img>
                </Grid> */}
              <Grid item xs={12} className="set-relative">
                <img
                  className="img-body-section"
                  src="https://www.scotch-soda.com/on/demandware.static/-/Sites/default/dwa13f52f5/campaigns/Fall21_WK23_HP_Women_New_Arrivals_d.jpg"
                  alt="One"
                ></img>
              </Grid>
              <Grid item xs={9} className="set-absolute">
                <div className="copy">
                  <h2>Look ahead</h2>
                  <div>Styles to take you on all your adventures.</div>
                  <section className="buttons">
                    <Link to="/femalejacket">
                      <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                        style={{ maxWidth: "190px" }}
                      >
                        Shop now
                      </Button>
                    </Link>
                    <Link to="/product">
                      <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                        style={{ maxWidth: "190px" }}
                      >
                        Read more
                      </Button>
                    </Link>
                    {/* <Link to="/product">
                      <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                      >
                        See more
                      </Button>
                      </Link> */}
                  </section>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="body-two-container">
          <div className="body-two-wrapper">
            <Grid container spacing={0} className="center">
              {/* <Grid item xs={6} className='set-relative'>
                  <img 
                    className='img-body-section' 
                    src="https://www.scotch-soda.com/on/demandware.static/-/Sites/default/dw23dccba4/campaigns/WK50_HP_04_d.jpg" 
                    alt="Gift one"></img>
                </Grid>
                <Grid item xs={6} className='set-relative'>
                <img 
                    className='img-body-section' 
                    src="https://www.scotch-soda.com/on/demandware.static/-/Sites/default/dw8b8e1866/campaigns/WK50_HP_05_d.jpg" 
                    alt="Gift one"></img>
                </Grid> */}
              <Grid item xs={12} className="set-relative">
                <img
                  className="img-body-section"
                  src="https://www.scotch-soda.com/on/demandware.static/-/Sites/default/dw99632fb4/campaigns/Fall21_WK23_HP_Women_Earthy_Shades_d.jpg"
                  alt="Gift one"
                ></img>
              </Grid>
              {/* <Grid item xs={6} className='set-absolute'> */}
              <Grid item xs={6} style={{ position: "absolute", bottom: "5%" }}>
                <div className="copy">
                  <h2>Earthy shades</h2>
                  {/* <div>Styles to take you on all your adventures.</div> */}
                  <section className="buttons" style={{ bottom: "5%" }}>
                    <Link to="/femalejacket">
                      <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                      >
                        Shop now
                      </Button>
                    </Link>
                    {/* <Link to="/product">
                        <Button
                          className='btns'
                          buttonStyle='btn--outline'
                          buttonSize='btn--large'
                          onClick={console.log('man clothes')}
                        >
                          Shop boys
                        </Button>
                      </Link> */}
                  </section>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="body-three-container">
          <div className="body-three-wrapper">
            <div
              style={{
                fontSize: "26px",
                fontFamily: "Alegreya",
                fontWeight: "bold",
              }}
            >
              #KingOnMe
            </div>
            <div>
              Curated authentic inspiration. Shop the beauty behind our
              Instagram feed with just one click.
            </div>
            <Grid container spacing={0} className="center">
              <div item xs={6} className="set-center">
                <img
                  className="img-body-section"
                  src="https://d2rfa446ja7yzb.cloudfront.net/eyJidWNrZXQiOiJtaXJyb3IuZ2V0Zmxvd2JveC5jb20uZXUtd2VzdC0xLmxpdmUiLCJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMME5RV1hadE5uVklUbFk0THc9PS90aHVtYm5haWwiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjQ4MH19fQ=="
                  alt="Gift one"
                ></img>
                <img
                  className="img-body-section"
                  src="https://d2rfa446ja7yzb.cloudfront.net/eyJidWNrZXQiOiJtaXJyb3IuZ2V0Zmxvd2JveC5jb20uZXUtd2VzdC0xLmxpdmUiLCJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMME5RVVRGUFdrNXFaRWMyTHc9PS90aHVtYm5haWwiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ=="
                  alt="Gift one"
                ></img>
                <img
                  className="img-body-section"
                  src="https://d2rfa446ja7yzb.cloudfront.net/eyJidWNrZXQiOiJtaXJyb3IuZ2V0Zmxvd2JveC5jb20uZXUtd2VzdC0xLmxpdmUiLCJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMME5RVEhoUlMyZHdWMVJaTHc9PS90aHVtYm5haWwiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ=="
                  alt="Gift one"
                ></img>
                <img
                  className="img-body-section"
                  src="https://d2rfa446ja7yzb.cloudfront.net/eyJidWNrZXQiOiJtaXJyb3IuZ2V0Zmxvd2JveC5jb20uZXUtd2VzdC0xLmxpdmUiLCJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMME5RUjIxSE5ubE5lbHBzTHc9PS90aHVtYm5haWwiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ=="
                  alt="Gift one"
                ></img>
              </div>
            </Grid>
          </div>
        </div>

        <div className="body-four-container">
          <div className="body-four">
            <div
              style={{
                fontFamily: "Alegreya",
                fontSize: "30px",
                fontWeight: "600",
                margin: "16px 0 50px 0",
              }}
            >
              Suggesstion box
            </div>
            <div
              style={{
                fontFamily: "Alegreya",
                fontSize: "18px",
                maxWidth: "560px",
                textAlignLast: "center",
              }}
            >
              Due to our new born child, there will be some mistask. So do tell
              us what server you'd like to improve in the future
            </div>
            <div className="suggest-box">
              <input
                id="login-email"
                type="email"
                placeholder="Your Email Address"
              />
              <button className="button-send">
                <a href="/">Send</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodySection;

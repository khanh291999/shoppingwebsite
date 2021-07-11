import React from "react";
import "../assets/AboutUs.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <section className="hero-container">
        <div className="wave-absolute">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className={classes.paper} className="wave-header">
                We Are <span>K&Q</span> <br />
                <div>Providing you with the most actionable website.</div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div id="wave-img-box">
                <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjEvMDUvMDUvMDUvNTUvNTMvNDAyZDVhOTEtZTMwMy00MTc0LTkyMTAtN2Q3YmQxMDM4ZmI1L0dyb3VwIDRAMngucG5nIl1d/9695760c59b32b16/Group%204%402x.png?name=Group+4%402x" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.paper}>
                <div id="wave-header-content">
                  <p>
                    We are currently a student at Ho Chi Minh University of
                    Technology and Education
                  </p>
                  <p>
                    This K&Q e-commerce website is our Final-Final project and
                    it use REACT technology to build. This website has some
                    smart features, and its user experience has also improved
                    from the last project.
                  </p>
                  <p>
                    Despite the improvement, there still some error on the
                    website. But feel free to experience because this is our
                    best effort. Thank you.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <section className="about-leader">
        <div style={{ width: "80%", margin: "auto" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div
                className={classes.paper}
                style={{ fontSize: "34px", color: "#000" }}
              >
                Meet Our{" "}
                <span style={{ color: "#b19560", fontWeight: "bold" }}>
                  Member
                </span>
              </div>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "-webkit-center" }}>
              <div>
                <Grid
                  container
                  spacing={3}
                  style={{ textAlign: "-webkit-center center" }}
                >
                  <Grid item xs={12}>
                    <div id="img-box">
                      <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/154004316_886280068873569_207835256949117669_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=vFKBPKBkd1MAX905GxN&_nc_ht=scontent-xsp1-2.xx&oh=440107796ccfd23d05b1ef639e277dc8&oe=60D13E77" />
                    </div>
                    <div className="leader-info">
                      <div>
                        <div
                          style={{
                            fontSize: "20px",
                            color: "#555f77",
                            fontWeight: 600,
                          }}
                        >
                          Nguyen Huu Quyen
                        </div>
                        <div style={{ marginTop: "10px", fontSize: "16px" }}>
                          17110071
                        </div>
                      </div>
                      <p style={{ border: "0.5px solid", width: "8%" }}></p>
                      <div className="leader-decribe">
                        Drives Apptopia’s strategic vision and manages investor
                        relations. Before Apptopia Eli was involved in several
                        startups, including: GPush, Oasys Water, GreatPoint
                        Energy, and DVTel.
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "-webkit-center" }}>
              <div>
                <Grid
                  container
                  spacing={3}
                  style={{ textAlign: "-webkit-center center" }}
                >
                  <Grid item xs={12}>
                    <div id="img-box">
                      <img src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/57128382_1080220895519208_2983454892787499008_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-qClRcDc8swAX_FMTiS&_nc_ht=scontent-xsp1-1.xx&oh=36e60bef5dbc40158fc8e546bf713f5b&oe=60D34E2C" />
                    </div>
                    <div className="leader-info">
                      <div>
                        <div
                          style={{
                            fontSize: "20px",
                            color: "#555f77",
                            fontWeight: 600,
                          }}
                        >
                          Do Quoc Khanh
                        </div>
                        <div style={{ marginTop: "10px", fontSize: "16px" }}>
                          17110041
                        </div>
                      </div>
                      <p style={{ border: "0.5px solid", width: "8%" }}></p>
                      <div className="leader-decribe">
                        Drives Apptopia’s strategic vision and manages investor
                        relations. Before Apptopia Eli was involved in several
                        startups, including: GPush, Oasys Water, GreatPoint
                        Energy, and DVTel.
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <section className="about-store-location">
        <div
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5%",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div
                className={classes.paper}
                style={{ fontSize: "34px", color: "#000" }}
              >
                Our{" "}
                <span style={{ color: "#b19560", fontWeight: "bold" }}>
                  Locations
                </span>
              </div>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "-webkit-center" }}>
              <div>
                <Grid
                  container
                  spacing={3}
                  style={{ textAlign: "-webkit-center center" }}
                >
                  <Grid item xs={12}>
                    <div style={{ margin: "6%" }}>
                      <div
                        style={{
                          width: "170px",
                          height: "220px",
                          display: "inline-block",
                        }}
                      >
                        <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTIvMjAvMTMvMDQvMzIvYTdlZjRiZmItMGZlNS00NzI5LWJlNDEtZmM1MjIxYzJkYzYxL2hxLWJ1aWxkaW5nQDJ4LnBuZyJdXQ/036793073aef6198/hq-building%402x.png?name=hq-building%402x" />
                      </div>
                      <div style={{ display: "inline-block" }}>
                        <div
                          style={{
                            textAlign: "-webkit-left",
                            paddingLeft: "10px",
                            marginRight: "-10px",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "20px",
                              color: "#555f77",
                              fontWeight: 600,
                            }}
                          >
                            HQ TPHCM
                          </div>
                          <div className="location-detail">
                            1 Võ Văn Ngân, Linh Chiểu, Thủ Đức, Thành phố Hồ Chí
                            Minh, Việt Nam
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "-webkit-center" }}>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4765140289724!2d106.75338911477954!3d10.851315392270745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527bd80c66b4f%3A0x1243c8a70dc5d2e0!2zMSBWw7UgVsSDbiBOZ8OibiwgTGluaCBDaGnhu4N1LCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1621914653433!5m2!1svi!2s"
                  style={{ width: "500px", height: "350px", border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
}

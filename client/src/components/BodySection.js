import React from 'react';
import "../assets/BodySection.css"
import Grid from '@material-ui/core/Grid'

function BodySection() {
  return (
    <div className='background'>
        <div className='body-one-container'>
          <div className='body-one-wrapper'>
            <Grid container spacing={0} className="center">
                <Grid item xs={6} className='set-relative'>
                  <img className='img-body-section' src={require('../assets/pciture/test1.jpg')} alt="Gift one image"/>
                </Grid>
                <Grid item xs={6} className='set-relative'>
                  <video autoPlay loop muted>
                    <source src={require('../assets/video/video2.mp4')} type="video/mp4"/>
                  </video>
                </Grid>
                <Grid item xs={6} className='set-absolute'>
                  <div className='copy'>
                    <h2>Give from the heart</h2>
                    <div>Show your loved ones how much you care with our gift guide.</div>
                    <section className='buttons'>
                      <a href="/">
                        Shop men's gifting
                      </a>
                      <a href="/">
                      Shop women's gifting
                      </a>
                    </section>
                  </div>
                </Grid>
            </Grid>
          </div>
        </div>

        <div className='body-two-container'>
          <div className='body-two-wrapper'>
            <div className='center'>
              <div className='set-relative'>
                <img className='img-body-section' src={require('../assets/pciture/test2.jpg')} alt="Holiday gift image"/>
              </div>
              <div className='set-absolute'>
                <div className='copy'>
                    <h2>Mini festive lookst</h2>
                    <div>From party dresses to fun knitwear, dress them up in this holiday season.</div>
                    <section className='buttons'>
                      <a href="/">
                        Shop girls
                      </a>
                      <a href="/">
                        Shop boys
                      </a>
                    </section>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default BodySection;

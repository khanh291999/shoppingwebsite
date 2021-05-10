import React from 'react';
import "../assets/BodySection.css"
import Grid from '@material-ui/core/Grid'
import {Button} from './Button';
import {Link} from 'react-router-dom'

function BodySection(props) {
  return (
    <>
    <div className='background'>
        <div className='body-one-container'>
          <div className='body-one-wrapper'>
            <Grid container spacing={0} className="center">
                <Grid item xs={6} className='set-relative'>
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
                </Grid>
                <Grid item xs={9} className='set-absolute'>
                  <div className='copy'>
                    <h2>5...4...3...2...</h2>
                    <div>This New Year's Eve may be different. But the countdown's still on. So let's embrace the spirit and get dressed up – because if nothing else, it sure feels good.</div>
                    <section className='buttons'>
                    <Link to="/femalejacket">
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                      >
                        Shop Woman
                      </Button>
                    </Link>
                    <Link to="/product">
                      <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                      >
                        Shop Man
                      </Button>
                      </Link>
                      <Link to="/product">
                      <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                      >
                        See more
                      </Button>
                      </Link>
                    </section>
                  </div>
                </Grid>
            </Grid>
          </div>
        </div>

        <div className='body-two-container'>
          <div className='body-two-wrapper'>
          <Grid container spacing={0} className="center">
                <Grid item xs={6} className='set-relative'>
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
                </Grid>
                <Grid item xs={6} className='set-absolute'>
                  <div className='copy'>
                    <h2>Let's get ready to party</h2>
                    <div>Special outfits we've been waiting to wear all year.</div>
                    <section className='buttons'>
                    <Link to="/femalejacket">
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={console.log('woman clothes')}
                      >
                        Shop girls 
                      </Button>
                      </Link>
                      <Link to="/product">
                      <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={console.log('man clothes')}
                      >
                        Shop boys
                      </Button>
                      </Link>
                    </section>
                  </div>
                </Grid>
            </Grid>
          </div>
        </div>
    
        <div className='body-three-container'>
          <div className='body-three-wrapper'>
            <div style={{fontSize:"26px", fontFamily:"Alegreya", fontWeight:"bold"}}>#KingOnMe</div>
            <div>
              Curated authentic inspiration. Shop the beauty behind our Instagram feed with just one click.
            </div>
            <Grid container spacing={0} className="center">
              <div item xs={6} className="set-center">
                <img 
                  className='img-body-section' 
                  src="https://d2rfa446ja7yzb.cloudfront.net/eyJidWNrZXQiOiJtaXJyb3IuZ2V0Zmxvd2JveC5jb20uZXUtd2VzdC0xLmxpdmUiLCJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMME5KWWtwa1ZUUm9NSEJNTHc9PS90aHVtYm5haWwiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjEwODB9fX0=" 
                  alt="Gift one">
                </img>
                <img 
                  className='img-body-section' 
                  src="https://d2rfa446ja7yzb.cloudfront.net/eyJidWNrZXQiOiJtaXJyb3IuZ2V0Zmxvd2JveC5jb20uZXUtd2VzdC0xLmxpdmUiLCJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMME5KWkc1a1VreElMWHA0THc9PS90aHVtYm5haWwiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjEwODB9fX0=" 
                  alt="Gift one">
                </img>
                <img 
                    className='img-body-section' 
                    src="https://d2rfa446ja7yzb.cloudfront.net/eyJidWNrZXQiOiJtaXJyb3IuZ2V0Zmxvd2JveC5jb20uZXUtd2VzdC0xLmxpdmUiLCJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMME5KWVZSU1h6SnFlRXRoTHc9PS90aHVtYm5haWwiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjc1MH19fQ==" 
                    alt="Gift one">
                  </img>
                  <img 
                    className='img-body-section' 
                    src="https://d2rfa446ja7yzb.cloudfront.net/eyJidWNrZXQiOiJtaXJyb3IuZ2V0Zmxvd2JveC5jb20uZXUtd2VzdC0xLmxpdmUiLCJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMME5JVEZOdFFUaG5NWGxXTHc9PS90aHVtYm5haWwiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjc1MH19fQ==" 
                    alt="Gift one">
                  </img>
              </div>
            </Grid>
          </div>
        </div>
    
        <div className='body-four-container'>
          <div className='body-four'>
            <div style={{
                fontFamily: "Alegreya",
                fontSize: "30px",
                fontWeight: "600",
                margin: "16px 0 50px 0"}}>
            Suggesstion box
            </div>
            <div
            style={{fontFamily: "Alegreya",
              fontSize: "18px",
              maxWidth: "560px",
              textAlignLast: "center"}}>
              Due to our new born child, there will be some mistask. So do tell us what server you'd like to improve in the future 
            </div>
            <div className="suggest-box">
              <input
                id="login-email"
                type="email"
                placeholder="Your Email Address"
              />
              <button className="button-send">
                <a href="/">
                  Send
                </a>
              </button>
            </div>
          </div>
            
        </div>
    </div>
    </>
  );
}

export default BodySection;

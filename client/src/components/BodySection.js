import React from 'react';
import "../assets/BodySection.css"
import Grid from '@material-ui/core/Grid'
import {Button} from './Button';

function BodySection() {
  return (
    <div className='background'>
        <div className='body-one-container'>
          <div className='body-one-wrapper'>
            <Grid container spacing={0} className="center">
                <Grid item xs={6} className='set-relative'>
                  <img 
                    className='img-body-section' 
                    src="https://www.scotch-soda.com/on/demandware.static/-/Sites/default/dw259dcb42/campaigns/WK51_HP_NYE_02_d-2.jpg" 
                    alt="Gift one image"></img>
                </Grid>
                <Grid item xs={6} className='set-relative'>
                <img 
                    className='img-body-section' 
                    src="https://www.scotch-soda.com/on/demandware.static/-/Sites/default/dwa438167c/campaigns/WK51_HP_NYE_03_d-2.jpg" 
                    alt="Gift one image"></img>
                </Grid>
                <Grid item xs={9} className='set-absolute'>
                  <div className='copy'>
                    <h2>5...4...3...2...</h2>
                    <div>This New Year's Eve may be different. But the countdown's still on. So let's embrace the spirit and get dressed up – because if nothing else, it sure feels good.</div>
                    <section className='buttons'>
                      <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={console.log('woman clothes')}
                      >
                        Shop Woman
                      </Button>
                      <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={console.log('man clothes')}
                      >
                        Shop Man
                      </Button>
                      <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={console.log('man clothes')}
                      >
                        See more
                      </Button>
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
                    alt="Gift one image"></img>
                </Grid>
                <Grid item xs={6} className='set-relative'>
                <img 
                    className='img-body-section' 
                    src="https://www.scotch-soda.com/on/demandware.static/-/Sites/default/dw8b8e1866/campaigns/WK50_HP_05_d.jpg" 
                    alt="Gift one image"></img>
                </Grid>
                <Grid item xs={6} className='set-absolute'>
                  <div className='copy'>
                    <h2>Let's get ready to party</h2>
                    <div>Special outfits we've been waiting to wear all year.</div>
                    <section className='buttons'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={console.log('woman clothes')}
                      >
                        Shop girls 
                      </Button>
                      <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={console.log('man clothes')}
                      >
                        Shop boys
                      </Button>
                    </section>
                  </div>
                </Grid>
            </Grid>
          </div>
        </div>
    </div>
  );
}

export default BodySection;

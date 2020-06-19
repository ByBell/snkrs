import React from 'react'

import { Grid, Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'; 

import SneakerBgShape from '../../library/headerimg.png';
import LastAuth from '../../library/lastauth.svg';

const useStyles = makeStyles({
  leftpanel: {
    height: "100%", 
    width: 400, 
    marginLeft: 100
  },
});

const HeaderComponent = () => {
  const classes = useStyles()
  
  return (
    <Grid container justify="space-between" alignContent="center" style={{background: "url('bgHeader.svg') no-repeat center center"}}>
      <Grid item style={{ width: '50%'}}>
        <Grid container className={classes.leftpanel} justify="center" direction="column">

          <Grid item>
            <Grid container justify="center" direction="column">
              <Grid item>
                <h2>Authentifiez votre paire de sneakers</h2>
              </Grid>
              <Grid item>
                <p>Soyez certain de l'authenticité de vos sneakers et augmentez leurs côtes. En un clic c'est fait !</p>
              </Grid>
              <Grid item>
                <Button variant="text" color="default">
                  AUTHENTIFIER !
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{position: 'absolute', bottom: 220}}>
            <img src={LastAuth} alt=""/>
          </Grid>
        </Grid>


      </Grid>

      <Grid item style={{ width: '50%', textAlign: 'center'}}>
        {/* <SneakerBgShape/> */}
        <img src={SneakerBgShape} alt=""/>
      </Grid>
    </Grid>
  )
}

export default HeaderComponent

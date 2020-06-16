import React from 'react'

import { Grid, Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'; 

// import {ReactComponent as SneakerBgShape} from '../../library/headerimg.png';
import SneakerBgShape from '../../library/headerimg.png';

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
    <Grid container justify="space-between" alignContent="center">
      <Grid item style={{ width: '50%'}}>
        <Grid container className={classes.leftpanel} justify="center" direction="column">

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

      <Grid item style={{ width: '50%', textAlign: 'center'}}>
        {/* <SneakerBgShape/> */}
        <img src={SneakerBgShape} alt=""/>
      </Grid>
    </Grid>
  )
}

export default HeaderComponent

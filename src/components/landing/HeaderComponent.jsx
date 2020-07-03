import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { Grid, Button, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'; 
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

import SneakerBgShape from '../../library/headerimg.png';
import LastAuth from '../../library/lastauth.svg';

const useStyles = makeStyles((theme) => ({
  leftpanel: {
    height: "100%", 
    width: '80%', 
    marginLeft: 100
  },
  roundbtn: {
    borderRadius: 50,
    marginRight: theme.spacing(1),
    padding: '10px 30px',
    background: '#344BFF',
    color: 'white'
  },
}));

const HeaderComponent = () => {
  const classes = useStyles()
  
  return (
    <Grid container justify="space-between" alignContent="center" style={{background: "url('bgHeader.svg') no-repeat 100px center"}}>
      <Grid item style={{ width: '50%', paddingLeft: 60}}>
        <Grid container className={classes.leftpanel} justify="center" direction="column">

          <Grid item>
            <Grid container justify="center" direction="column">
              <Grid item>
                <Typography variant="h2">Authentifie ta paire de sneakers</Typography>
              </Grid>
              <Grid item>
                <p>Soyez certain de l'authenticité de vos sneakers et augmentez leurs cotes. <br/>En un clic c'est fait !</p>
              </Grid>
              <Grid item>
              <Button
                component={RouterLink}
                to="/get-reservation"
                variant="contained"
                color="primary"
                className={classes.roundbtn}
                endIcon={<ArrowRightAltIcon/>}
                >
                  AUTHENTIFIER
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{position: 'absolute', marginTop: 480}}>
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

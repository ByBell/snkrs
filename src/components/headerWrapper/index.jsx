import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { Grid, Typography, Button } from '@material-ui/core'

import { useLocation, Link as RouterLink } from 'react-router-dom'

import {ReactComponent as SNKRLOGO} from '../../library/SNKRLOGO.svg'

const useStyles = makeStyles((theme) => ({
  header: {
    padding: '50px 100px',
  },
  headerNoBP: {
    padding: '50px 100px',
    paddingBottom: 0
  },
  brandName: {
    fontWeight: 'bold',
    fontSize: 30
  },
  roundbtn: {
    borderRadius: 50,
    marginRight: theme.spacing(1),
    padding: '10px 30px',
    background: '#344BFF',
    color: 'white'
  },
  footer: {
    marginTop: 100,
    background: '#F8F8FF',
    padding: '40px 100px 12px 100px'
  },
  ml50: {
    marginLeft: 30
  }
}));

const HeaderWrapper = ({children}) => {
  const classes = useStyles()

  const location = useLocation()
  console.log(location)

  return (
    <>
      <Grid className={location.pathname === '/' ? classes.header : classes.headerNoBP} container justify="space-between" alignItems="center">
        <Grid item>
          <Typography component={RouterLink} to="/" className={classes.brandName} variant="h1" color="initial"><SNKRLOGO/></Typography>
        </Grid>

        <Grid item hidden={location.pathname !== '/'}>
          <Button className={classes.ml50} component={RouterLink} to="/#commentçamarche">
            COMMENT ÇA MARCHE ?
          </Button>
          <Button className={classes.ml50} component={RouterLink} to="/#prix">
            LE PRIX
          </Button>
          <Button className={classes.ml50} component={RouterLink} to="/#sav">
            S.A.V
          </Button>
          <Button className={classes.ml50} component={RouterLink} to="/#contact">
            CONTACT
          </Button>
          <Button className={`${classes.ml50} ${classes.roundbtn}`} component={RouterLink} to="/get-reservation" variant="contained">
            AUTHENTIFIER
          </Button>
          
        </Grid>
      </Grid>

      <div>
        {children}
      </div>

      <div className={classes.footer}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography component={RouterLink} to="/" className={classes.brandName} variant="h1" color="initial"><SNKRLOGO/></Typography>
          </Grid>

          <Grid item>
            <Grid container direction="column">
              <Button component={RouterLink} to="/#commentçamarche">
                COMMENT ÇA MARCHE ?
              </Button>
              <Button component={RouterLink} to="/#prix">
                LE PRIX
              </Button>
              <Button component={RouterLink} to="/#sav">
                S.A.V
              </Button>
              <Button component={RouterLink} to="/#contact">
                CONTACT
              </Button>
              <Button component={RouterLink} to="/get-reservation">
                AUTHENTIFIER
              </Button>
            </Grid>
          </Grid>
        </Grid>
        
        <Typography style={{textAlign: 'center', fontSize: 12}}>© COPYRIGHT 2020 - Tous droits réservés | SNKRS TRUST</Typography>
      </div>
    </>
  )
}

export default HeaderWrapper

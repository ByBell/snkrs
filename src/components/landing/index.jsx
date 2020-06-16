import React from 'react'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'; 

import HeaderComponent from './HeaderComponent'
import ContactFormComponent from '../contactform'

const useStyles = makeStyles({
  brandName: {
    marginTop: 50,
    marginLeft: 100,
    fontWeight: 'bold',
    fontSize: 30
  },
});

const LandingContainer = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography className={classes.brandName} variant="h1" color="initial">SNKRS TRUST</Typography>
      <HeaderComponent/>
      <Typography variant="h1" color="initial">
        {/* LandingContainer */}
      </Typography>
      <ContactFormComponent />
    </div>
  )
}

export default LandingContainer

import React from 'react'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'; 

import HeaderComponent from './HeaderComponent'
import ContactFormComponent from '../contactform'

import {ReactComponent as SNKRLOGO} from '../../library/SNKRLOGO.svg'

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
      <Typography className={classes.brandName} variant="h1" color="initial"><SNKRLOGO/></Typography>
      <HeaderComponent/>
      <Typography variant="h1" color="initial">
        {/* LandingContainer */}
      </Typography>
      <ContactFormComponent />
    </div>
  )
}

export default LandingContainer

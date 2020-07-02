import React from 'react'
import {Link as RouterLink} from 'react-router-dom'

import { Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles(theme => ({
  roundbtn: {
    borderRadius: 50,
    marginRight: theme.spacing(1),
    padding: '10px 30px'
  },
}));

const ContactBtn = () => {
  const classes = useStyles()

  return (
    <Button
      component={RouterLink}
      to="/"
      variant="contained"
      color="primary"
      className={classes.roundbtn}
      >
        CONTACT-NOUS
      </Button>
  )
}

export default ContactBtn

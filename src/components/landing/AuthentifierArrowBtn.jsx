import React from 'react'
import {Link as RouterLink} from 'react-router-dom'

import { Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'; 
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const useStyles = makeStyles(theme => ({
  roundbtn: {
    borderRadius: 50,
    marginRight: theme.spacing(1),
    padding: '10px 30px'
  },
}));

const AuthentifierArrowBtn = () => {
  const classes = useStyles()

  return (
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
  )
}

export default AuthentifierArrowBtn

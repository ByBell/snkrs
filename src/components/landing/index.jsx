import React from 'react'

import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'; 

import HeaderComponent from './HeaderComponent'
import ContactFormComponent from '../contactform'

import {ReactComponent as SNKRLOGO} from '../../library/SNKRLOGO.svg'
import {ReactComponent as ThreeSteps} from '../../library/3steps.svg'

import {ReactComponent as FirststepSneakers} from '../../library/firststepSneakers.svg'
import {ReactComponent as FirststepRdv} from '../../library/firststepRdv.svg'

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

      <Grid container direction="column" justify="center" alignItems="center" style={{marginTop: 120}}>
        <Grid item>Comment ça marche ?</Grid>
        <Grid item>Un service en trois étapes</Grid>
        <Grid item><ThreeSteps/></Grid>
      </Grid>

      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <FirststepSneakers/>
            </Grid>
            <Grid item>
              <Typography>
                Prise en charge directement chez toi
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
              Ne te dérange pas ! Nous récupérons ta 
  paire directement chez toi. Tu remplis tes disponibilités sur la plateforme, et nous venons chez toi pour récupérer la paire quand tu le souhaites. C’est facile, rapide et sûr.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <FirststepRdv/>
        </Grid>
      </Grid>


      <ContactFormComponent />
    </div>
  )
}

export default LandingContainer

import React from 'react'

import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'; 

import HeaderComponent from './HeaderComponent'
import ContactFormComponent from '../contactform'

import {ReactComponent as SNKRLOGO} from '../../library/SNKRLOGO.svg'
import {ReactComponent as ThreeSteps} from '../../library/3steps.svg'

import {ReactComponent as FirststepSneakers} from '../../library/firststepSneakers.svg'
import {ReactComponent as FirststepRdv} from '../../library/firststepRdv.svg'

import {ReactComponent as SecondStepExpert} from '../../library/secondStepExpert.svg'
import {ReactComponent as SecondStepExpertIcon} from '../../library/secondStepExpertIcon.svg'

import {ReactComponent as ThirdStepParcel} from '../../library/thirdStepParcel.svg'
import {ReactComponent as ThirdStepParcelIcon} from '../../library/thirdStepParcelIcon.svg'

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

      {/* FIRST STEP */}
      <Grid container direction="row" style={{flexWrap: 'nowrap'}} justify="space-between">
        <Grid item style={{marginLeft: 205}}>
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

      {/* SECOND STEP */}
      <Grid container direction="row" style={{flexWrap: 'nowrap'}} justify="space-between">
        <Grid item>
          <SecondStepExpert/>
        </Grid>
        <Grid item style={{marginRight: 205}}>
          <Grid container direction="column">
            <Grid item>
              <SecondStepExpertIcon/>
            </Grid>
            <Grid item>
              <Typography>
                Un expert spécialisé pour ta sneakers
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
              Nous assurons le choix d’un expert spécialisé en fonction de la sneakers à authentifier. Une fois que tu nous as renseigné le modèle de la paire, nous contactons un expert qui colle parfaitement à celle-ci. 
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* THIRD STEP */}
      <Grid container direction="row" style={{flexWrap: 'nowrap'}} justify="space-between">
        <Grid item style={{marginLeft: 205}}>
          <Grid container direction="column">
            <Grid item>
              <ThirdStepParcelIcon/>
            </Grid>
            <Grid item>
              <Typography>
                Une paire authentifiée et certifiée
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
              Une fois la paire authentifiée, tu recevras
un message te signalant le resultat du legit check. Un certificat d’authenticité sera inséré dans ta boîte à chaussures ainsi qu’un jeton scellé à ta paire. 
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <ThirdStepParcel/>
        </Grid>
      </Grid>


      <ContactFormComponent />
    </div>
  )
}

export default LandingContainer

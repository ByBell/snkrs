import React from 'react'

import { Typography, Grid, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'; 

import HeaderComponent from './HeaderComponent'

import {ReactComponent as ThreeSteps} from '../../library/3steps.svg'

import {ReactComponent as FirststepSneakers} from '../../library/firststepSneakers.svg'
import {ReactComponent as FirststepRdv} from '../../library/firststepRdv.svg'

import {ReactComponent as SecondStepExpert} from '../../library/secondStepExpert.svg'
import {ReactComponent as SecondStepExpertIcon} from '../../library/secondStepExpertIcon.svg'

import {ReactComponent as ThirdStepParcel} from '../../library/thirdStepParcel.svg'
import {ReactComponent as ThirdStepParcelIcon} from '../../library/thirdStepParcelIcon.svg'

import airmax30 from '../../library/airmax30.svg'
import airmax50 from '../../library/airmax50.svg'
import airmax40 from '../../library/airmax40.svg'

const useStyles = makeStyles({
  priceCard: {
    margin: 'auto 40px'
  }
});

const LandingContainer = () => {
  const classes = useStyles()

  return (
    <div>
      <HeaderComponent/>

      <Grid container direction="column" justify="center" alignItems="center">
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


      {/* Pricing */}
      <Grid container direction="column" style={{flexWrap: 'nowrap'}} justify="center">
        <Typography>LE PRIX</Typography>
        <Typography>Un prix adapté à ta paire</Typography>
        <Typography>Le prix de l’authentification dépend du modèle 
de la sneaker et donc de la valeur de celui-ci. </Typography>

        <Grid container direction="row" justify="center">
          <Grid item className={classes.priceCard}>
            <Card raised elevation={20} style={{width: 320, overflow: 'visible', borderRadius: 50}}>
              <CardContent style={{height: 230, background: '#F5F6FF', position: 'relative', borderRadius: '50px 50px 0 0'}}>
                <img src={airmax30} alt="" style={{position: 'absolute', top: -50, left: -30}} />
              </CardContent>
              <CardContent style={{borderRadius: '20px 20px 50px 50px'}}>
                <Typography variant="body2" color="textSecondary" component="p">
                Ce prix correspond aux sneakers dont la valeur du marché est proche du prix initial.
                </Typography>
              </CardContent>
              <Grid container justify="flex-end">
                <div style={{ fontSize: 38, fontWeight: 'bold', borderRadius: '35px 0 50px 0', padding: '22px 30px', width: 'min-content', background: '#60DF41', color: 'white'}}>
                 30€
                </div>
              </Grid>
            </Card>
          </Grid>

          <Grid item className={classes.priceCard}>
            <Card raised elevation={20} style={{marginTop: 75, width: 320, overflow: 'visible', borderRadius: 50}}>
              <CardContent style={{height: 230, background: '#F1FFE7', position: 'relative', borderRadius: '50px 50px 0 0'}}>
                <img src={airmax50} alt="" style={{position: 'absolute', top: -50, left: -30}} />
              </CardContent>
              <CardContent style={{borderRadius: '20px 20px 50px 50px'}}>
                <Typography variant="body2" color="textSecondary" component="p">
                Ce prix concerne les paires qui nécessitent plus de temps d’analyse et dont le prix resell est supérieur au prix retail.
                </Typography>
              </CardContent>
              <Grid container justify="flex-end">
                <div style={{ fontSize: 38, fontWeight: 'bold', borderRadius: '35px 0 50px 0', padding: '22px 30px', width: 'min-content', background: '#60DF41', color: 'white'}}>
                 50€
                </div>
              </Grid>
            </Card>
          </Grid>

          <Grid item className={classes.priceCard}>
            <Card raised elevation={20} style={{width: 320, overflow: 'visible', borderRadius: 50}}>
              <CardContent style={{height: 230, background: '#FFE0E8', position: 'relative', borderRadius: '50px 50px 0 0'}}>
                <img src={airmax40} alt="" style={{position: 'absolute', top: -50, left: -30}} />
              </CardContent>
              <CardContent style={{borderRadius: '20px 20px 50px 50px'}}>
                <Typography variant="body2" color="textSecondary" component="p">
                Ce prix correspond aux sneakers dont la valeur du marché est supérieure au prix initial.
                </Typography>
              </CardContent>
              <Grid container justify="flex-end">
                <div style={{ fontSize: 38, fontWeight: 'bold', borderRadius: '35px 0 50px 0', padding: '22px 30px', width: 'min-content', background: '#60DF41', color: 'white'}}>
                 40€
                </div>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}

export default LandingContainer

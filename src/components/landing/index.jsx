import React from 'react'

import { Typography, Grid, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'; 

import HeaderComponent from './HeaderComponent'

import {ReactComponent as ThreeSteps} from '../../library/3steps.svg'

import FirstStepSneakersIcon from '../../library/firstStepSneakersIcon.png'
import {ReactComponent as FirststepRdv} from '../../library/firststepRdv.svg'

import {ReactComponent as SecondStepExpert} from '../../library/secondStepExpert.svg'
import SecondStepExpertIcon from '../../library/secondStepExpertIcon.png'

import {ReactComponent as ThirdStepParcel} from '../../library/thirdStepParcel.svg'
import ThirdStepParcelIcon from '../../library/thirdStepParcelIcon.png'

import airmax30 from '../../library/airmax30.svg'
import airmax50 from '../../library/airmax50.svg'
import airmax40 from '../../library/airmax40.svg'

import SectionTitle from './SectionTitle';
import SectionTextPart from './SectionTextPart';

const useStyles = makeStyles({
  section: {
    padding: '100px 0'
  },
  priceCard: {
    margin: 'auto 40px'
  }
});

const LandingContainer = () => {
  const classes = useStyles()

  return (
    <div>
      <HeaderComponent/>

      <Grid container direction="column" className={classes.section} justify="center" alignItems="center">
        <SectionTitle 
          subtitle="Comment ça marche ?"
          title="Un service en 3 étapes"
        />
        <Grid item><ThreeSteps/></Grid>
      </Grid>

      {/* FIRST STEP */}
      <Grid container direction="row" className={classes.section} style={{flexWrap: 'nowrap'}} justify="space-between">
        <Grid item style={{marginLeft: 205}}>
          <SectionTextPart
            icon={FirstStepSneakersIcon}
            title="Prise en charge directement chez toi"
          >
            Ne te dérange pas ! Nous récupérons ta 
            paire directement chez toi. Tu remplis tes disponibilités sur la plateforme, et nous venons chez toi pour récupérer la paire quand tu le souhaites. C’est facile, rapide et sûr.
          </SectionTextPart>
        </Grid>
        <Grid item>
          <FirststepRdv/>
        </Grid>
      </Grid>

      {/* SECOND STEP */}
      <Grid container direction="row" className={classes.section} style={{flexWrap: 'nowrap'}} justify="space-between">
        <Grid item>
          <SecondStepExpert/>
        </Grid>
        <Grid item style={{marginLeft: 205}}>
          <SectionTextPart
            icon={SecondStepExpertIcon}
            title="Un expert spécialisé pour ta sneakers"
          >
            Nous assurons le choix d’un expert spécialisé en fonction de la sneakers à authentifier. Une fois que tu nous as renseigné le modèle de la paire, nous contactons un expert qui colle parfaitement à celle-ci. 
          </SectionTextPart>
        </Grid>
      </Grid>

      {/* THIRD STEP */}
      <Grid container direction="row" className={classes.section} style={{flexWrap: 'nowrap'}} justify="space-between">
        <Grid item style={{marginLeft: 205}}>
          <SectionTextPart
            icon={ThirdStepParcelIcon}
            title="Une paire authentifiée et certifiée"
          >
            Une fois la paire authentifiée, tu recevras
            un message te signalant le resultat du legit check. Un certificat d’authenticité sera inséré dans ta boîte à chaussures ainsi qu’un jeton scellé à ta paire.
          </SectionTextPart>
        </Grid>
        <Grid item>
          <ThirdStepParcel/>
        </Grid>
      </Grid>


      {/* Pricing */}
      <Grid container direction="column" className={classes.section} style={{flexWrap: 'nowrap'}} justify="center">
        <SectionTitle
          subtitle="Le prix"
          title="Un prix adapté à ta paire"
        />
        <Typography style={{textAlign: "center"}}>Le prix de l’authentification dépend du modèle de la sneaker et donc de la valeur de celui-ci. </Typography>

        <Grid container direction="row" justify="center">
          <Grid item className={classes.priceCard}>
            <Card raised elevation={20} style={{width: 320, background: '#F5F6FF', overflow: 'visible', borderRadius: 50}}>
              <CardContent style={{height: 230, position: 'relative', borderRadius: '50px 50px 0 0'}}>
                <img src={airmax30} alt="" style={{position: 'absolute', top: -50, left: -30}} />
              </CardContent>
              <CardContent style={{borderRadius: '20px 20px 50px 50px', background: 'white', paddingBottom: 0, paddingRight: 0}}>
                <Typography variant="body2" color="textSecondary" component="p" style={{padding: 14}}>
                Ce prix correspond aux sneakers dont la valeur du marché est proche du prix initial.
                </Typography>
                <Grid container justify="flex-end" style={{padding: 0}}>
                  <div style={{ fontSize: 38, fontWeight: 'bold', borderRadius: '35px 0 50px 0', padding: '22px 30px', width: 'min-content', background: '#60DF41', color: 'white'}}>
                  30€
                  </div>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item className={classes.priceCard}>
            <Card raised elevation={20} style={{width: 320, background: '#F1FFE7', overflow: 'visible', borderRadius: 50}}>
              <CardContent style={{height: 230, position: 'relative', borderRadius: '50px 50px 0 0'}}>
                <img src={airmax50} alt="" style={{position: 'absolute', top: -50, left: -30}} />
              </CardContent>
              <CardContent style={{borderRadius: '20px 20px 50px 50px', background: 'white', paddingBottom: 0, paddingRight: 0}}>
                <Typography variant="body2" color="textSecondary" component="p" style={{padding: 14}}>
                Ce prix concerne les paires qui nécessitent plus de temps d’analyse et dont le prix resell est supérieur au prix retail.
                </Typography>
                <Grid container justify="flex-end" style={{padding: 0}}>
                  <div style={{ fontSize: 38, fontWeight: 'bold', borderRadius: '35px 0 50px 0', padding: '22px 30px', width: 'min-content', background: '#60DF41', color: 'white'}}>
                  50€
                  </div>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item className={classes.priceCard}>
            <Card raised elevation={20} style={{width: 320, background: '#FFE0E8', overflow: 'visible', borderRadius: 50}}>
              <CardContent style={{height: 230, position: 'relative', borderRadius: '50px 50px 0 0'}}>
                <img src={airmax40} alt="" style={{position: 'absolute', top: -50, left: -30}} />
              </CardContent>
              <CardContent style={{borderRadius: '20px 20px 50px 50px', background: 'white', paddingBottom: 0, paddingRight: 0}}>
                <Typography variant="body2" color="textSecondary" component="p" style={{padding: 14}}>
                Ce prix correspond aux sneakers dont la valeur du marché est supérieure au prix initial.
                </Typography>
                <Grid container justify="flex-end" style={{padding: 0}}>
                  <div style={{ fontSize: 38, fontWeight: 'bold', borderRadius: '35px 0 50px 0', padding: '22px 30px', width: 'min-content', background: '#60DF41', color: 'white'}}>
                  40€
                  </div>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}

export default LandingContainer

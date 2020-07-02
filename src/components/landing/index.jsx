import React from 'react'

import { Typography, Grid, Card, CardContent, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'; 

import HeaderComponent from './HeaderComponent'

import {ReactComponent as ThreeSteps} from '../../library/3steps.svg'

import FirstStepSneakersIcon from '../../library/firstStepSneakersIcon.png'
import priseencharge from '../../library/priseencharge.png'


import SecondStepExpertIcon from '../../library/secondStepExpertIcon.png'
import illustrationexpert from '../../library/illustrationexpert.png'


import ThirdStepParcelIcon from '../../library/thirdStepParcelIcon.png'
import authetcert from '../../library/authetcert.png'

import airmax30 from '../../library/airmax30.svg'
import airmax50 from '../../library/airmax50.svg'
import airmax40 from '../../library/airmax40.svg'

import SectionTitle from './SectionTitle';
import SectionTextPart from './SectionTextPart';

import savgauche from '../../library/savgauche.png'
import savdroite from '../../library/savdroite.png'

import contactgauche from '../../library/contactgauche.png'
import contactdroite from '../../library/contactdroite.png'

import AuthentifierArrowBtn from './AuthentifierArrowBtn'
import ContactBtn from './ContactBtn'

const useStyles = makeStyles({
  section: {
    padding: '100px 0'
  },
  priceCard: {
    margin: 'auto 40px'
  },
  priceContainer: {
    background: 'linear-gradient(180deg, #F8F8FF 10.26%, rgba(248, 248, 255, 0) 107.14%)',
    borderRadius: 25
  },
  contactform: {
    marginBottom: 30
  }
});

const LandingContainer = () => {
  const classes = useStyles()

  return (
    <div>
      <HeaderComponent/>

      <Grid id="commentçamarche" container direction="column" className={classes.section} justify="center" alignItems="center">
        <SectionTitle 
          subtitle="Comment ça marche ?"
          title="Un service en 3 étapes"
        />
        <Grid item><ThreeSteps style={{width: '100%'}}/></Grid>
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
          <img style={{width: '100%'}} src={priseencharge} alt='' />
        </Grid>
      </Grid>

      {/* SECOND STEP */}
      <Grid container direction="row" className={classes.section} style={{flexWrap: 'nowrap'}} justify="space-between">
        <Grid item>
          <img style={{width: '100%'}} src={illustrationexpert} alt='' />
        </Grid>
        <Grid item style={{marginLeft: 115, marginRight: 90}}>
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
          <img style={{width: '100%'}} src={authetcert} alt='' />
        </Grid>
      </Grid>


      {/* Pricing */}
      <Grid id="prix" container direction="column" className={`${classes.section} ${classes.priceContainer}`} style={{flexWrap: 'nowrap', width: 'calc(100vw - 200px)', margin: 'auto', marginBottom: 100}} justify="center">
        <SectionTitle
          subtitle="Le prix"
          title="Un prix adapté à ta paire"
        />
        <Typography style={{textAlign: "center"}}>Le prix de l’authentification dépend du modèle de la sneaker et donc de la valeur de celui-ci. </Typography>

        <Grid container direction="row" justify="center">
          <Grid item className={classes.priceCard}>
            <Card raised style={{width: 260, background: '#F5F6FF', overflow: 'visible', borderRadius: 50, boxShadow: '0px 4px 35px rgba(0, 0, 0, 0.15)'}}>
              <CardContent style={{height: 200, position: 'relative', borderRadius: '50px 50px 0 0'}}>
                <img src={airmax30} alt="" style={{position: 'absolute', top: -25, left: -10, width: 250}} />
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
            <Card raised style={{width: 260, background: '#F1FFE7', overflow: 'visible', borderRadius: 50, boxShadow: '0px 4px 35px rgba(0, 0, 0, 0.15)', marginTop: 100}}>
              <CardContent style={{height: 200, position: 'relative', borderRadius: '50px 50px 0 0'}}>
                <img src={airmax50} alt="" style={{position: 'absolute', top: -25, left: -10, width: 250}} />
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
            <Card raised style={{width: 260, background: '#FFE0E8', overflow: 'visible', borderRadius: 50, boxShadow: '0px 4px 35px rgba(0, 0, 0, 0.15)'}}>
              <CardContent style={{height: 200, position: 'relative', borderRadius: '50px 50px 0 0'}}>
                <img src={airmax40} alt="" style={{position: 'absolute', top: -25, left: -10, width: 250}} />
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

        <Typography style={{textAlign: 'center', marginTop: 100}}>
          <AuthentifierArrowBtn />
        </Typography>
      </Grid>

      <Grid container justify='space-between' style={{marginBottom: 200}}>
        <Grid item style={{width: '25%'}}>
          <img src={savgauche} alt='' style={{width: '100%'}}/>
        </Grid>
        <Grid item style={{width: '50%'}}>
          <SectionTitle
            subtitle="S.A.V"
            title="Un problème durant l'authentification"
          />
          <Typography style={{textAlign: 'center'}}>
            En cas de problème durant la livraion ou d’un accident pendant l’authentification, SnkrsTrust s’engage à te rembourser ta paire de sneakers.
          </Typography>
        </Grid>
        <Grid item style={{width: '25%'}}>
          <img src={savdroite} alt='' style={{width: '100%'}}/>
        </Grid>

      </Grid>

      <Grid container justify='space-between' style={{marginBottom: 100}}>
        <Grid item style={{width: '25%'}}>
          <img src={contactgauche} alt='' style={{width: '100%'}}/>
        </Grid>
        <Grid item style={{width: '50%'}}>
          <SectionTitle
            subtitle="Contact"
            title="On répond à tes questions"
          />
          <Grid container direction="column" style={{marginTop: 55}}>
            <Grid container justify="space-between">
              <TextField className={classes.contactform} required variant="outlined" label="Nom" defaultValue="" />
              <TextField className={classes.contactform} required variant="outlined" label="Prénom" defaultValue="" />
            </Grid>
            <TextField className={classes.contactform} required variant="outlined" label="Adress mail" defaultValue="" />
            <TextField className={classes.contactform} required variant="outlined" multiline label="Message" defaultValue="" />
            <Typography style={{textAlign: 'center', marginTop: 50}}>
              <ContactBtn />
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{width: '25%'}}>
          <img src={contactdroite} alt='' style={{width: '100%'}}/>
        </Grid>

      </Grid>

    </div>
  )
}

export default LandingContainer

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Stepper, Step, StepButton, Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Card, CardActionArea, Paper } from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom'

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import {ReactComponent as Mastercard} from '../../library/Mastercard.svg'
import {ReactComponent as Paypal} from '../../library/Paypal.svg'
import {ReactComponent as Visa} from '../../library/Visa.svg'
import {ReactComponent as CarteBleue} from '../../library/CarteBleue.svg'

import {ReactComponent as BlueTick} from '../../library/BlueTick.svg'
import {ReactComponent as Yeezy} from '../../library/Yeezy.svg'



import getNext15DaysTimeArray from '../../utils/date-time-slot-gen'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  formMargin: {
    marginBottom: 20
  },
  CardActionArea: {
    padding: '15px 30px',
    color: '#344BFF',
    fontWeight: 700,
    textAlign: 'center',
    fontSize: 14
  },
  Card: {
    margin: '0 25px',
    marginTop: 20
  },
  dateTimePickerHeader: {
    width: 'max-content',
    margin: '0px 50px 45px',
    // margin: '50px 32px',
    fontWeight: 900,
    fontSize: 16
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  roundbtn: {
    borderRadius: 50,
    marginRight: theme.spacing(1),
    padding: '10px 30px'
  },
  typoColTitle: {
    fontSize: 20,
    fontWeight: 700
  }, 
  paperContact: {
    // padding: 40
    padding: '60px 90px',
    paddingBottom: 30
  },
  confirmTitle: {
    color: '#9A9A9A',
    fontWeight: 700,
    fontSize: 20,
    marginBottom: 20
  },
  confirmContent: {
    color: '#2B362F',
    fontWeight: 700,
    fontSize: 14
  },
  confirmSav: {
    color: '#9A9A9A',
    fontSize: 14,
    paddingBottom: 50
  },
  mainPaperTitle: {
    color: '#152FFF',
    fontWeight: 900,
    fontSize: 24
  }
}));

function getSteps() {
  return ['Informations', 'Créneau de disponibilités'];
}

function GetStepContent({activeStep, handleNext, classes, nextButton, selectedDateTime, setSelectedDateTime}){

  switch (activeStep) {
    case 0:
      return (
        <Paper className={classes.paperContact}>
          <Grid container justify="space-around">
            <Grid item>
              <Grid container direction="column">
                <Grid item className={classes.formMargin}>
                  <Typography className={classes.typoColTitle}>Informations personnelles</Typography>
                </Grid>
                <Grid item className={classes.formMargin}>
                  <TextField className={classes.root} required variant="outlined" label="Nom" defaultValue="" />
                </Grid>
                <Grid item className={classes.formMargin}>
                  <TextField className={classes.root} required variant="outlined" label="Prénom" defaultValue="" />
                </Grid>
                <Grid item className={classes.formMargin}>
                  <TextField className={classes.root} required variant="outlined" label="Mail" defaultValue="" />
                </Grid>
                <Grid item className={classes.formMargin}>
                  <Grid container justify="space-between">
                    <Grid item style={{width: '65%'}}>
                      <TextField required variant="outlined" label="Ville" defaultValue="" />
                    </Grid>
                    <Grid item style={{width: '35%'}}>
                      <TextField required variant="outlined" label="Code postal" defaultValue="" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item className={classes.formMargin}> 
                  <TextField className={classes.root} required variant="outlined" label="N° et nom de rue" defaultValue="" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item style={{minWidth: 420}}>
              <Grid container direction="column">
                <Grid item className={classes.formMargin}>
                  <Typography className={classes.typoColTitle}>Informations sur la paire</Typography>
                </Grid>
                <Grid item className={classes.formMargin}>
                  <FormControl className={classes.root}>
                    <InputLabel style={{paddingLeft: 14}} id="sneaker-brand">Quelle est la marque de la paire ?</InputLabel>
                    <Select
                      variant="outlined"
                      labelId="sneaker-brand"
                      value={""}
                      // onChange={handleChange}
                    >
                      <MenuItem value={"adidas"}>Adidas</MenuItem>
                      <MenuItem value={"nike"}>Nike</MenuItem>
                      <MenuItem value={""}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item className={classes.formMargin}>
                  <FormControl className={classes.root}>
                    <InputLabel style={{paddingLeft: 14}} id="sneaker-brand">Quel modèle souhaites-tu authentifier ?</InputLabel>
                    <Select
                      variant="outlined"
                      labelId="sneaker-brand"
                      value={""}
                      // onChange={handleChange}
                    >
                      <MenuItem value={"yeezyx"}>Yeezy X</MenuItem>
                      <MenuItem value={"yeezy350v2"}>Yeezy 350 v2</MenuItem>
                      <MenuItem value={""}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item className={classes.formMargin}>
                  <TextField className={classes.root} required variant="outlined" label="Numéro de série de la paire" defaultValue="" />
                </Grid>
                <Grid item className={classes.formMargin}>
                  <Grid container justify="space-between">
                    <Grid item style={{width: '40%'}}>
                      <TextField required variant="outlined" label="Année de sortie" defaultValue="" />
                    </Grid>
                    <Grid item style={{width: '50%'}}>
                      <Grid item className={classes.formMargin}>
                        <FormControl className={classes.root}>
                          <InputLabel style={{paddingLeft: 14}} id="sneaker-brand">État de la boîte</InputLabel>
                          <Select
                            variant="outlined"
                            labelId="box-condition"
                            value={""}
                            // onChange={handleChange}
                          >
                            <MenuItem value={""}></MenuItem>
                            <MenuItem value={"neuf"}>Neuf</MenuItem>
                            <MenuItem value={"tb"}>Très bon</MenuItem>
                            <MenuItem value={"b"}>Bon</MenuItem>
                            <MenuItem value={"c"}>Correct</MenuItem>
                            <MenuItem value={"p"}>Passable</MenuItem>
                            <MenuItem value={"pdb"}>Pas de boîte</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={{alignSelf: "flex-end"}}>
                  {nextButton}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      );
    case 1:
      const dateTimeArray = getNext15DaysTimeArray()
      return (
        <Paper className={classes.paperContact}>
          <Grid container>
            <Grid container justify="flex-start" style={{flexWrap: 'nowrap', height: 500, overflow: 'scroll', marginBottom: 22}}>
              { Object.keys(dateTimeArray).map((dayKey, index) => {
                // if(index >= 8) {
                //   return null
                // }
                return (
                  <Grid item key={dayKey}>
                    <Grid container direction="column" style={{flexWrap: 'nowrap'}}>
                      <Grid item style={{background: 'white', zIndex: 2, position: 'sticky', top: 0, borderBottom: '1px solid #E7E7E7'}}>
                        <Typography className={classes.dateTimePickerHeader}>
                          {dayKey}
                        </Typography>
                      </Grid>
                        {
                          Object.keys(dateTimeArray[dayKey]).map((timeMinKey, idx) => {
                            
                            return (
                              <Grid item key={timeMinKey}>
                                <Card className={classes.Card} onClick={() => setSelectedDateTime(`${dayKey}${timeMinKey}`)} style={selectedDateTime === `${dayKey}${timeMinKey}` ? {background: '#344BFF'} : {}}>
                                  <CardActionArea className={classes.CardActionArea} style={selectedDateTime === `${dayKey}${timeMinKey}` ? {color: '#fff'} : {}}>
                                    {dateTimeArray[dayKey][timeMinKey]}
                                  </CardActionArea>
                                </Card>
                              </Grid>
                            )
                          })
                        }
                    </Grid>
                  </Grid>
                )
              })}
            </Grid>
            <Grid item style={{width: '100%', textAlign: 'right'}}>
              {nextButton}
            </Grid>
          </Grid>
        </Paper>
      );
    case 2:
      return (
        <Paper className={classes.paperContact} style={{maxWidth: 780, margin: 'auto'}}>
          <Grid container justify="center">
            <Typography className={classes.mainPaperTitle}>
              Récapitulatif
            </Typography>
            <Grid container justify="space-between" wrap="nowrap" style={{padding: 50}}>
              <Grid item>
                <Grid container direction="column">
                  <Typography className={classes.confirmTitle}>
                    Tes infos
                  </Typography>
                  <Grid item>
                    <Typography className={classes.confirmContent}>
                      Vincent Delaunay
                    </Typography>
                    <Typography className={classes.confirmContent} style={{marginBottom: 30}}>
                      Mail@ma.fr
                    </Typography>
                  </Grid>
                  <Typography className={classes.confirmTitle}>
                    Ton adresse
                  </Typography>
                  <Grid item>
                    <Typography className={classes.confirmContent}>
                      27bis rue du Progrès
                    </Typography>
                    <Typography className={classes.confirmContent} style={{marginBottom: 30}}>
                      93100 Montreuil
                    </Typography>
                  </Grid>
                  <Typography className={classes.confirmTitle}>
                    Authentification
                  </Typography>
                  <Grid item>
                    <Typography className={classes.confirmContent}>
                      40€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column">
                  <Typography className={classes.confirmTitle}>
                    Ta paire à authentifier
                  </Typography>
                  <Grid item>
                    <Typography className={classes.confirmContent}>
                      Adidas
                    </Typography>
                    <Typography className={classes.confirmContent} style={{marginBottom: 30}}>
                      Yeezy 700 Wave Runner Solid Grey
                    </Typography>
                  </Grid>
                  <Typography className={classes.confirmTitle}>
                    Date de récupération
                  </Typography>
                  <Grid item>
                    <Typography className={classes.confirmContent}>
                      Lundi 22 juin
                    </Typography>
                    <Typography className={classes.confirmContent}>
                      À 10h00
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Typography className={classes.confirmSav}>
            Une fois la commande validée, tu recevras un mail de confirmation de commande. Tu y trouveras un moyen de nous contacter si tu as des questions ou si tu souhaites annuler la commande.
            </Typography>
            <Grid item style={{width: '100%', textAlign: 'center'}}>
              {nextButton}
            </Grid>
          </Grid>
        </Paper>
      );
    case 3:
      return (
        <Paper className={classes.paperContact} style={{maxWidth: 780, margin: 'auto'}}>
          <Grid container justify="center" alignItems="center">
            <Typography className={classes.mainPaperTitle}>
              PAIEMENT
            </Typography>
            <Grid container justify="center" wrap="nowrap" direction="column" style={{padding: 50, paddingTop: 35}}>
              <Typography className={classes.confirmTitle} style={{color: '#000', paddingBottom: 30}}>
                Sélectionnez votre mode de paiement
              </Typography>

              <Typography style={{paddingBottom: 15, color: '#A7A7A7'}}>
                Carte bancaire
              </Typography>
              <Grid container style={{paddingBottom: 40}}>
                <Grid item onClick={handleNext} style={{marginRight: 15, cursor: 'pointer'}}>
                  <Mastercard/>
                </Grid>
                <Grid item onClick={handleNext} style={{marginRight: 15, cursor: 'pointer'}}>
                  <Visa/>
                </Grid>
                <Grid item onClick={handleNext} style={{cursor: 'pointer'}}>
                  <CarteBleue/>
                </Grid>
              </Grid>

              <Typography style={{paddingBottom: 15, color: '#A7A7A7'}}>
                Paypal
              </Typography>
              <Grid container>
                <Grid item onClick={handleNext} style={{cursor: 'pointer'}}>
                  <Paypal/>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Paper>
      );
    case 4:
      return (
        <Paper className={classes.paperContact} style={{maxWidth: 780, margin: 'auto'}}>
          <Grid container justify="center">
            <Typography className={classes.mainPaperTitle}>
              PAIEMENT
            </Typography>
            <Grid container direction="column">
                <Grid item className={classes.formMargin}>
                  <TextField className={classes.root} required variant="outlined" label="Numéro de carte bancaire" defaultValue="" />
                </Grid>
                <Grid item className={classes.formMargin}>
                  <TextField className={classes.root} required variant="outlined" label="Titulaire de la carte bancaire" defaultValue="" />
                </Grid>
                <Grid item className={classes.formMargin}>
                  <Grid container justify="space-between">
                    <Grid item style={{width: '55%'}}>
                      <TextField required variant="outlined" label="Date d'expiration" defaultValue="" />
                    </Grid>
                    <Grid item style={{width: 'max-content'}}>
                      <TextField required variant="outlined" label="Cryptograme" defaultValue="" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {nextButton}

          </Grid>
        </Paper>
      );
    case 5:
      return (
        <>
          <Typography className={classes.mainPaperTitle} style={{textAlign: 'center', marginBottom: 34}}>
            COMMANDE VALIDÉE
          </Typography>
          <Paper className={classes.paperContact}>
            <Grid container justify="space-evenly" alignItems="center" direction="column">
              <Grid item style={{marginBottom: 34}}>
                <BlueTick/>
              </Grid>
              <Grid item style={{marginBottom: 54}}>
                <Yeezy/>
              </Grid>
              <Grid item style={{marginBottom: 30}}>
                <Typography>Nous t'avons envoyé un <u style={{color: '#344BFF'}}>mail</u> de confirmation de commande.</Typography>
              </Grid>
              <Grid item style={{marginBottom: 60}}>
                {nextButton}
              </Grid>

              <Grid item>
                <Typography style={{color: '#9A9A9A', fontSize: 14}}><b>S.A.V</b> : En cas de problème avec ta commande nous t’invitions à appeler ce numéro : <b>0699054641</b></Typography>
              </Grid>

            </Grid>
          </Paper>
        </>
      );
    default:
      return 'Unknown step';
  }
}

const ContactFormComponent = () => {
  const classes = useStyles()

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === -1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const [selectedDateTime, setSelectedDateTime] = useState(undefined);

  const nextButton = activeStep === 0 ? 
    (
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        className={classes.roundbtn}
        endIcon={<ArrowRightAltIcon/>}
      >
        Suivant
      </Button>
    ) : activeStep === 1 ?
      (
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.roundbtn}
          endIcon={<ArrowRightAltIcon/>}
        >
          Confirmer
        </Button> 
      ) : activeStep === 2 ?
        (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.roundbtn}
            endIcon={<ArrowRightAltIcon/>}
          >
            VALIDER MA COMMANDE
          </Button> 
        ) : activeStep === 4 ?
          (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.roundbtn}
            >
              VALIDER LE PAIEMENT
            </Button> 
          ) : (
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to='/'
              className={classes.roundbtn}
            >
              ACCUEIL
            </Button> 
          )
      

  return (
    <Grid container style={{padding: '0 200px'}} justify="center" direction="column" alignItems="center">
      {activeStep <= 1 && (
        <Stepper className={classes.root} activeStep={activeStep} style={{width: '50%', paddingBottom: 0}}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            return (
              <Step key={label} {...stepProps} style={{border: '1px solid #344BFF', borderRadius: 150, padding: '4px 35px'}}>
                <StepButton onClick={handleStep(index)} {...labelProps}>{label}</StepButton>
              </Step>
            );
          })}
        </Stepper>
      )}
      <Typography style={{alignSelf: 'flex-start'}}>
        <Button
          component={RouterLink}
          to="/"
          startIcon={<ArrowBackIosIcon/>}
        >
          Retour page d'accueil
        </Button>
      </Typography>
      <div className={classes.root}>
          <div>
            <div className={classes.instructions}>
              <GetStepContent activeStep={activeStep} handleNext={handleNext} classes={classes} nextButton={nextButton} selectedDateTime={selectedDateTime} setSelectedDateTime={setSelectedDateTime} />
            </div>
            {/* <Typography className={classes.instructions}>
            </Typography> */}
            <Grid container justify="flex-end">
              {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Retour
              </Button> */}
              
            </Grid>
          </div>
      </div>
    </Grid>
  )
}

export default ContactFormComponent

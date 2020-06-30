import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Stepper, Step, StepButton, Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Card, CardActionArea, Paper } from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom'

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
    fontWeight: 'bold',
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
    fontWeight: 'bolder',
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
    fontWeight: 'bold'
  }, 
  paperContact: {
    // padding: 40
    padding: '60px 90px'
  }
}));

function getSteps() {
  return ['Informations', 'Créneau de disponibilités', 'Récapitulatif'];
}

function GetStepContent({activeStep, classes, selectedDateTime, setSelectedDateTime}){

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
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      );
    case 1:
      const dateTimeArray = getNext15DaysTimeArray()
      return (
        <Paper className={classes.paperContact}>
          <Grid container justify="flex-start" style={{flexWrap: 'nowrap', height: 500, overflow: 'scroll'}}>
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
        </Paper>
      );
    case 2:
      return 'This is the bit I really care about!';
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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };


  const handleSubmit = () => {
    setActiveStep(0);
  };

  const [selectedDateTime, setSelectedDateTime] = useState(undefined);

  return (
    <Grid container style={{padding: '0 200px'}} justify="center" direction="column" alignItems="center">
      <Typography>
        <Button
          component={RouterLink}
          to="/"
          startIcon={<ArrowBackIosIcon/>}
        >
          <u>Retour page d'accueil</u>
        </Button>
      </Typography>
      <Stepper className={classes.root} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton onClick={handleStep(index)} {...labelProps}>{label}</StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div className={classes.root}>
          <div>
            <div className={classes.instructions}>
              <GetStepContent activeStep={activeStep} classes={classes} selectedDateTime={selectedDateTime} setSelectedDateTime={setSelectedDateTime} />
            </div>
            {/* <Typography className={classes.instructions}>
            </Typography> */}
            <Grid container justify="flex-end">
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Retour
              </Button>

              {activeStep === steps.length - 1 ? 
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className={classes.roundbtn}
                >
                  Valider ma demande
                </Button> 
              : 
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.roundbtn}
                  endIcon={<ArrowRightAltIcon/>}
                >
                  Suivant
                </Button>
              }
              
            </Grid>
          </div>
      </div>
    </Grid>
  )
}

export default ContactFormComponent

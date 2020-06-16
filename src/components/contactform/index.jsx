import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Stepper, Step, StepButton, Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  formMargin: {
    marginBottom: 20
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Informations', 'Créneau de disponibilités', 'Récapitulatif'];
}

function getStepContent(step, classes) {
  switch (step) {
    case 0:
      return (
        <Grid container justify="space-around">

          <Grid item>
            <Grid container direction="column">
              <Grid item className={classes.formMargin}>
                <Typography>Informations personnelles</Typography>
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
                <Typography>Informations sur la paire</Typography>
              </Grid>
              <Grid item className={classes.formMargin}>
                <FormControl className={classes.root}>
                  <InputLabel id="sneaker-brand">Quelle est la marque de la paire ?</InputLabel>
                  <Select
                    labelId="sneaker-brand"
                    // value={sneakerBrand}
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
                <InputLabel id="sneaker-brand">Quel modèle souhaites-tu authentifier ?</InputLabel>
                <Select
                  labelId="sneaker-brand"
                  // value={sneakerBrand}
                  // onChange={handleChange}
                >
                  <MenuItem value={"yeezyx"}>Yeezy X</MenuItem>
                  <MenuItem value={"yeezy350v2"}>Yeezy 350 v2</MenuItem>
                  <MenuItem value={""}>Thirty</MenuItem>
                </Select>
              </FormControl>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      );
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

const ContactFormComponent = () => {
  const classes = useStyles()

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === -1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
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

  return (
    <Grid container style={{padding: '0 200px'}} justify="center" direction="column" alignItems="center">
      <Stepper className={classes.root} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
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
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, classes)}
            </Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Retour
              </Button>

              {activeStep === steps.length - 1 ? 
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className={classes.button}
                >
                  Valider ma demande
                </Button> 
              : 
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Suivant
                </Button>
              }
              
            </div>
          </div>
      </div>
    </Grid>
  )
}

export default ContactFormComponent

import React, { lazy, Suspense } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useLocation, withRouter, 
  // Redirect 
} from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import { Grid } from '@material-ui/core'

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

const LandingContainer = lazy(() => import('./components/landing'));

const Routes = (props) => {
  const location = useLocation()
  // const dispatch = useDispatch();
  // const auth = useSelector(store => store.auth)

  return (
    <ThemeProvider theme={MuiTheme}>
        <Suspense
          fallback={
            <Grid container justify="center" alignItems="center" style={{height: '100vh', width: '100vw'}}>
                <CircularProgress
                  variant="indeterminate"
                  disableShrink
                  size={24}
                  thickness={4}
                  /> 
            </Grid>
        }>
          <Switch location={location} key={location.pathname}>
            <Route exact path={'/'} component={LandingContainer} />
          </Switch>

        </Suspense>
    </ThemeProvider>
  );
};

export default withRouter(Routes);

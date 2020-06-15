import React, { lazy, Suspense } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useLocation, withRouter, Redirect } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

const Routes = (props) => {
  // const dispatch = useDispatch();
  // const auth = useSelector(store => store.auth)

  return (
    <ThemeProvider theme={MuiTheme}>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                <CircularProgress
                  variant="indeterminate"
                  disableShrink
                  size={24}
                  thickness={4}
                  /> 
              </div>
            </div>
        }>
            <div>
                dsdsqd
            </div>
        </Suspense>
    </ThemeProvider>
  );
};

export default withRouter(Routes);

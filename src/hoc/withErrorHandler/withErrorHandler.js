import React from "react";
import {Snackbar, SnackbarContent} from '@material-ui/core';

const withErrorHandler = WrappedComponent => {
  return props => {
    return (
        <React.Fragment>
            <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={true}
        autoHideDuration={5000}
      >
        <SnackbarContent

      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar">
          Error
        </span>
      }
    />
      </Snackbar>
        <WrappedComponent {...props} />
        </React.Fragment>)
  };
};

export default withErrorHandler;

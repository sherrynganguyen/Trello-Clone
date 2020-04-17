import React from 'react';

import { FormControl, TextField, InputLabel } from '@material-ui/core';

const Login = () => {
  return (
    <React.Fragment>
      <FormControl>
      {/* <InputLabel htmlFor="my-input">Email address</InputLabel> */}
      <TextField autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth/>
      {/* <InputLabel htmlFor="my-input">Password</InputLabel> */}
      <TextField autoFocus margin="dense" id="password" label="Password" type="email" fullWidth/>
      </FormControl>
    </React.Fragment>
  )
}

export default Login;
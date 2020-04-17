import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Typography, Paper } from '@material-ui/core';

import { Login } from './components/index';

class App extends React.Component {
  state = {
    data: null,
    email: '',
    password: ''
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  }
  render () {
    return (
      <React.Fragment>
          <Typography variant="h2" align="center">Trello-Clone</Typography>
          <Paper elevation={6} align="center" width="30%">
            <Login/>
          </Paper>
      </React.Fragment>

    )
  };
}

export default App;

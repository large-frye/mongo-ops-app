import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Alert } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Systems from './components/core/Systems';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={ { marginTop: "75px"} }>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Grid>
          <Systems />
        </Grid>
      </div>
    );
  }
}

export default App;

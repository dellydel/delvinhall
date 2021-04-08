import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Home';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#282c34",
    color: "#FFF",
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
 }
}))

const AllOut = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <AppBar position="fixed" className={classes.footer}>
      <Toolbar>&copy; 2021</Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AllOut;
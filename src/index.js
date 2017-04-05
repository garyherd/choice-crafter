import React from 'react';
import ReactDOM from 'react-dom';

// External modules
import { Router, Route, browserHistory } from 'react-router';
import * as firebase from 'firebase';


// Components
import App from './App';
import Home from './components/home';
import { Decisions } from './components/decisions';
import DecisionDetail from './components/decision-detail';
import DecisionsFree from './components/freedecisions';
import SignIn from './components/signin';
import { ProbObjsAlts } from './components/prob-obj-alt';
import { Consequences } from './components/consequences';
import { TradeOffs } from './components/tradeoffs';
import ListHolder from './components/listholder';

// CSS & Other
import './index.css';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBt9GKY7tSu8qov1BSfBa5TY4BmYNQxqJM",
  authDomain: "choice-crafter.firebaseapp.com",
  databaseURL: "https://choice-crafter.firebaseio.com",
  storageBucket: "choice-crafter.appspot.com",
  messagingSenderId: "685696722335"
};

firebase.initializeApp(config);



ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home}></Route>
      <Route path="freedecisions" component={DecisionsFree} />
      <Route path="decisions" component={Home} />
      <Route path="decisions/:userId" component={Decisions} />
      <Route component={DecisionDetail}>
        <Route path="decisions/:userId/:decisionId">
          <Route path="problem" component={ProbObjsAlts}/>
          <Route path="consequences" component={Consequences}/>
          <Route path="tradeoffs" component={TradeOffs}/>
        </Route>
      </Route>
    </Route>
    <Route path="signIn" component={SignIn}/>
    <Route path="test-list" component={ListHolder}/>
  </Router>
), document.getElementById('root'));




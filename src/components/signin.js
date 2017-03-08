import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

class SignIn extends Component {

  firebaseSignIn() {
      var uiConfig = {
      callbacks: {
        signInSuccess: function(currentUser, credential, redirectUrl) {
          let newUrl = '/decisions/' + currentUser.uid;
          browserHistory.push(newUrl);
          return false;
        }
      },
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      // tosUrl: '<your-tos-url>'
    };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
  }

  componentDidMount() {
    this.firebaseSignIn();
  }

  render() {
    return (
      <Jumbotron>
        <Grid>

            <Row>
              <Col sm={6} smOffset={3}>
              <br/>

                <h2 className="text-center">Choice Crafter</h2>
                <div id="firebaseui-auth-container"></div>

              </Col>
            </Row>
        </Grid>
      </Jumbotron>
    );
  }
}

export default SignIn;

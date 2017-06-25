import React, { Component } from 'react';

import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';

import { browserHistory } from 'react-router';


const Home = () => {
  return (
    <main>
      <FullWidthJumbotron />
    </main>
  );
};

class FullWidthJumbotron extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //browserHistory.push('/freedecisions');
    browserHistory.push("/signin");
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <Row>
              <Col xs={12} className="text-center">
                <h1>Smarter choices made easier</h1>
                <Button bsStyle="primary" bsSize="large" className="center-block"
                  onClick={this.handleClick}>Start Free Now</Button>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
        <br/>
        <br/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h2 class="text-center">Watch this intro video about the Choice Crafter App</h2>
              <p class="lead text-center"> Be a beta tester! The first 50 users who leave a comment on the Herding Pixels <a href="https://www.facebook.com/herdingpixelstx/" target="_blank">Facebook page</a> will have free access to Choice Crafter forever!</p>
              <p>To watch the video on another tab in your browser, click <a href="https://www.youtube.com/embed/WtWpSZmkPHc" target="_blank">here</a></p>
            </Col>

            <Col xs={12}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/WtWpSZmkPHc" allowFullScreen></iframe>
              </div>
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
};

export default Home;
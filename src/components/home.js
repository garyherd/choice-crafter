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
    browserHistory.push('/freedecisions');
  }

  render() {
    return (
      <Jumbotron>
        <Grid>
          <Row>
            <Col sm={10} smOffset={1}>
              <h1>Smarter choices made easier</h1>
              <Button bsStyle="primary" bsSize="large" className="center-block"
                onClick={this.handleClick}>Start Free Now</Button>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    )
  }
};

export default Home;
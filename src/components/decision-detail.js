import React, { Component } from 'react';

import { Link, browserHistory } from 'react-router';

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';


class DecisionDetail extends Component {
  constructor(props) {
    super(props);
    console.log("DecisionDetail constructor here");  
  }
  
  render() {
    return (
        <Grid>
          <Row>
            <Col xs={12}>
              <div>This will be the details page for decision id = </div>
            </Col>
          </Row>
        </Grid>
      );
  }
}

export default DecisionDetail;
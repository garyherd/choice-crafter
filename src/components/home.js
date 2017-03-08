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

/*class EmailCallToAction extends Component {
  constructor(props) {
    super(props);
    this.state = {inputSizer: "lg", browserWidth: document.body.clientWidth};
    this.actualResizeHandler = this.actualResizeHandler.bind(this);
  }

  componentDidMount() {
      window.addEventListener("resize", this.actualResizeHandler);
  }

  actualResizeHandler() {
    var sizer = mapToBootstrapSizes();

    this.setState((prevState, props) => (
      {browserWidth: document.body.clientWidth,
      inputSizer: sizer}));
  }


  render() {
    var condition = this.state.inputSizer === "md" ? false : true;
    var size = this.state.inputSizer;

    return(
      <form>
        <FormGroup>
          <InputGroup {...condition ? {bsSize:size} : {}}>
            <FormControl type="text" placeholder="Enter email"/>
            <InputGroup.Button>
              <Button bsStyle="primary">Start Free Now</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}*/

function mapToBootstrapSizes() {
    var sizer = "lg";
    var screenWidth = document.body.clientWidth;

    if (screenWidth < 576) {
      sizer = "sm";
    }

    if (screenWidth < 992) {
      sizer = "md";
    }

    return sizer;
}


export default Home;
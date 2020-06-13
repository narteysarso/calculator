import React from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';

function App() {

  return (
    <Container>
      <Row>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              AC
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              +/-
          </Button>         
        </Col>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              %
          </Button>         
        </Col>
        <Col size={3}>
          <Button style={Styles.goldButton} block >
              /
          </Button>          
        </Col>
      </Row>

      <Row>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              7
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              8
          </Button>         
        </Col>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              9
          </Button>         
        </Col>
        <Col size={3}>
          <Button style={Styles.goldButton} block >
              X
          </Button>          
        </Col>
      </Row>

      <Row>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              4
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              5
          </Button>         
        </Col>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              6
          </Button>         
        </Col>
        <Col size={3}>
          <Button style={Styles.goldButton} block >
              -
          </Button>          
        </Col>
      </Row>

      <Row>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              1
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              2
          </Button>         
        </Col>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              3
          </Button>         
        </Col>
        <Col size={3}>
          <Button style={Styles.goldButton} block >
              +
          </Button>          
        </Col>
      </Row>

      <Row>
        <Col size={6}>
          <Button style={Styles.greyButton} block >
              0
          </Button>
        </Col>
        <Col size={3}>
          <Button style={Styles.greyButton} block >
              .
          </Button>         
        </Col>
        <Col size={3}>
          <Button style={Styles.goldButton} block >
              =
          </Button>          
        </Col>
      </Row>
      
      
      
      
    </Container>
  );
}

const Styles = {
  goldButton: { 
    backgroundColor: "gold",
    borderColor: "#333", 
    borderWidth: 0.5, 
    borderRadius: 0,
   color: "#fff" },
  greyButton: { 
    backgroundColor: "#ddd",
    borderColor: "#333", 
    borderWidth: 0.5, 
    borderRadius: 0,
    color: "#333" }
}

export default App;

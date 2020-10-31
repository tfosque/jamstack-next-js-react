import { Card, Button, Col, Row } from "react-bootstrap";
import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      ads: [],
    };
  }
  
  componentDidMount() {
    /* TODO: Make this call an Action and move to a reflux store */
    fetch("http://localhost:3000/api/ads")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ ads: data });
        // console.log(data)
        // console.log('this.state', this.state)
      });
  }

  render() {
    const Ad = ({ value }) => {
      // console.log(value);
      const { size, title } = value;

      return (
        <Col lg="3" className="mb-4">
          <Card>
            {/*  <Card.Img
              variant="top"
              src={`https://dummyimage.com/${size.size}x100/000/fff`}
            /> */}
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="light">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    };

    return (
      <Row className="container-fluid mt-4">
        <Col lg="12" className="text-primary">
          <h3>24/7 Access to Products</h3>
        </Col>
        {this.state.ads.map((ad, i) => {
          return <Ad value={ad} key={i} />;
        })}
      </Row>
    );
  }
}
export default Home;

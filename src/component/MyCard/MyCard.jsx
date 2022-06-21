import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./MyCard.css";
class MyCard extends Component {
    render(){
        return(
            <div className="MyCard col-4 mb-3"> 
               <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71ruDmtlBOL._AC_SX500_.jpg" />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.price}
        </Card.Text>
        <Button variant="primary">{this.props.Link}</Button>
      </Card.Body>
    </Card>
            </div>
        )
    }
}
export default MyCard;
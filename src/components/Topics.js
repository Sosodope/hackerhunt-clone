import React, { Component } from "react";
import { ListGroup, ListGroupItem, ListGroupItemProps } from "react-bootstrap";

class Topics extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
        <ListGroupItem>...</ListGroupItem>
      </ListGroup>
    );
  }
}

export default Topics;

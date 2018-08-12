import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class Topics extends Component {
  render() {
    return (
      <React.Fragment>
        <p className="section-title">Topics</p>
        <ListGroup className="topics">
          <ListGroupItem>
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            Development
          </ListGroupItem>
          <ListGroupItem>
            <span role="img" aria-label="desktop">
              🖥
            </span>{" "}
            System
          </ListGroupItem>
          <ListGroupItem>
            <span role="img" aria-label="tools">
              🛠
            </span>{" "}
            Tools
          </ListGroupItem>
          <ListGroupItem>
            <span role="img" aria-label="chat">
              📉
            </span>{" "}
            Data Science
          </ListGroupItem>
          <ListGroupItem>
            <span role="img" aria-label="chains">
              ⛓
            </span>{" "}
            Blockchain
          </ListGroupItem>
          <ListGroupItem>
            <span role="img" aria-label="mobile">
              📱
            </span>{" "}
            Mobile
          </ListGroupItem>
          <ListGroupItem>
            <span role="img" aria-label="sparkle">
              ✨
            </span>{" "}
            Awesome Lists
          </ListGroupItem>
          <ListGroupItem>
            <span role="img" aria-label="rock">
              🤟
            </span>
            🏻Social
          </ListGroupItem>
          <ListGroupItem>
            <span role="img">🖼</span> Visual
          </ListGroupItem>
          <ListGroupItem>
            <span role="img">🍺</span> Open Source
          </ListGroupItem>
          <ListGroupItem>
            <span role="img">🗃</span> All Topics
          </ListGroupItem>
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default Topics;

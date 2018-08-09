import React, { Component } from "react";
import { ListGroup, ListGroupItem, ListGroupItemProps } from "react-bootstrap";

const NewsItem = () => {
  return (
    <React.Fragment>
      <div className="post-data">
        <p className="upvotes">⬆61</p>
        <p className="comments">💬28</p>
      </div>
      <div className="post-excerpt">
        <h4 className="title">
          hiration.com
          <span className="starred"> ★</span>
        </h4>
        <p class="excerpt">
          Professional profile management tool built using React
        </p>
        <div className="post-tags">
          <p className="timestamp">6 hours ago by anon</p>
          <ul className="tags">
            <li>web</li>
            <li>example</li>
            <li>development</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

class Today extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem className="news-item">
          <NewsItem />
        </ListGroupItem>
        <ListGroupItem className="news-item">
          <NewsItem />
        </ListGroupItem>
        <ListGroupItem className="news-item">
          <NewsItem />
        </ListGroupItem>
        <ListGroupItem className="news-item">
          <NewsItem />
        </ListGroupItem>
        <ListGroupItem className="news-item">
          <NewsItem />
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default Today;

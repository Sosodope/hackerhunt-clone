import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";
import Loading from "./Loading";
import moment from "moment";

const NewsItem = props => {
  // const tags = props.tags;
  // const NewsItemTags = tags.map((tag, index) => <li key={index}>{tag}</li>);
  return (
    <React.Fragment>
      <div className="post-data">
        <p className="upvotes">
          <span role="img" aria-label="arrow-up">
            ⬆
          </span>
          {props.points}
        </p>
        <p className="comments">
          <span role="img" aria-label="message-bubble">
            💬
          </span>
          {props.num_comments}
        </p>
      </div>
      <a href={props.url} target="_blank" className="links">
        <div className="post-excerpt">
          <h4 className="title">{props.title}</h4>
          <div className="post-tags">
            <p className="timestamp">
              {moment()
                .startOf("props.created_at")
                .fromNow()}{" "}
              by {props.author}
            </p>
            {/* <ul className="tags">{NewsItemTags}</ul> */}
          </div>
        </div>
      </a>
    </React.Fragment>
  );
};

class Today extends Component {
  state = {
    results: [],
    topic: "",
    loading: true
  };
  componentDidMount() {
    axios
      .get(`http://hn.algolia.com/api/v1/search?tags=front_page`)
      .then(data => {
        if (this.state.loading) {
          this.setState({ loading: false, results: data.data.hits });
        }
      });
  }
  getTopic = topic => {
    axios
      .get(`https://hn.algolia.com/api/v1/search?query=${topic}&tags=story`)
      .then(data => {
        if (this.state.loading) {
          this.setState({ loading: false, results: data.data.hits });
        }
      });
  };
  render() {
    return (
      <React.Fragment>
        <p className="section-title">Today</p>
        {this.state.loading ? (
          <Loading />
        ) : (
          <ListGroup>
            {this.state.results.map(result => {
              return (
                <ListGroupItem className="news-item" key={result.id}>
                  <NewsItem
                    points={result.points}
                    num_comments={result.num_comments}
                    url={result.url}
                    title={result.title}
                    created_at={result.created_at}
                    author={result.author}
                    url={result.url}
                  />
                  {/* // tags=
                  {result.tags} // */}
                </ListGroupItem>
              );
            })}
          </ListGroup>
        )}
      </React.Fragment>
    );
  }
}

export default Today;

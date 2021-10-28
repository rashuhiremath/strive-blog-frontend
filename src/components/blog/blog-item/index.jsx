import React, { Component } from "react";
import { Card } from "react-bootstrap";
import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import "./styles.css";
export default class BlogItem extends Component {
  // state = {
  //   isLoading: true,
  //   error: false,
  //   blog: {},
  // };
  

  // handleFetch = async (id) => {
  //   try {
  //     const response = await fetch("http://localhost:3002/blogs"+id);

  //     if (response.ok) {
  //       const blog = await response.json();
  //       this.setState({ blog, isLoadong: false });
  //     } else {
  //     }
  //   } catch (error) {
  //     this.setState({ isLoading: false, error: error.message });
  //   }
  // };
  // componentDidMount = () => {
  //   const { id } = this.props.match.params
  //   this.handleFetch(id);
  // };

  render() {
    const {name,surname,email,id,avatar } = this.props
    
      return (
        <Link to={`/blogs/${id}`} className="blog-link">
          <Card className="blog-card">
            <Card.Img variant="top" src={avatar} className="blog-cover" />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Card.Footer>
              {/* <BlogAuthor {email} /> */}
            </Card.Footer>
          </Card>
        </Link>
      );

    
    
  }
}

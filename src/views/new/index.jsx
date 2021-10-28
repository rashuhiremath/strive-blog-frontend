import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
export default class NewBlogPost extends Component {
  
  state = {
    avatar: null,
    body: {
      name: "",
    },
  };

  addTheNewBlog = async (id) => {
    let formData = new FormData();
    formData.append("post", this.state.avatar);


    try {
      const response = await fetch("http://localhost:3002/blogs", {
        method: "POST",
        body: JSON.stringify(this.state.body),
        headers: {
          "Content-Type": "application/json",
        },

       
        
      } );
      console.log(response)

      if (response.ok) {
        const  imageUpload = await fetch(
          `http://localhost:3002/blogs/${id}/uploadSingle`,
          {
            body: formData,
            method: "POST",
          }  
        )
       
        alert("posted");
        const postData = await imageUpload.json();
        console.log("data of image" , postData);

        console.log("here my new data", formData.getAll("post"));
        
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this. addTheNewBlog();
  };

  handleChange = (event) => {
    this.setState({ ...this.state, body: { name: event.target.value } });
  };

  render() {
    return (
      <Container className="new-blog-container">
        <Form onSubmit={this.handleSubmit} className="mt-5">
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="name"
             
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
{/*           
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>surname</Form.Label>
            <Form.Control size="lg" placeholder="surname" type="text" value={this.state.text}
              onChange={this.handleChange}/>
          </Form.Group> */}
          <input
            type="file"
            onChange={(e) =>
              this.setState({ ...this.state, avatar: e.target.files[0] })
            }
            accept="image/png, image/jpeg"
          />
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

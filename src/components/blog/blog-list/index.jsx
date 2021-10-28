import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";

import  Loader from "../../loader/Loader.jsx"
export default class BlogList extends Component {
  state = { 
    isLoading : true,
    error : false,
    blogs:[]

  }
  componentDidMount = () =>{
       this.handleFetch()
  }

  handleFetch = async() => {
    try{
      const response = await fetch("http://localhost:3002/blogs")
      
      if(response.ok){
        const blogs = await response.json()
        console.log(blogs)
this.setState({blogs, isLoading:false})
      }else{

      }

    }catch(error){
      this.setState({isLoading:false,error:error.message})
    }

  }




  render() {

    const {isLoading,blogs,error} =  this.state

    if(isLoading){
      return <Loader/>
    }else{

      if(error){
        return(<div>{error}</div>)
      }else{ 
          return (
            <Row>
              {blogs.map((blog) => (
                <Col md={4} style={{ marginBottom: 50 }}>
                  <BlogItem key={blog.id} {...blog} />
                </Col>
              ))}
            </Row>
          );
        
      }
    }
    
  }
}

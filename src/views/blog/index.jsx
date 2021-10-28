import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog/blog-author";
import BlogLike from "../../components/likes/BlogLike";
import posts from "../../data/posts.json";
import "./styles.css";
class Blog extends Component {
  state = {
    blog: {},
    isLoading: true,
    error:false
  };

  id = this.props
  handleFetch = async (id) => {
    try {
      const response = await fetch("http://localhost:3002/blogs/"+id);

      if (response.ok) {
        const blog = await response.json();
        console.log(blog)
        console.log(this.state)
        this.setState({ blog, isLoadong: false });
      } else {
      }
    } catch (error) {
      this.setState({ isLoading: false, error: error.message });
    }
  };
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.handleFetch(id);
  };


  render() {
    const { loading, blog } = this.state;
    if (loading) {
      return <div>loading</div>;
    } else {
      return (
        <div className="blog-details-root">
          <Container>
            <Image className="blog-details-cover" src={blog.avatar} fluid />
            <h1 className="blog-details-title">{blog.name}</h1>

            <div className="blog-details-container">
              <div className="blog-details-author">
                {/* <BlogAuthor {...blog.author} /> */}
              </div>
              <div className="blog-details-info">
                <div>{blog.createdAt}</div>
                {/* <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div> */}
                <div style={{marginTop:20}}>
                  <BlogLike defaultLikes={["123"]} onChange={console.log}/>
                </div>
              </div>
            </div>

            {/* <div dangerouslySetInnerHTML={{ __html: blog.content }}></div> */}
          </Container>
        </div>
      );
    }
  }
}

export default withRouter(Blog);

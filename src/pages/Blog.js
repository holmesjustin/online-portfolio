import React from "react";
import * as contentful from "contentful";
import BlogItem from "../components/BlogItem";
import PageHeader from "../components/PageHeader";

class Blog extends React.Component {
  state = {
    posts: [],
  };

  client = contentful.createClient({
    space: "yh9gw35q20n2",
    accessToken: "7Y5r-Ua8Eyk7Tp-lfwOg2EouoaSkcMze70HVlmq18ps",
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries();

  setPosts = (response) => {
    this.setState({
      posts: response.items,
    });
  };

  render() {
    return (
      <div>
        <PageHeader color="is-info" title="Code Blog">
          Your standard <strong>JavaScript</strong> programming blog, albeit,
          probably not very good, but I will at least try to keep it
          entertaining. This blog is a chronological mix of random posts on
          Angular, React, Functional Programming, and my{" "}
          <strong>project walkthroughs</strong>.
        </PageHeader>
        <br />
        {this.state.posts.map(({ fields }, i) => (
          <BlogItem key={i} {...fields} />
        ))}
      </div>
    );
  }
}

export default Blog;

import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Loading from "./components/Loading";
import axios from "axios";
//import {data} from './data'
import Footer from "./components/Footer";

export default class App extends React.Component {
  state = {
    data: [],
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios.get("/links").then((res) => {
      this.setState({ data: res.data });
    });
    this.setState({ loading: false });
  };

  submitPost = (name, link) => {
    const postObj = {
      name: name || null,
      link: link || null,
      // docs: docs || null,
      likes: 0,
      dislikes: 0,
    };
    console.log(postObj);

    axios
      .post("/resources", postObj)
      .then((res) => {
        console.log(res);
      })
      .then(() => this.componentDidMount());
  };

  handleLikes = (id, likes) => {
    const likeObj = {
      likes: (likes += 1),
    };
    axios
      .put(`/resources/${id}`, likeObj)
      .then((res) => {
        console.log(res);
      })
      .then(() => this.componentDidMount());
  };
  handleDislikes = (id, dislikes) => {
    const dislikeObj = {
      dislikes: (dislikes += 1),
    };

    axios
      .put(`/resources/${id}`, dislikeObj)
      .then((res) => {
        console.log(res);
      })
      .then(() => this.componentDidMount());
  };

  handleClickDelete = (id) => {
    axios.delete(`/resources/${id}`).then(() => this.componentDidMount());
  };

  render() {
    console.log(this.state.data);
    if (this.state.loading === true) {
      return <Loading />;
    }
    if (this.state.loading === false) {
      return (
        <div className="container">
          <Navbar />

          <Card
            info={this.state.data}
            handleClickDelete={this.handleClickDelete}
            handleLikes={this.handleLikes}
            handleDislikes={this.handleDislikes}
          />
          <Footer submitPost={this.submitPost} />
        </div>
      );
    }
  }
}

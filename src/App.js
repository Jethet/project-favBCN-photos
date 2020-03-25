import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// link to GH API: https://api.github.com/users/

import UserForm from "./components/UserForm";

class App extends Component {
  state = {
    repos: null
  };

  getUser = e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`).then(res => {
      const repos = res.data.public_repos;
      this.setState({ repos: repos });
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP calls in React</h1>
        </header>
        <UserForm getUser={this.getUser} />
      </div>
    );
  }
}

export default App;

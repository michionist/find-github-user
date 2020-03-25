import React from "react";
import "./App.css";
import axios from "axios";

// github: https://api.github.com/users/michionist

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      username: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(result => this.setState({ userData: result.data }))
      .catch(err => console.error(err));
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div className="button__container">
        <h3>Get Github User </h3>
        <input
          type="text"
          onChange={this.handleChange}
          name="name"
          placeholder="Github username"
          className="text-input"
        />
        <button onClick={this.handleClick} className="button">
          Show user details
        </button>
        <p>
          Fullname: <strong>{this.state.userData.name}</strong>
        </p>
        <p>
          Company: <strong>{this.state.userData.company}</strong>
        </p>
        <p>
          Location: <strong>{this.state.userData.location}</strong>
        </p>
        <p>
          Email: <strong>{this.state.userData.email}</strong>
        </p>
        <p>
          Bio: <strong>{this.state.userData.bio}</strong>
        </p>
        <p>
          Blog Link: <strong>{this.state.userData.blog}</strong>
        </p>
      </div>
    );
  }
}

export default App;

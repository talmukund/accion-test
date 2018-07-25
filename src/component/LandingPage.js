import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import logo from "./logo.svg";
import "./LandingPage.css";

export default class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData : []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount(){
    const allPosts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.setState({userData: allPosts.data});
  }

  handleClick (){
    this.props.history.push("/create")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleClick}>Move to create post</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <table>
          <tr>
            <th>userid</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
          
            {this.state.userData && this.state.userData.map(user=>{
              return<tr> <td>{user.userId}</td><td>{user.id}</td><td>{user.title}</td><td>{user.body}</td></tr>
            })}          
        </table>        
      </div>
    );
  }
}

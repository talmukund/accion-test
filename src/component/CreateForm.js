import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import axios from "axios";


class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            userId: ""
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick = async () => {
        const { title, body, userId } = this.state;
        await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title,
            body,
            userId
        });
        this.props.history.push("/");
    }
    render() {
        return (<form>
            title:<br />
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            <br />
            body:<br />
            <input type="text" name="body" value={this.state.body} onChange={this.handleChange} />
            userId:<br />
            <input type="text" name="userId" value={this.state.userId} onChange={this.handleChange} />
            <br /><br />
            <input type="submit" value="Submit" onClick={this.handleClick} />
        </form>
        );
    }
}

export default withRouter(CreateForm)

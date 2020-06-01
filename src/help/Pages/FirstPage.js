import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import Form from "../../components/Form"

class FirstPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Helper!</h1>
                <Form />
                <button onClick={event => window.location.href = "/"}>
                    Main Page
            </button>
                <button onClick={event => window.location.href = "/help/2"} >
                    Next
            </button>
            </div>
        )
    }
}
export default FirstPage
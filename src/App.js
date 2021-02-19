import { Component } from "react";
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios('https://api.randomuser.me/?results=5')
            .then(response => {
                this.setState({
                    users: response.data.results
                })
            })
    }

    render() {
        return (
            <div className="App">
                First change.
            </div>
        );
    }
}

export default App;

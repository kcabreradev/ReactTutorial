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
        this.getUsers();
    }
    
    getUsers() {
        axios('https://api.randomuser.me/?nat=US&results=5')
            .then(response => {
                this.setState({
                    users: response.data.results
                })
            })
    }

    render() {
        return (
            <div className="App">
                {this.state.users.map((user, index) => 
                    <div key={index}>
                        <h3>{user.name.first} {user.name.last}</h3>
                        <p>{user.email}</p>
                        <hr />
                    </div>
                )}
            </div>
        );
    }
}

export default App;

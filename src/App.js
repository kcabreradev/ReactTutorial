import { Component } from "react";
import axios from 'axios';
import { Loading } from './Loading';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            loading: false
        }
    }

    componentDidMount() {
        this.getUsers();
    }
    
    getUsers() {
        this.setState({
            loading: true
        })
        axios('https://api.randomuser.me/?nat=US&results=5')
            .then(response => {
                this.setState({
                    users: response.data.results,
                    loading: false
                })
            })
    }

    render() {
        return (
            <div className="App">
                {this.state.loading ? 
                    <Loading message="Not loaded yet" /> 
                    : this.state.users.map((user, index) => 
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

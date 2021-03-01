import { Component } from "react";
import axios from 'axios';
import { Loading } from './Loading';

class App extends Component {
    constructor(props) {
        super(props)
        //state
        this.state = {
            users: [],
            loading: false
        }
        //bind
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleMore = this.handleMore.bind(this)
    }

    componentDidMount() {
        this.getUsers();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.getUsers();
        console.log('different users loaded');
    }

    handleMore(e) {
        e.preventDefault();
        this.getUsers(false);
        console.log('more users loaded');
    }
    
    getUsers(replaceUsers = true) {
        this.setState({
            loading: true
        })
        axios('https://api.randomuser.me/?nat=US&results=5')
            .then(response => {
                this.setState({
                    users: replaceUsers ? response.data.results : [...this.state.users, ...response.data.results],
                    loading: false
                })
            })
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="load users" />
                </form>
                <button onClick={this.handleMore}>More users</button>
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

import { Component } from "react";
import axios from 'axios';
import {Loading} from "./Loading";

export class Users extends Component {
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
                const {results} = response.data;
                this.setState({
                    users: replaceUsers ? results : [...this.state.users, ...results],
                    loading: false
                })
            })
    }

    render() {
        const {loading, users} = this.state;
        return (
            <div className="App">
                <div className="d-flex">
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="load users" />
                    </form>
                    <button onClick={this.handleMore}>More users</button>
                </div>
                {loading ? 
                    <Loading message="Not loaded yet" /> 
                    : users.map((user, index) => 
                    <div key={index}>
                        <h3 style={{color: 'red'}}>{user.name.first} {user.name.last}</h3>
                        <p>{user.email}</p>
                        <hr />
                    </div>
                )}
            </div>
        );
    }
}

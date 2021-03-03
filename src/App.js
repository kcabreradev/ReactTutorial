import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Users } from './components/Users';
import { Counter } from './components/Counter';

function App() {
    return (
        <Router>
            <div className="container-fluid">
                <Navbar></Navbar>
                <hr />
                <Switch>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/counter">
                        <Counter />
                    </Route>
                    <Route path="/">
                        <Redirect to="/users"></Redirect>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default App;

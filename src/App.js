import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Users } from './components/Users';
import { Counter } from './components/Counter';
import { News } from './components/News';

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <div className="container-fluid">
                <Switch>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/counter">
                        <Counter />
                    </Route>
                    <Route path="/news">
                        <News />
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

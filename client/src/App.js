import './App.css';
import 'fontsource-roboto';
import {Header} from "./components/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Card from "./components/Card";
import Register from "./components/Register";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route path="/profile">
                        <h2>My Profile</h2>
                    </Route>
                    <Route path="/chat">
                        <h2>Chat</h2>
                    </Route>
                    <Route path="/success">
                        <h2>Registration successful!</h2>
                        <h4>Please log in now:</h4>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/">
                        <Card/>
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer/>

        </div>
    );
}

export default App;

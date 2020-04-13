import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import { auth } from './firebase/firebase.utils';

import Header from "./components/header/header.component";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {

            this.setState({ currentUser: user });
            console.log('user =>', this.state.currentUser);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {


        return (
            <div className="" >
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;

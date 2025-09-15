import React from "react";
import {Switch, Route, Router} from 'react-router-dom';
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const generateClassName = createGenerateClassName({
    productionPrefix: '_cls_auth',
});

export default function App({history}) {
    return(
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/auth/signin" component={SignIn} />
                        <Route exact path="/auth/signup" component={SignUp} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
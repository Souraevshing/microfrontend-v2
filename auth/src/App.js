import React from "react";
import {Switch, Route, Router} from 'react-router-dom';
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const generateClassName = createGenerateClassName({
    productionPrefix: '_cls_auth',
});

export default ({history, onSignIn}) => {
    return(
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin" component={SignIn}>
                            <SignIn onSignIn={onSignIn} />
                        </Route>
                        <Route path="/auth/signup" component={SignUp}>
                            <SignUp onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
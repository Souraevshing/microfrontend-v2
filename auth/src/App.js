import React from "react";
import {Switch, Route, Router} from 'react-router-dom';
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

const generateClassName = createGenerateClassName({
    productionPrefix: '_cls_auth',
});

export default function App({history}) {
    return(
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
import React from "react";
import {Switch, Route, Router} from 'react-router-dom';
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

import LandingPage from "./components/Landing";
import PricingPage from "./components/Pricing"
import ErrorPage from "./components/ErrorPage";

const generateClassName = createGenerateClassName({
    productionPrefix: '_cls_marketing',
});

export default function App({history}) {
    return(
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/auth/signup" component={LandingPage} />
                        <Route exact path={'/pricing'} component={PricingPage} />
                        <Route path={'*'} component={ErrorPage} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
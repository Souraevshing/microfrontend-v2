import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {StylesProvider} from "@material-ui/core";

import LandingPage from "./components/Landing";
import PricingPage from "./components/Pricing"
import ErrorPage from "./components/ErrorPage";

export default function App() {
    return(
        <>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/auth/signup" component={LandingPage} />
                    <Route exact path={'/pricing'} component={PricingPage} />
                    <Route path={'*'} component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
        </>
    )
}
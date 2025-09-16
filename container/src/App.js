import React, {lazy, Suspense, useState, useEffect} from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import {createBrowserHistory} from "history";

import Header from "./components/Header";
import Loader from "./components/Loader";

const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: '_cls_container',
})

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn]=useState(false)


    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);

    return (
            <Router history={history}>
                <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)} />
                        <Suspense fallback={<Loader />}
                        >
                            <Switch>
                                <Route path="/auth" >
                                    <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
                                </Route>
                                <Route path="/dashboard">
                                    {!isSignedIn && <Redirect to="/" />}
                                    <DashboardLazy />
                                </Route>
                                <Route path="/" render={() => <MarketingAppLazy />} />
                            </Switch>
                        </Suspense>
                    </div>
                </StylesProvider>
            </Router>
    )
}
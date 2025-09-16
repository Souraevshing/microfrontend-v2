import React, {lazy, Suspense, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

import Header from "./components/Header";
import Loader from "./components/Loader";
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));

const generateClassName = createGenerateClassName({
    productionPrefix: '_cls_container',
})

export default () => {
    const [isSignedIn, setIsSignedIn]=useState(false)

    return (
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)} />
                        <Suspense fallback={<Loader />}
                        >
                            <Switch>
                                <Route path="/auth" >
                                    <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
                                </Route>
                                <Route path="/" render={() => <MarketingAppLazy />} />
                            </Switch>
                        </Suspense>
                    </div>
                </StylesProvider>
            </BrowserRouter>
    )
}
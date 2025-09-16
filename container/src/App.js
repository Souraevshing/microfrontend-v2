import React, {lazy, Suspense} from "react";
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

    return (
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header/>
                        <Suspense fallback={<Loader />}
                        >
                            <Switch>
                                <Route path="/auth" render={() => <AuthAppLazy />} />
                                <Route path="/" render={() => <MarketingAppLazy />} />
                            </Switch>
                        </Suspense>
                    </div>
                </StylesProvider>
            </BrowserRouter>
    )
}
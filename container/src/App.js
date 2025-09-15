import React from "react";
import {BrowserRouter} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

import MarketingApp from "./components/Marketing";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
    productionPrefix: '_cls_container',
})

export default function App() {

    return (
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header/>
                        <MarketingApp />
                    </div>
                </StylesProvider>
            </BrowserRouter>
    )
}
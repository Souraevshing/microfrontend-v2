import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";

import MarketingApp from "./components/Marketing";
import Header from "./components/Header";

export default function App() {

    return (
            <BrowserRouter>

                <div>
                <Header/>
                    <MarketingApp />
                </div>

                </BrowserRouter>
        )
}
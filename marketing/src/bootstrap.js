import React from "react";
import ReactDOM from "react-dom";

const mount = (element) => {
    ReactDOM.render(
        <h1>Marketing</h1>,
        element,
    )
}

if(process.env.NODE_ENV === "development") {
    const root = document.querySelector('#marketing-dev-root');
    if(root) {
        mount(root)
    }
}

export { mount }
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
});

export const parcelConfig = {
    bootstrap: reactLifecycles.bootstrap,
    mount: reactLifecycles.mount,
    unmount: reactLifecycles.unmount,
};
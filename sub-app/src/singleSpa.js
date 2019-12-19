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
    bootstrap() {
        return reactLifecycles.bootstrap;
    },
    mount() {
        return reactLifecycles.mount;
    },
    unmount() {
        return reactLifecycles.unmount;
    }
};
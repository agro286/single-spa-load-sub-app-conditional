import { start } from 'single-spa';
import { registerSubApp } from './sub-app';

export const registerMicroFrontends = () => {
    registerSubApp();
};

export const startMicroFrontend = () => {
    console.log('start');
    start();
};

import * as Sspa from 'single-spa';
import { matchingPathname, runScript } from './utils';

const loadSubApp = async () => {
    await runScript('http://localhost:5000/static/js/main.js');
    // @ts-ignore
    return window.subApp;
};

export const registerSubApp = () => {
    Sspa.registerApplication(
        'sub-app',
        loadSubApp,
        matchingPathname(['/']) // This will be visible on these two routes
    );
};

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import SubAppWrapper from './ui/SubAppOpener';
import SubAppOpener from './ui/SubAppWrapper';
import {reducer} from './ui/actions';

const App: React.FC = () => {
    const store = createStore(reducer, composeWithDevTools());

    return (
        <Provider store={store}>
            <div className='App'>
                <SubAppOpener/>
                <SubAppWrapper/>
            </div>
        </Provider>
    );
};

export default App;
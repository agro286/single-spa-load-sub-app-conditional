import React from 'react';
import SubAppWrapper from './ui/SubAppOpener';
import SubAppOpener from './ui/SubAppWrapper';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './ui/actions';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

const App: React.FC = () => {
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

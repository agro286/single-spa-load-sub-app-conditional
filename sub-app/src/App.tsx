import React, {Component, ErrorInfo} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <p className='App'>here i am</p>
        );
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log('Feature App Error:', error);
        console.log('Feature App Error Info:', info);
    }
}

export default App;

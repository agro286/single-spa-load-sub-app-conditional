import React from 'react';
import {connect} from 'react-redux';

interface SubAppWrapperProps {
    subAppOpen: boolean;
}

const SubAppWrapper: React.FC<SubAppWrapperProps> = ({subAppOpen}: SubAppWrapperProps) => {
    console.log('render');
    return subAppOpen ? (<div className='wrapper'>
        <div id='sub-app'/>
    </div>) : <div/>;
};

// @ts-ignore
const mapStateToProps = (state) => {
    return {
        subAppOpen: state.subAppOpen
    }
};

export default connect(mapStateToProps)(SubAppWrapper);

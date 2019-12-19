import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {openSubApp} from './actions';

interface SubAppOpenerProps {
    openSubApp: () => void;
}

const SubAppOpener: React.FC<SubAppOpenerProps> = ({openSubApp}: SubAppOpenerProps) => {
    return (<button onClick={() => {openSubApp()}}>openSubApp</button>);
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        openSubApp: () => {
            dispatch(openSubApp())
        }
    }
};

export default connect(null, mapDispatchToProps)(SubAppOpener);

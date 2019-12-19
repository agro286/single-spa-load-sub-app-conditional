import React from 'react';
import {connect} from 'react-redux';
// @ts-ignore
import Parcel from 'single-spa-react/parcel';
import {runScript} from '../app-registrations/utils';
import {mountRootParcel, ParcelConfig} from 'single-spa';
import {SubAppState} from "./actions";

type SubApp = { parcelConfig: ParcelConfig };

declare global {
    interface Window {
        subApp: SubApp;
    }
}

interface SubAppWrapperProps {
    subAppOpen: boolean;
}

const SubAppWrapper: React.FC<SubAppWrapperProps> = ({subAppOpen}: SubAppWrapperProps) => {
    const loadParcelConfig = async () => {
        await runScript('http://localhost:5000/static/js/main.js');
        return window.subApp.parcelConfig;
    };

    return subAppOpen
        ? (<Parcel config={loadParcelConfig}
                   mountParcel={mountRootParcel}
                   wrapWith='div'/>)
        : <div/>;
};

const mapStateToProps = (state: SubAppState) => {
    return {
        subAppOpen: state.subAppOpen
    }
};

export default connect(mapStateToProps)(SubAppWrapper);

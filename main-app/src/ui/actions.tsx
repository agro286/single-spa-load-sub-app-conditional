import {Action} from 'redux';

export const OPEN_SUBAPP = 'OPEN_SUBAPP';

export function openSubApp() {
    return {type: OPEN_SUBAPP}
}

export type SubAppState = {
    subAppOpen: boolean;
}

const initialState: SubAppState = {
    subAppOpen: false
};

export function reducer(state: SubAppState = initialState, action: Action<string>) {
    switch (action.type) {
        case OPEN_SUBAPP:
            return {...state, subAppOpen: true};
        default:
            return state
    }
}
import {Action} from 'redux';

export const OPEN_SUBAPP = 'OPEN_SUBAPP';

export function openSubApp() {
    return {type: OPEN_SUBAPP}
}

const initialState = {
    subAppOpen: false
};

export function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case OPEN_SUBAPP:
            return {...state, subAppOpen: true};
        default:
            return state
    }
}
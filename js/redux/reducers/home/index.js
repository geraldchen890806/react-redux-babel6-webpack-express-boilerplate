

import {
    Home as types,
    commonType
} from "js/redux/constants/index";

const initialState = {
    test: new Date()
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE:
            return {...state,
                test: new Date()
            };
        case commonType.CLEAR:
            return initialState;
        default:
            return state;
    }
}

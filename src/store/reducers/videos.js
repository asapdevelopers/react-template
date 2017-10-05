import * as videoActions from '../../constants/actions/videoActions';

function videosReducer(state = [], { type, payload }) {
    console.log("The video will change");
    console.log(state, type, payload);
    switch (type) {
        case videoActions.VIDEO_ADD_COMMENT:
            {
                return state;
            }
        case videoActions.VIDEO_ADD_LIKE:
            {
                return state;
            }
        default:
            return state;
    }
}

export default videosReducer;
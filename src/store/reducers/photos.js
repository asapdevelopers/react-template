import * as photoActions from '../../constants/actions/photoActions';

function photosReducer(state = [], { type, payload }) {
    switch (type) {
        case photoActions.PHOTO_GET_LIST_SUCCESS:
            {
                let list = payload;
                list.forEach(function(value) {
                    value.likes = Math.floor((Math.random() * 100) + 1);
                });
                return list;
            }
        case photoActions.PHOTO_GET_LIST_FAILURE:
            {
                return state;
            }
        case photoActions.PHOTO_ADD_LIKE:
            {
                let index = state.findIndex(x => x.id === payload.id);
                if (index !== -1) {
                    return [
                        ...state.slice(0, index),
                        { ...state[index], likes: state[index].likes + 1 },
                        ...state.slice(index + 1)
                    ]
                } else {
                    return state;
                }
            }
        default:
            return state;
    }
}

export default photosReducer;
import * as videoActions from '../../constants/actions/videoActions';

export const like = id => ({ type: videoActions.VIDEO_ADD_LIKE, payload:{id} });
export const addComment = (id, author, comment) => ({ type: videoActions.VIDEO_ADD_COMMENT, id, author, comment });
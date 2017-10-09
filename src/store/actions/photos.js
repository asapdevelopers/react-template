import * as photoActions from '../../constants/actions/photoActions';

export const list = () => ({ type: photoActions.PHOTO_GET_LIST, payload:{}});
export const like = id => ({ type: photoActions.PHOTO_ADD_LIKE, payload:{id} });

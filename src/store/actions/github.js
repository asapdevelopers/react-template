import * as githubActions from '../../constants/actions/githubActions';

export const list = () => ({ type: githubActions.GITHUB_GET_LIST, payload:{}});

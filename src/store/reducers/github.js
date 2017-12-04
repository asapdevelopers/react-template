import * as githubActions from "../../constants/actions/githubActions";

function githubReducer(state = [], { type, payload }) {
  switch (type) {
    case githubActions.GITHUB_GET_LIST_SUCCESS: {
      return payload;
    }
    case githubActions.GITHUB_GET_LIST_FAILURE: {
      alert("Error getting Github projects");
      return state;
    }
    default:
      return state;
  }
}

export default githubReducer;

import AppDispatcher from 'dispatcher/AppDispatcher';
import ActionConstants from 'actions/ActionConstants';

var Actions = {

  usersReceived (users) {
    AppDispatcher.dispatch({
      type: ActionConstants.USERS_RECEIVED,
      data: users
    });
  },

  reposReceived(repos) {
    AppDispatcher.dispatch({
      type: ActionConstants.REPOS_RECEIVED,
      data: repos
    });
  },

  pullRequestsReceived(pullRequests) {
    AppDispatcher.dispatch({
      type: ActionConstants.PULL_REQUESTS_RECEIVED,
      data: pullRequests
    });
  }

};

export default Actions;

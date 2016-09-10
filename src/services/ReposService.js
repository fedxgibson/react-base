import 'whatwg-fetch';
import AppActions from 'actions/AppActions';
import Immutable from 'immutable';
import Humps from 'humps';

let API_URL = 'https://api.github.com';

let toList = (list, recordTypeFunc) => {
  list = list.map(recordTypeFunc);
  return new Immutable.List(list);
};

let toRepositoryRecord = (object) => {
  let repo = new Repository({
    id: object.id,
    fullName: object.fullName
  });
  return repo;
};

let toPullRequestRecord = (object) => {
  let pr = new PullRequest({
    id: object.id,
    title: object.title
  });
  return pr;
};

let Repository = new Immutable.Record({
  id: null,
  fullName: null
});

let PullRequest = new Immutable.Record({
  id: null,
  title: null
});

let toCamelCase = (data) => {
  data = Humps.camelizeKeys(data);
  return data;
}

export default {

  Repository: Repository,

  getAllRepositories() {
    fetch(`${API_URL}/repositories`)
      .then((response) => response.json())
      .then(toCamelCase)
      .then((list) => toRepoList(list, toRepositoryRecord))
      .then(AppActions.reposReceived)
  },

  getRepoPullRequests(ownerId, repoId) {
    fetch(`${API_URL}/repos/${ownerId}/${repoId}/pulls`)
      .then((response) => response.json())
      .then(toCamelCase)
      .then((list) => toList(list, toPullRequestRecord))
      .then(AppActions.pullRequestsReceived)
  }

}

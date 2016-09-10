require('normalize.css/normalize.css');
require('styles/App.scss');

import {Container} from 'flux/utils';
import React, {Component} from 'react';
import ReposStore from 'stores/ReposStore';
import Actions from 'actions/AppActions';
import ReposService from 'services/ReposService';
import MainSection from 'components/MainSection'
let yeomanImage = require('../images/yeoman.png');
let Button = require('react-bootstrap').Button;

setTimeout(ReposService.getAllRepositories, 2000);


class AppComponent extends Component {

  static getStores() {
    return [ReposStore];
  }

  static calculateState(prevState) {
    return {
      repos: ReposStore.getState()
    }
  }

  render() {
    return (
      <MainSection repos={this.state.repos}/>
    );
  }
}

const AppContainer = Container.create(AppComponent);
export default AppContainer;

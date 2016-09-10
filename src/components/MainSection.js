/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import RepoItem from './RepoItem';


export default class MainSection extends Component {
  render(){
    const {repos} = this.props;

    if (repos.size === 0) {
      return null;
    }

    const repoItems = [];
    for (let repo of repos) {
      repoItems.push(<RepoItem key={repo.id} repo={repo} />);
    }

    return (
      <section>
        <ul>{repoItems}</ul>
      </section>
    );
  }
}

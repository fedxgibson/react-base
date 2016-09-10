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

export default class RepoItem extends Component {

  render() {
    const {repo} = this.props;
    return (
      <li className="" key={repo.id}>
        {repo.fullName}
      </li>
    );
  }

}

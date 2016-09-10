/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

'use strict';

import ActionConstants from 'actions/ActionConstants';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import AppDispatcher from 'dispatcher/AppDispatcher';


class UsersStore extends ReduceStore {
  getInitialState() {
    return Immutable.List().set(0, {name: 'Fede'});
  }

  reduce (state, action) {
    switch (action.type) {
      case ActionConstants.TODO_CREATE:
        return state
      default:
        return state;
    }
  }
}

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new UsersStore(AppDispatcher);
export default instance;

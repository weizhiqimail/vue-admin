import * as TYPES from './mutationTypes';

const mutations = {
  [TYPES.BREAD_LIST] (state, breadList) {
    state.breadList = breadList;
  }
};

export default mutations;

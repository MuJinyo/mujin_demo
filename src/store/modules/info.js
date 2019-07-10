/*
* @Author: lh
* @Date:   2018-04-27 16:39:22
* @Last Modified by:   LH
* @Last Modified time: 2018-04-27 17:39:52
*/
import types from "../type.js"
const state = {
	userInfo: {}
}

const actions = {
  setUserInfo({commit},status) {
    commit(types.setUserInfo,status)
  }
}

const getters = {
  getUserInfo:state => state.userInfo
}

const mutations = {
  [types.setUserInfo](state,res){
    state.userInfo = res
  }
}

export default{
  state,
  actions,
  getters,
  mutations
}

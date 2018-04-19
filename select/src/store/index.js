import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    title:'',
    list:[]
  },
  mutations:{
    changeTitle(state,payload){
      state.title = payload.title
    },
    changeList(state,list){
      state.list = list;
    }
  },
  actions:{
    getListAction(context){
      axios.get('https://www.easy-mock.com/mock/5aaf9db93aac802f8c42e7eb/example/select')
        .then((data)=>{
          context.commit('changeList',data.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    }
  }
})
export default store

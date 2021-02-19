import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        token:'',
        userId:'',
        homeRole:''
    },
    mutations:{
        changeToken(state,token){
            state.token =  token
            // console.log(state.token,9999)
        },
        userId(state,userId){
            state.userId = userId;
            // console.log(state.userId,9999)
        },
        homeRole(state,homeRole){
            state.homeRole = homeRole;
            // console.log(state.homeRole,9999)
        }
    },
    actions:{

    }
})
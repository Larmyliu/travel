
const state = {
    loginState:'未登录'
}
  
const mutations = {
    login(state){
        state.loginState = '已登录'
    },
    
}
  
const actions = {
    login(context){
        context.commit('login')
    },
    
}
  
export default {
    state,
    mutations,
    actions
}

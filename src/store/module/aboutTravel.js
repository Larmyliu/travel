import {createTravel, sureTravel, cancelTravel} from './aboutTravel_createTravel'
const state = {
    createTravel,
    sureTravel,
    cancelTravel
}
  
const mutations = {
    addTravel(state, req){
        req.c_current = 0
        state.createTravel.push(req)
    },
    sureTravel(state, req){
        
        state.sureTravel.push(req)
    },
    removeTravelItem(state, req){
        for(let i = 0; i < state.createTravel.length; i++){
            if(state.createTravel[i]['c_id'] === req['c_id']){
                state.createTravel.splice(i,1)
            }
        }
    },
    cancelTravel(state, req){
        state.cancelTravel.push(req)
        for(let i = 0; i < state.sureTravel.length; i++){
            if(state.sureTravel[i]['c_id'] === req['c_id']){
                state.sureTravel.splice(i,1)
            }
        }
    },
    updateNumber(state, req){
        // state.cancelTravel.push(req)
        for(let i = 0; i < state.sureTravel.length; i++){
            if(state.sureTravel[i]['c_id'] === req['c_id']){
                state.sureTravel[i] = req
            }
        }
    },
    updateTravel(state, req){
        // state.cancelTravel.push(req)
        for(let i = 0; i < state.createTravel.length; i++){
            if(state.createTravel[i]['c_id'] === req['c_id']){
                state.sureTravel[i] = req
            }
        }
    },
}
  
const actions = {
    addTravel(context, req){
        context.commit('addTravel',req)
    },
    updateTravel(context, req){
        context.commit('updateTravel',req)
    },
    sureTravel(context, req){
        context.commit('sureTravel',req)
    },
    removeTravelItem(context, req){
        context.commit('removeTravelItem',req)
    },
    cancelTravel(context, req){
        context.commit('cancelTravel',req)
    },
    updateNumber(context, req){
        context.commit('updateNumber',req)
    },
}
  
export default {
    state,
    mutations,
    actions
}

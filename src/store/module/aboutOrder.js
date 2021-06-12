/* eslint-disable no-debugger */
import {joinTravel, finishPay} from './aboutOrder_data'
const state = {
    joinTravel,
    finishPay,
    cancelOrder:[]
}

  
const mutations = {
    addOrder(state, req){
        req['relateForm'] = {joinForm: []}
        state.joinTravel.push(req)
        
    },
    updateNum(state, req){
        for(let i = 0; i < state.joinTravel.length; i++){
            if(req['c_id'] === state.joinTravel[i]['c_id']){
                state.joinTravel[i] = req
            }
        }
    },
    finishPay(state, req){
        for(let i = 0; i < state.joinTravel.length; i++){
            if(req['c_id'] === state.joinTravel[i]['c_id']){
                state.joinTravel[i].hasPay = parseFloat(req['hasPay']) + parseFloat(req['shouldPay'])
                state.joinTravel[i].shouldPay = 0
                break;
            }
            
        }
        state.finishPay.push(req)
    },
    cancelOrder(state, req){
        debugger
        for(let i = 0; i < state.joinTravel.length; i++){
            if(req['c_id'] === state.joinTravel[i]['c_id']){
                let data = state.joinTravel.splice(i,1)
                console.log(data)
                state.cancelOrder = state.cancelOrder.concat(data)
                console.log(state.cancelOrder)
                break
            }
        }
        
    },
}
  
const actions = {
    addOrder(context, req){
        context.commit('addOrder',req)
    },
    updateNum(context, req){
        context.commit('updateNum',req)
    },
    finishPay(context, req){
        context.commit('finishPay',req)
    },
    cancelOrder(context, req){
        context.commit('cancelOrder',req)
    },
}
  
export default {
    state,
    mutations,
    actions
}
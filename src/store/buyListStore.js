import { createSlice } from "@reduxjs/toolkit";

let buyList = createSlice({
  name : 'buyList',
  initialState : [  
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1},
    
  ],
  reducers:{
    iwantsleep(state,action){
      let index = state.findIndex((a)=>{ return a.id === action.payload })
      
    },

    increase(state,action){
      let 번호 = state.findIndex((a)=>{ return a.id === action.payload })
      state[번호].count++
    },
    order(state,action){
      state.push({id:action.payload.id,name:action.payload.title ,count:1})
    },
    
    deleteOrder(state,action){
      state.splice(state[action],1)
      state = state
    },
    buyListSort(state,action){
      state = state.sort((a,b)=>{return a.id-b.id})
    },
    buyListDeSort(state,action){
      state = state.sort((a,b)=>{return b.id-a.id})
    }
  }   
})
export let {increase, order,deleteOrder, buyListSort, buyListDeSort} = buyList.actions


export default buyList
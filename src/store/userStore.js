import {createSlice} from '@reduxjs/toolkit'

let user = createSlice({
  name :'user',
  initialState : {name : 'kim', age:20},
  reducers : {
    ageCount(state){
      state.age += 1
      
    }
  }
})
export let {ageCount} = user.actions

export default user
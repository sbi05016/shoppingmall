import {configureStore, createSlice} from '@reduxjs/toolkit';
import user from './userStore.js'
import buyList from './buyListStore.js'

let tabData = createSlice({
  name : 'tabData',
  initialState : {0:'t1',1:'t2',2:'t3'}
})


export default configureStore({
  reducer:{ tabData : tabData.reducer,
            user : user.reducer,
            buyList : buyList.reducer

  }
})
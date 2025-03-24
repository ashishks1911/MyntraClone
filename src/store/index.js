import {configureStore} from '@reduxjs/toolkit';
import itemsSlice from './itemsSlice';
import bagSlice from './bagSlice';


const store = configureStore({
  reducer : {
    items : itemsSlice.reducer,
    bag : bagSlice.reducer
  }
})

export default store;
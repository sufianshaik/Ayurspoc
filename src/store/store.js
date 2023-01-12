import React from 'react'
import { configureStore } from '@reduxjs/toolkit' ;
import groupReducer from './groupSlice' ;


const store = configureStore( {
  reducer : {
    groups : groupReducer ,

  },
});



export default store
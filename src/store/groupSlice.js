const { createSlice } = require('@reduxjs/toolkit');

const groupSlice = createSlice ( {
    name : 'groups' ,
    initialState  : [] , 
    reducers : {
        add(state , action ) { 
            console.log(state) ;
            // const exist = state.find((x) => x.groupName === action.payload.groupName) 
            // if (exist) {
            //     alert('Group already Exists!!!') ;
            // }
            // else {
            //     return [
            //         ...state, 
            //         {
            //             ...action.payload , 
            //             qty : 1  , 
            //         }
            //     ]
            // }

        }, 
        remove() {

        },
    },

}) ;

export const { add, remove }  = groupSlice.reducer 



export default groupSlice.reducer ; 

// export default class add{} ;
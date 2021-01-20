const initialState={
    some:''
}

export const reducer = (state=initialState,action)=>{
    switch (action.type){
        case 'INC':

            return{...state, some:action.payload}
        default:{
            return state
        }
    }

}
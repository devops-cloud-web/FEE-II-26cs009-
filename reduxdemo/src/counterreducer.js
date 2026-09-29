
const initialState = {
    count:0
}

const counterreducer = (state=initialState,action)=>{

    switch(action.type){
        case "increase":
            return {...state,count: state.count+1}
        
        default: return state
    }
}

export default counterreducer
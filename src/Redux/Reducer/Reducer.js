const Reducer = (state, action) => {
    switch(action.type){
        case 'ADD': return [...state,  action.payLoad] 
        case 'Notes-From-Firebase': return [...state, action.payLoad]
        default : return state
    }   
}
export default Reducer
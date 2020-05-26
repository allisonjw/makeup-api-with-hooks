export const bronzersReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BRONZERS':
            return action.bronzers
        default:
            return state   
    }
}
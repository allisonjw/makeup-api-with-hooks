export const blushesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BLUSHES':
            return action.blushes
        default:
            return state   
    }
}
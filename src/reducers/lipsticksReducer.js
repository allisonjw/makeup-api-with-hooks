export const lipsticksReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LIPSTICKS':
            return action.lipsticks
        default:
            return state   
    }
}
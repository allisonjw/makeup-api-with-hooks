export const mascarasReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MASCARAS':
            return action.mascaras
        default:
            return state   
    }
}
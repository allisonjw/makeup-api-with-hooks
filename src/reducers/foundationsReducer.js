export const foundationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FOUNDATIONS':
            return action.foundations
        default:
            return state   
    }
}
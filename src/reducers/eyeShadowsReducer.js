export const eyeShadowsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EYESHADOWS':
            return action.eyeShadows
        default:
            return state   
    }
}
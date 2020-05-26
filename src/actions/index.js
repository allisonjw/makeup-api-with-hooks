export const addFoundations = foundations => ({
    type: 'ADD_FOUNDATIONS',
    foundations
});

export const addEyeShadows = eyeShadows => ({
    type: 'ADD_EYESHADOW',
    eyeShadows
});

export const addBlushes = blushes => ({
    type: 'ADD_BLUSH',
    blushes
});

export const addBronzers = bronzers => ({
    type: 'ADD_BRONZERS',
    bronzers
});

export const addLipsticks = lipsticks => ({
    type: 'ADD_LIPSTICKS',
    lipsticks
});

export const addMascaras = mascaras => ({
    type: 'ADD_MASCARA',
    mascaras
});

export const isLoading = isLoading => ({
    type: 'SET_LOADING',
    isLoading
});
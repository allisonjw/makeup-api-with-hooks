import { combineReducers } from 'redux';
import { blushesReducer } from './blushesReducer';
import { bronzersReducer } from './bronzersReducer';
import { eyeShadowsReducer } from './eyeShadowsReducer';
import { foundationsReducer } from './foundationsReducer';
import { lipsticksReducer } from './lipsticksReducer';
import { mascarasReducer } from './mascarasReducer';

export const rootReducer = combineReducers ({
    addBlushes: blushesReducer,
    addBronzers: bronzersReducer,
    addEyeShadows: eyeShadowsReducer,
    addFoundations: foundationsReducer,
    addLipsticks: lipsticksReducer,
    addMascaras: mascarasReducer
});
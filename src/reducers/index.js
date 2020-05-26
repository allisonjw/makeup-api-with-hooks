import { combineReducers } from 'redux';
import { blushesReducer } from './blushesReducer';
import { bronzersReducer } from './bronzersReducer';
import { eyeShadowsReducer } from './eyeShadowsReducer';
import { foundationsReducer } from './foundationsReducer';
import { lipsticksReducer } from './lipsticksReducer';
import { mascarasReducer } from './mascarasReducer';
import { isLoadingReducer } from './isLoadingReducer';

export const rootReducer = combineReducers ({
    blushes: blushesReducer,
    bronzers: bronzersReducer,
    eyeShadows: eyeShadowsReducer,
    foundations: foundationsReducer,
    lipsticks: lipsticksReducer,
    mascaras: mascarasReducer,
    isLoading: isLoadingReducer
});
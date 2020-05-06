// import {
//   ActionReducer,
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   MetaReducer
// } from '@ngrx/store';
// import { environment } from '../../environments/environment';


// export interface ProviderState {
//  providerData: ProviderData | null;
// }

// const initalProviderState: ProviderState = {
//   providerData: null
// };

// export interface AppState {
//   provider: ProviderState;
// }

// export function providerReducer(state: ProviderState = initalProviderState, action: ProviderAction): ProviderState {
//   switch (action.type) {
//     case ProviderActionTypes.LoadProvider:
//       return {
//         providerData: action.payload.providerData
//       };

//     default:
//       return state;
//   }
// }

// export const reducers: ActionReducerMap<AppState> = {
//   provider: providerReducer
// };


// export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];

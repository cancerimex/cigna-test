// import { Injectable } from '@angular/core';
// import { Actions, Effect, ofType } from '@ngrx/effects';

// import { map, mergeMap, catchError } from 'rxjs/operators';

// import { Store } from '@ngrx/store';

// import { of } from 'rxjs';


// @Injectable()
// export class ProviderEffects {

//   @Effect()
//   loadProvider$ = this.actions$
//     .pipe(
//       ofType<LoadProvider>(LocationActionTypes.LoadLocations),
//       mergeMap((action) => this.weatherService.getWeather(action.payload.locationData)
//       .pipe(
//         map(weather => {
//           return (new LoadWeather({weatherData: weather}));
//         }),
//         catchError((errorMessage) => of(new LocationsError({error: errorMessage})))
//       ))
//   );


//   constructor(private actions$: Actions) {}

// }

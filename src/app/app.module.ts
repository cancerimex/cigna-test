import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProvidersComponent } from './providers/providers.component';
import { ProviderCardComponent } from './components/provider-card/provider-card.component';
import { FilterPipe } from './shared/filter.pipe';
// import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';
// import { EffectsModule } from '@ngrx/effects';
// import { ProviderEffects } from './effects/provider.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    ProviderCardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true,
    //   }
    // }),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    // EffectsModule.forFeature([ProviderEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { TireFitmentComponent } from './tire-fitment/tire-fitment.component';
import { FitmentReducer } from './tire-fitment/store/fitment.reducer';
import { TireModelsComponent } from './tire-models/tire-models.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({fitment: FitmentReducer})
  ],
  declarations: [AppComponent, TireFitmentComponent, TireModelsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

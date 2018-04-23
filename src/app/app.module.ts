import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {AppRoutingModule, routingComponents} from './stocks/app-routing.module';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import {StockService} from './stock.service';


@NgModule({
  declarations: [
    AppComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

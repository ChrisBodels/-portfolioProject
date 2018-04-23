import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {StocksComponent} from './stocks.component';

const routes: Routes = [
  {path: 'case0', component: StocksComponent},
  {path: 'case1', component: StocksComponent},
  {path: 'case2', component: StocksComponent},
  {path: 'case3', component: StocksComponent},
  {path: 'case4', component: StocksComponent},
  {path: 'case5', component: StocksComponent},
  {path: 'live', component: StocksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StocksComponent];

import { Component, OnInit } from '@angular/core';
// import {Stock, stock} from '../../models/stock';
import {StockService} from '../stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks = [];

  constructor(private _stockService: StockService) { }

  ngOnInit() {
    this._stockService.getStocks()
      .subscribe(data => this.stocks = data);
  }

}

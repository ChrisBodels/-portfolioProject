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

  onClick0() {
    for (let i = 0; i < this.stocks.length; i++) {
      this.stocks[i].change = 1;
      this.stocks[i].currentPrice = +((this.stocks[i].currentPriceOrig * this.stocks[i].change).toFixed(2));
      // this.stocks[i].currentPrice = this.stocks[i].currentPriceOrig * this.stocks[i].change;
      // this.stocks[i].currentPrice = Math.round((this.stocks[i].currentPrice * 100) / 100);
      // this.stocks[i].totalValue = Math.round(((this.stocks[i].currentPrice * this.stocks[i].quantity) * 100) / 100);
      this.stocks[i].totalValue = +((this.stocks[i].currentPrice * this.stocks[i].quantity).toFixed(2));
      this.stocks[i].gainLoss = +((this.stocks[i].totalValue - this.stocks[i].purchasePrice * this.stocks[i].quantity).toFixed(2));
    }
  }

  onClick1() {
    for (let i = 0; i < this.stocks.length; i++) {
      this.stocks[i].change = 1.1;
      this.stocks[i].currentPrice = +((this.stocks[i].currentPriceOrig * this.stocks[i].change).toFixed(2));
      this.stocks[i].totalValue = +((this.stocks[i].currentPrice * this.stocks[i].quantity).toFixed(2));
      this.stocks[i].gainLoss = +((this.stocks[i].totalValue - this.stocks[i].purchasePrice * this.stocks[i].quantity).toFixed(2));
    }
  }

  onClick2() {
    for (let i = 0; i < this.stocks.length; i++) {
      this.stocks[i].change = 0.9;
      this.stocks[i].currentPrice = +((this.stocks[i].currentPriceOrig * this.stocks[i].change).toFixed(2));
      this.stocks[i].totalValue = +((this.stocks[i].currentPrice * this.stocks[i].quantity).toFixed(2));
      this.stocks[i].gainLoss = +((this.stocks[i].totalValue - this.stocks[i].purchasePrice * this.stocks[i].quantity).toFixed(2));
    }
  }

  onClick3() {
    for (let i = 0; i < this.stocks.length; i++) {
      this.stocks[i].change = 1.2;
      this.stocks[i].currentPrice = +((this.stocks[i].currentPriceOrig * this.stocks[i].change).toFixed(2));
      this.stocks[i].totalValue = +((this.stocks[i].currentPrice * this.stocks[i].quantity).toFixed(2));
      this.stocks[i].gainLoss = +((this.stocks[i].totalValue - this.stocks[i].purchasePrice * this.stocks[i].quantity).toFixed(2));
    }
  }

  onClick4() {
    for (let i = 0; i < this.stocks.length; i++) {
      this.stocks[i].change = 0.8;
      this.stocks[i].currentPrice = +((this.stocks[i].currentPriceOrig * this.stocks[i].change).toFixed(2));
      this.stocks[i].totalValue = +((this.stocks[i].currentPrice * this.stocks[i].quantity).toFixed(2));
      this.stocks[i].gainLoss = +((this.stocks[i].totalValue - this.stocks[i].purchasePrice * this.stocks[i].quantity).toFixed(2));
    }
  }

  onClick5() {
    for (let i = 0; i < this.stocks.length; i++) {
      this.stocks[i].change = 2.0;
      this.stocks[i].currentPrice = +((this.stocks[i].currentPriceOrig * this.stocks[i].change).toFixed(2));
      this.stocks[i].totalValue = +((this.stocks[i].currentPrice * this.stocks[i].quantity).toFixed(2));
      this.stocks[i].gainLoss = +((this.stocks[i].totalValue - this.stocks[i].purchasePrice * this.stocks[i].quantity).toFixed(2));
    }
  }
}

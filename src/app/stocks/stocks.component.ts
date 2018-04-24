import { Component, OnInit, TemplateRef } from '@angular/core';
// import {Stock, stock} from '../../models/stock';
import {StockService} from '../stock.service';



@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks = [];
  cash = 100;

  constructor(private _stockService: StockService) { }

  ngOnInit() {
    this._stockService.getStocks()
      .subscribe(data => this.stocks = data);

  }

  sellStock(symbol, purchaseDate) {
    for (let i = 0; i < this.stocks.length; i++) {
      if (this.stocks[i].symbol === symbol && this.stocks[i].purchaseDate === purchaseDate && this.stocks[i].quantity !== 0) {
        this.cash += +((this.stocks[i].totalValue - this.stocks[i].sellCost).toFixed(2));
        this.stocks[i].quantity = 0;
      }
    }
  }

  /*getDate() {
    let today = new Date();
    let dd = today.getDate();
    const mm = today.getMonth() + 1; // January is 0!

    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if ( mm < 10 ) {
      mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;
    return today;
  }*/

  buyStock(symbol, amount) {
    const stocksLength = this.stocks.length;
    let breakLoop = false;
    let loopControl = 0;
    while (breakLoop === false && loopControl < stocksLength) {
      if (this.stocks[loopControl].symbol === symbol) {
        const newStock = {
          'company': this.stocks[loopControl].company,
          'symbol': symbol,
          'exchange': this.stocks[loopControl].exchange,
          'purchasePrice': this.stocks[loopControl].currentPrice,
          'currentPrice': this.stocks[loopControl].currentPrice,
          'currentPriceOrig': this.stocks[loopControl].currentPrice,
          'purchaseDate': 'Placeholder',
          'sellDate': 'N/A',
          'quantity': amount,
          'change': this.stocks[loopControl].change,
          'totalValue': +((this.stocks[loopControl].currentPrice * amount).toFixed(2)),
          'gainLoss': 0,
          'sellCost': 0
        };
        if (newStock.totalValue <= this.cash) {
          this.stocks.push(newStock);
          this.cash += -(newStock.totalValue);
        }
        breakLoop = true;
      }
      loopControl += 1;
    }
  }

  onClick0() {
    for (let i = 0; i < this.stocks.length; i++) {
      this.stocks[i].change = 1;
      this.stocks[i].currentPrice = +((this.stocks[i].currentPriceOrig * this.stocks[i].change).toFixed(2));
      this.stocks[i].totalValue = +((this.stocks[i].currentPrice * this.stocks[i].quantity).toFixed(2));
      if (this.stocks[i].totalValue > 25000) {
        const balance = this.stocks[i].totalValue - 25000;
        this.stocks[i].sellCost = +(251.25 + (balance / 200)).toFixed(2);
      } else {
        this.stocks[i].sellCost = +(((this.stocks[i].totalValue / 100) + 1.25).toFixed(2));
      }
      if (this.stocks[i].sellCost < 26.25) {
        this.stocks[i].sellCost = 26.25;
      }
      this.stocks[i].gainLoss = +((this.stocks[i].totalValue - this.stocks[i].purchasePrice * this.stocks[i].quantity).toFixed(2));
    }
  }

  onClick1() {
    for (let i = 0; i < this.stocks.length; i++) {
      this.stocks[i].change = 1.1;
      this.stocks[i].currentPrice = +((this.stocks[i].currentPriceOrig * this.stocks[i].change).toFixed(2));
      this.stocks[i].totalValue = +((this.stocks[i].currentPrice * this.stocks[i].quantity).toFixed(2));
      if (this.stocks[i].totalValue > 25000) {
        const balance = this.stocks[i].totalValue - 25000;
        this.stocks[i].sellCost = +(251.25 + (balance / 200)).toFixed(2);
      } else {
        this.stocks[i].sellCost = +(((this.stocks[i].totalValue / 100) + 1.25).toFixed(2));
      }
      if (this.stocks[i].sellCost < 26.25) {
        this.stocks[i].sellCost = 26.25;
      }
      this.stocks[i].gainLoss = +((this.stocks[i].totalValue - this.stocks[i].purchasePrice * this.stocks[i].quantity).toFixed(2));
    }
  }

  onClick2() {
    for (let i = 0; i < this.stocks.length; i++) {
      this.stocks[i].change = 0.9;
      this.stocks[i].currentPrice = +((this.stocks[i].currentPriceOrig * this.stocks[i].change).toFixed(2));
      this.stocks[i].totalValue = +((this.stocks[i].currentPrice * this.stocks[i].quantity).toFixed(2));
      if (this.stocks[i].totalValue > 25000) {
        const balance = this.stocks[i].totalValue - 25000;
        this.stocks[i].sellCost = +(251.25 + (balance / 200)).toFixed(2);
      } else {
        this.stocks[i].sellCost = +(((this.stocks[i].totalValue / 100) + 1.25).toFixed(2));
      }
      if (this.stocks[i].sellCost < 26.25) {
        this.stocks[i].sellCost = 26.25;
      }
      this.stocks[i].gainLoss = +((this.stocks[i].totalValue - this.stocks[i].purchasePrice * this.stocks[i].quantity).toFixed(2));
    }
  }

  onClick3() {
    for (let i = 0; i < this.stocks.length; i++) {
      this.stocks[i].change = 1.2;
      this.stocks[i].currentPrice = +((this.stocks[i].currentPriceOrig * this.stocks[i].change).toFixed(2));
      this.stocks[i].totalValue = +((this.stocks[i].currentPrice * this.stocks[i].quantity).toFixed(2));
      if (this.stocks[i].totalValue > 25000) {
        const balance = this.stocks[i].totalValue - 25000;
        this.stocks[i].sellCost = +(251.25 + (balance / 200)).toFixed(2);
      } else {
        this.stocks[i].sellCost = +(((this.stocks[i].totalValue / 100) + 1.25).toFixed(2));
      }
      if (this.stocks[i].sellCost < 26.25) {
        this.stocks[i].sellCost = 26.25;
      }
      this.stocks[i].gainLoss = +((this.stocks[i].totalValue - this.stocks[i].purchasePrice * this.stocks[i].quantity).toFixed(2));
    }
  }

  onClick4() {
    for (let i = 0; i < this.stocks.length; i++) {
      this.stocks[i].change = 0.8;
      this.stocks[i].currentPrice = +((this.stocks[i].currentPriceOrig * this.stocks[i].change).toFixed(2));
      this.stocks[i].totalValue = +((this.stocks[i].currentPrice * this.stocks[i].quantity).toFixed(2));
      if (this.stocks[i].totalValue > 25000) {
        const balance = this.stocks[i].totalValue - 25000;
        this.stocks[i].sellCost = +(251.25 + (balance / 200)).toFixed(2);
      } else {
        this.stocks[i].sellCost = +(((this.stocks[i].totalValue / 100) + 1.25).toFixed(2));
      }
      if (this.stocks[i].sellCost < 26.25) {
        this.stocks[i].sellCost = 26.25;
      }
      this.stocks[i].gainLoss = +((this.stocks[i].totalValue - this.stocks[i].purchasePrice * this.stocks[i].quantity).toFixed(2));
    }
  }

  onClick5() {
    for (let i = 0; i < this.stocks.length; i++) {
      this.stocks[i].change = 2.0;
      this.stocks[i].currentPrice = +((this.stocks[i].currentPriceOrig * this.stocks[i].change).toFixed(2));
      this.stocks[i].totalValue = +((this.stocks[i].currentPrice * this.stocks[i].quantity).toFixed(2));
      if (this.stocks[i].totalValue > 25000) {
        const balance = this.stocks[i].totalValue - 25000;
        this.stocks[i].sellCost = +(251.25 + (balance / 200)).toFixed(2);
      } else {
        this.stocks[i].sellCost = +(((this.stocks[i].totalValue / 100) + 1.25).toFixed(2));
      }
      if (this.stocks[i].sellCost < 26.25) {
        this.stocks[i].sellCost = 26.25;
      }
      this.stocks[i].gainLoss = +((this.stocks[i].totalValue - this.stocks[i].purchasePrice * this.stocks[i].quantity).toFixed(2));
    }
  }
}

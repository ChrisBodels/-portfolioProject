import { Component, OnInit } from '@angular/core';
import {Stock, stock} from '../../models/stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stock: Stock = {
   // need to add importing of JSON data here.
    
  }

  constructor() { }

  ngOnInit() {
  }

}

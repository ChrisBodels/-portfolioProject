import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStock} from '../models/stock';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StockService {

  // private _url = 'https://scraper601.herokuapp.com/scrape/test?n=1';

  // can use this to get data from static file if there is a problem with the above URL
  private _url = '/assets/Data/data.json'

  constructor(private http: HttpClient) { }

  getStocks(): Observable<IStock[]> {
    return this.http.get<IStock[]>(this._url);
  }

}

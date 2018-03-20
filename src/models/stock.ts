export interface IStock {
  n: number;
  currency_rates: object;
  euro: object;
  dollar: number;
  sterling: number;
  ise: object;
  exchange: string;
  currency: string;
  source: string;
  time: string;
  cached: boolean;
  details: string;
  data: object;
  company: string;
  symbol: string;
  price: string;
  change: string;
  pChg: string;
  ftse350: object;
  coinranking: object;
}






/*export class Stock {
  name: string;
  code: string;
  exchange: string;
  purchaseDate: string; // may want to change this type later
  sellDate: string;
  quantity: number;
  singlePurchasePrice: number;
  totalPurchasePrice: number;
  currentSingleValue: number;
  currentTotalValue: number;
}*/

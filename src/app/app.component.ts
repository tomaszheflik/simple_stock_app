import { Component } from '@angular/core';
import { StocksService, StockInterface } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Stock Tracker';
  stocks: Array<StockInterface>;

    constructor(service: StocksService) {
      service.load(['APPL']).subscribe(stocks =>{
        this.stocks = stocks;
      });
    }
}

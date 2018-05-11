import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  code: string;
  count = 200;

  priceQuote: PriceQuote = new PriceQuote('', 0);

  stockHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
  buyHandler(event) {
    this.priceQuote = event;
  }

}

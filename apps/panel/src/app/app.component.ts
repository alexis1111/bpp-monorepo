import { Component } from '@angular/core';

import { exampleProducts } from '@bpp-monorepo/products';

@Component({
  selector: 'bpp-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bridge';
  products = exampleProducts;
}

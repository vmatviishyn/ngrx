import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise: Pizza;
  toppings$: Observable<Topping>;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadToppings());
    this.pizza$ = this.store.select(fromStore.getSelectedPizza);
    this.toppings$ = this.store.select(fromStore.getAllToppings)
  }

  onSelect(event: number[]) {
    // let toppings;
    // if (this.toppings && this.toppings.length) {
    //   toppings = event.map(id =>
    //     this.toppings.find(topping => topping.id === id)
    //   );
    // } else {
    //   toppings = this.pizza.toppings;
    // }
    // this.visualise = { ...this.pizza, toppings };
  }

  onCreate(event: Pizza) {
    // this.pizzaService.createPizza(event).subscribe(pizza => {
    //   this.router.navigate([`/products/${pizza.id}`]);
    // });
  }

  onUpdate(event: Pizza) {
    // this.pizzaService.updatePizza(event).subscribe(() => {
    //   this.router.navigate([`/products`]);
    // });
  }

  onRemove(event: Pizza) {
    // const remove = window.confirm('Are you sure?');
    // if (remove) {
    //   this.pizzaService.removePizza(event).subscribe(() => {
    //     this.router.navigate([`/products`]);
    //   });
    // }
  }
}

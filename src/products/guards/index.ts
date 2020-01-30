import { PizzasGuard } from './pizzas.guard';
import { ToppingsGuard } from './toppings.guard';
import { PizzaExistGuard } from './pizza-exists.guard';

export const guards: any[] = [PizzasGuard, PizzaExistGuard, ToppingsGuard];

export * from './pizzas.guard';
export * from './toppings.guard';
export * from './pizza-exists.guard';
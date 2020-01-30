import { PizzasGuard } from './pizzas.guard';
import { PizzaExistGuard } from './pizza-exists.guard';

export const guards: any[] = [PizzasGuard, PizzaExistGuard];

export * from './pizzas.guard';
export * from './pizza-exists.guard';
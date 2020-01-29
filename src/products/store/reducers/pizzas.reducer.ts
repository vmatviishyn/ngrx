import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from 'src/products/models/pizza.model';

export interface PizzaState {
    entities: { [id: number]: Pizza },
    loaded: boolean,
    loading: boolean,
}

export const initialState: PizzaState = {
    entities: {},
    loaded: false,
    loading: false,
};

export function reducer(
    state = initialState,
    action: fromPizzas.PizzasAction
): PizzaState {

    switch (action.type) {
        // load pizza cases
        case fromPizzas.LOAD_PIZZAS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            const pizzas = action.payload;
            const entities = pizzas.reduce((entities: {[id: number]: Pizza}, pizza: Pizza) => {
                return {
                    ...entities,
                    [pizza.id]: pizza
                };
            }, {
                ...state.entities
            });

            return {
                ...state,
                loading: false,
                loaded: true,
                entities,
            };
        }
        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

        // create or update pizza cases
        case fromPizzas.UPDATE_PIZZA:
        case fromPizzas.CREATE_PIZZA: {
            return {
                ...state,
                loading: true
            };
        }
        case fromPizzas.UPDATE_PIZZA_SUCCESS:
        case fromPizzas.CREATE_PIZZA_SUCCESS: {
            const pizza = action.payload;
            const entities = {
                ...state.entities,
                [pizza.id]: pizza,
            };

            return {
                ...state,
                loading: false,
                loaded: true,
                entities,
            };
        }
        case fromPizzas.UPDATE_PIZZA_FAIL:
        case fromPizzas.CREATE_PIZZA_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

        // remove pizza cases
        case fromPizzas.REMOVE_PIZZA: {
            return {
                ...state,
                loading: true
            };
        }
        case fromPizzas.REMOVE_PIZZA_SUCCESS: {
            const pizza = action.payload;
            const { [pizza.id]: removed, ...entities } = state.entities;

            return {
                ...state,
                loading: false,
                loaded: true,
                entities,
            };
        }
        case fromPizzas.REMOVE_PIZZA_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;

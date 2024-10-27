// CartContext.js
import React, { createContext, useReducer, useContext } from "react";

// Initial cart state
const initialState = {
	cart: [],
	total: 0,
	count: 0,
};

// Actions
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";

// Reducer function
function cartReducer(state, action) {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, action.payload],
				total: state.total + action.payload.price,
				count: state.count + 1,
			};
		case REMOVE_FROM_CART: {
			const updatedCart = state.cart.filter(
				(item) => item.id !== action.payload.id
			);
			const updatedTotal = state.total - action.payload.price;
			return {
				...state,
				cart: updatedCart,
				total: updatedTotal,
				count: state.count - 1,
			};
		}
		case CLEAR_CART:
			return initialState;
		default:
			return state;
	}
}

// Context and Provider
const CartContext = createContext();

export function CartProvider({ children }) {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const addToCart = (item) => dispatch({ type: ADD_TO_CART, payload: item });
	const removeFromCart = (item) =>
		dispatch({ type: REMOVE_FROM_CART, payload: item });
	const clearCart = () => dispatch({ type: CLEAR_CART });

	return (
		<CartContext.Provider
			value={{ state, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
}

// Custom Hook
export const useCart = () => useContext(CartContext);

// import React, { createContext, useContext, useReducer } from "react";

// //Initial cart state
// const initialState = {
// 	cart: [],
// 	total: 0,
// };

// //Actions
// const ADD_TO_CART = "ADD_TO_CART";
// const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// const CLEAR_CART = "CLEAR_CART";

// //Reducer function
// function cartReducer(state, action) {
// 	switch (action.type) {
// 		case ADD_TO_CART: {
// 			return {
// 				...state,
// 				cart: [...state.cart, action.payload],
// 				total: state.total + action.payload.price,
// 			};
// 		}
// 		case REMOVE_FROM_CART: {
// 			const updatedCart = state.cart.filter(
// 				(item) => item.id !== action.payload.id
// 			);
// 			const updatedTotal = state.total - action.payload.price;
// 			return {
// 				...state,
// 				cart: updatedCart,
// 				total: updatedTotal,
// 			};
// 		}
// 		case CLEAR_CART: {
// 			return initialState;
// 		}
// 		default:
// 			return state;
// 	}
// }

// //Context and Provide
// const CartContext = createContext();

// export function CartProvider({ children }) {
// 	const [state, dispatch] = useReducer(cartReducer, initialState);

// 	const addToCart = (item) => dispatch({ type: ADD_TO_CART, payload: item });
// 	const removeFromCart = (item) =>
// 		dispatch({ type: REMOVE_FROM_CART, payload: item });
// 	const clearCart = () => dispatch({ type: CLEAR_CART });

// 	return (
// 		<CartContext.Provider
// 			value={{ state, addToCart, removeFromCart, clearCart }}
// 		>
// 			{children}
// 		</CartContext.Provider>
// 	);
// }

// //Custom hook
// export const useCart = () => useContext(CartContext);

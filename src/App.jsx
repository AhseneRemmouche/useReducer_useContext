// App.js
import React from "react";
import { CartProvider } from "./CartContext";
import ItemList from "./ItemList";
import Cart from "./Cart";

const App = () => {
	return (
		<CartProvider>
			<div>
				<h1>Checkout Page</h1>
				<ItemList />
				<Cart />
			</div>
		</CartProvider>
	);
};

export default App;

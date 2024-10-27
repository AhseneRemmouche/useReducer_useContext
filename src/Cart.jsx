// Cart.js
import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
	const { state, removeFromCart, clearCart } = useCart();
	const { cart, total, count } = state;

	return (
		<div>
			<h2>Shopping Cart</h2>
			{count}
			{cart.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				<ul>
					{cart.map((item) => (
						<li key={item.id}>
							{item.name} - ${item.price}
							<button onClick={() => removeFromCart(item)}>Remove</button>
						</li>
					))}
				</ul>
			)}
			<h3>Total: ${total.toFixed(2)}</h3>
			<button onClick={clearCart}>Clear Cart</button>
		</div>
	);
};

export default Cart;

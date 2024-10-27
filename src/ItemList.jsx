// ItemList.js
import React from "react";
import { items } from "./data";
import { useCart } from "./CartContext";

const ItemList = () => {
	const { addToCart } = useCart();

	return (
		<div>
			<h2>Available Items</h2>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						{item.name} - ${item.price}
						<button onClick={() => addToCart(item)}>Add to Cart</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ItemList;

// import React from "react";
// import { items } from "./data";
// import { useCart } from "./CartContext";

// function ItemList() {
// 	const { addToCart } = useCart();

// 	return (
// 		<div>
// 			<h2>Availible Items</h2>
// 			<ul>
// 				{items.map((item) => (
// 					<li key={item.id}>
// 						{item.name} - {item.price}
// 						<button onClick={() => addToCart(item)}>Add to Cart</button>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default ItemList;

import { dummyProducts } from './js/data.js';
import { productCard } from './js/ui.js';

let productsContainer = document.querySelector('.products');
let fragment = document.createDocumentFragment();

dummyProducts.forEach((product) => {
	let productCardElement = productCard(product);
	fragment.appendChild(productCardElement);
});

productsContainer.appendChild(fragment);

import { createElem } from './utils.js';

class ShoppingCart {
	constructor() {
		this.cart = { products: [] };
		this.sortvalue = 'asc';
	}
	addToCart(product) {
		const item = this.cart.products.find((item) => item.id === product.id);
		if (item) {
			item.quantity += 1;
		} else {
			product.quantity = 1;
			this.cart.products.push(product);
		}
		this.sortCart(this.sortvalue);
		// this.renderCart();
	}

	removeFromCart(productId) {
		this.cart.products = this.cart.products.filter((item) => item.id !== productId);
		// this.renderCart();
	}

	totalPrice() {
		return this.cart.products.reduce((total, item) => total + item.price * item.quantity, 0);
	}

	averagePrice() {
		if (this.cart.products.length === 0) return 0;
		return Math.ceil(this.totalPrice() / this.cart.products.length);
	}

	filterProducts(priceThreshold) {
		return this.cart.products.filter((item) => item.price <= priceThreshold);
	}

	sortCart(order = 'asc') {
		this.cart.products.sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price));
		// this.renderCart();
	}

	clearCart() {
		this.cart.products = [];
		this.renderCart();
	}

	renderCart() {
		const cartDiv = document.querySelector('.cartProducts');
		cartDiv.innerHTML = '';

		let cartbuttons = document.querySelector('.cart-btns');
		if (this.cart.products.length === 0) {
			cartbuttons.classList.add('hidden');
			cartDiv.innerText = 'Cart is Empty';
			return;
		} else {
			if (cartbuttons.classList.contains('hidden')) {
				cartbuttons.classList.remove('hidden');
			}
		}

		this.cart.products.forEach((item) => {
			const detailDiv = createElem('div', { class: 'detail' }, '', [
				createElem('div', {}, item.title),
				createElem('div', {}, '', [
					createElem('span', {}, `Rs ${item.price}`),
					// document.createTextNode(' x '),
					createElem('span', { class: 'noOfItems' }, ` x ${item.quantity}`),
				]),
			]);

			const removeButton = createElem('button', { class: 'delete-button' }, 'Remove');
			removeButton.onclick = () => this.removeFromCart(item.id);
			const productDiv = createElem('div', { class: 'cart-product' }, '', [
				detailDiv,
				createElem('img', { src: item.image, alt: item.title }),
				removeButton,
			]);

			// const removeButton = createElem('img', { class: 'close-icon', src: './assets/wrong.svg', alt: 'DeleteIcon' });
			// removeButton.onclick = () => this.deleteFromCart(item.id);

			cartDiv.appendChild(productDiv);
			// cartDiv.appendChild(removeButton);
		});

		const totalPriceDiv = createElem('div', { class: 'total-price' }, '', [
			createElem('p', {}, 'Total Price'),
			createElem('span', {}, this.totalPrice()),
		]);
		const averagePriceDiv = createElem('div', { class: 'total-price' }, '', [
			createElem('p', {}, 'Average Price'),
			createElem('span', {}, this.averagePrice()),
		]);
		const prices = createElem('div', { class: 'prices' }, '', [totalPriceDiv, averagePriceDiv]);

		cartDiv.appendChild(prices);
	}
}

const shoppingCart = new ShoppingCart();

export function addProductToCart(product) {
	shoppingCart.addToCart(product);
}

export function removeProductFromCart(productId) {
	shoppingCart.removeFromCart(productId);
}

export function sortCart(order) {
	shoppingCart.sortCart(order);
}

export function clearCart() {
	shoppingCart.clearCart();
}

let cart = document.querySelector('.cart');
export function toggleCart() {
	cart.classList.toggle('hidden');
}

let cartButton = document.querySelector('.cart-icon');
let closeButton = document.querySelector('.close-icon');

cartButton.onclick = () => {
	toggleCart();
	shoppingCart.renderCart();
};

closeButton.onclick = toggleCart;
// cart.onclick =  toggleCart;

let sortButton = document.querySelector('.sort-btn');
sortButton.oninput = (e) => {
	shoppingCart.sortCart(e.target.value);

	shoppingCart.sortvalue = e.target.value;
};

let clearCartButton = document.querySelector('.clear-cart');
clearCartButton.onclick = () => {
	toggleCart();
	shoppingCart.clearCart();
};

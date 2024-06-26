import { addProductToCart, toggleCart } from './shopping-cart.js';
import { createElem } from './utils.js';

export function productCard(product) {
	const img = createElem('img', {
		src: product.image,
		alt: product.title,
	});
	const imgWrapper = createElem('div', { class: 'imgWrapper' }, '', [img]);
	const title = createElem('p', { class: 'title line-clamp-1' }, product.title);

	const discountPrice = createElem('span', { class: 'discount-price' }, 'Rs\u00A0', [
		createElem('span', {}, product.price),
	]);
	const price = createElem('span', { class: 'price' }, product.compare_at_price);

	const addToCartBtn = createElem('button', { class: 'primary-btn' }, 'Add to Cart');
	addToCartBtn.addEventListener('click', () => {
		addProductToCart(product);
		// toggleCart();
	});

	const nameDetails = createElem('div', { class: 'name-details' }, '', [title]);
	const priceDetails = createElem('div', { class: 'price-details' }, '', [discountPrice, price]);
	const productDetails = createElem('div', { class: 'product-details' }, '', [nameDetails, priceDetails]);
	const badge = createElem('span', { class: 'badge' }, product.badge_text);

	const productCard = createElem('div', { class: 'product-card' }, '', [
		imgWrapper,
		productDetails,
		addToCartBtn,
		product.badge_text ? badge : undefined,
	]);

	return productCard;
}

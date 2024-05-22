export function createElem(tag, attributes = {}, textContent = '', children = []) {
	const elem = document.createElement(tag);

	// Set attributes
	for (const attr in attributes) {
		elem.setAttribute(attr, attributes[attr]);
	}

	// Set text content
	elem.textContent = textContent;

	// Append children
	children.forEach((child) => {
		!!child && elem.appendChild(child);
	});

	return elem;
}

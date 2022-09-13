const main = () => {
	// eslint-disable-next-line no-undef
	const form = document.getElementById('prices-form');

	form.addEventListener('submit', handleFormSubmit);
};

const handleFormSubmit = (e) => {
	e.preventDefault();
	console.log('hello');
};

main();

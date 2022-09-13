const main = () => {
	// eslint-disable-next-line no-undef
	const form = document.getElementById('prices-form');

	form.addEventListener('submit', handleFormSubmit);
};

const handleFormSubmit = (e) => {
	e.preventDefault();
	const textArea = document.getElementById('prices');

	const separatedPrices = textArea.value.split('\n');

	const pairs = separatedPrices.map((pair) => pair.split(' '));

	for (let i = 0; i < pairs.length; i++) {
		pairs[i] = pairs[i].map((string) => parseInt(string));
	}

	const result = pairs.map(([price, percent]) => {
		const convertedPercent = percent / 100;
		const discountAmount = price * convertedPercent;
		const salePrice = price - discountAmount;

		return {
			percent,
			discountAmount,
			salePrice,
			regularPrice: price,
		};
	});

	appendToOutput(result);
};

const appendToOutput = (result) => {
	const output = document.querySelector('#output table');

	const headerRow = document.createElement('tr');

	const headers = createTableHeaders();
	const tableData = createTableData(result);

	headers.forEach((header) => headerRow.append(header));

	output.append(headerRow);
	tableData.forEach((table) => output.append(table));
};

const createTableHeaders = () => {
	const regPriceHeader = document.createElement('th');
	regPriceHeader.innerText = 'Regular Price';

	const percentHeader = document.createElement('th');
	percentHeader.innerText = 'Percent';

	const discountAmountHeader = document.createElement('th');
	discountAmountHeader.innerText = 'Discount Amount';

	const salePriceHeader = document.createElement('th');
	salePriceHeader.innerText = 'Sale Price';

	return [regPriceHeader, percentHeader, discountAmountHeader, salePriceHeader];
};

const createTableData = (result) => {
	const data = result.map((price) => {
		console.log(price);
		const row = document.createElement('tr');

		const discountAmount = document.createElement('td');
		discountAmount.innerText = price.discountAmount;
		const regPrice = document.createElement('td');
		regPrice.innerText = price.regularPrice;

		const percent = document.createElement('td');
		percent.innerText = price.percent;
		const salePrice = document.createElement('td');
		salePrice.innerText = price.salePrice;

		row.append(regPrice, percent, discountAmount, salePrice);

		return row;
	});

	return data;
};

main();

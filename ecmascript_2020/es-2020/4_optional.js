const bill1 = {
	bank: {
		name: 'My Bank',
		amount: {
			value: 1000,
			currency: 'RUB',
		},
	},
};

const bill2 = {
	bank: { },
};

function getBillValueFrom(bill) {
	// return bill.bank.amount.value;
	// return (bill && bill.bank && bill.bank.amount && bill.bank.amount.value)
	// 	? bill.bank.amount.value
	// 	: undefined;
	return bill?.bank?.amount?.value;
}

console.log(getBillValueFrom(bill1));
console.log(getBillValueFrom(bill2));

/*
	In Browser's console of ./index.html

	>document.querySelector('h1').textContent;
	<"My Heading"

	>document.querySelector('h2').textContent;
	<VM140:1 Uncaught TypeError: Cannot read property 'textContent' of null
	<    at <anonymous>:1:29
	
	>document.querySelector('h2')?.textContent;
	<undefined
*/

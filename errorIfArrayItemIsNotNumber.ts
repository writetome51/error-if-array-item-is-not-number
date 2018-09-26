// To be called inside a loop that iterates through an array of numbers:

export function errorIfArrayItemIsNotNumber(item): void{
	if (typeof item !== 'number'){
		throw new Error('the passed array contains value that is not a number.');
	}
}
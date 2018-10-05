import {isFiniteNumber} from 'basic-data-handling/isFiniteNumber';
import {not} from '@writetome51/not'

// To be called inside a loop that iterates through an array of numbers:

export function errorIfArrayItemIsNotNumber(item): void{
	if (not(isFiniteNumber(item))){
		throw new Error('the array contains a value that is not a number.');
	}
}
"use strict";
// To be called inside a loop that iterates through an array of numbers:
Object.defineProperty(exports, "__esModule", { value: true });
function errorIfArrayItemIsNotNumber(item) {
    if (typeof item !== 'number') {
        throw new Error('the passed array contains value that is not a number.');
    }
}
exports.errorIfArrayItemIsNotNumber = errorIfArrayItemIsNotNumber;

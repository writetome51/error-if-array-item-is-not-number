"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isFiniteNumber_1 = require("basic-data-handling/isFiniteNumber");
var not_1 = require("@writetome51/not");
// To be called inside a loop that iterates through an array of numbers:
function errorIfArrayItemIsNotNumber(item) {
    if (not_1.not(isFiniteNumber_1.isFiniteNumber(item))) {
        throw new Error('the array contains a value that is not a number.');
    }
}
exports.errorIfArrayItemIsNotNumber = errorIfArrayItemIsNotNumber;

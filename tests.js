"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfArrayItemIsNotNumber_1 = require("./errorIfArrayItemIsNotNumber");
// Test 1: make sure it catches a string containing a number:
var arr = [-10.0234, 2, 3, 4, 5, 6, 7, 8, 9, 10, '11', 12, 13, 14, 15, 16];
var errorTriggered = false;
try {
    var i = -1;
    while (++i < arr.length) {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(arr[i]);
    }
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: make sure it doesn't allow Infinity to be considered an actual number:
errorTriggered = false;
arr = [-10.0234, 2, 3, 4, 5, 6, 7, 8, 9, 10, Infinity, 12, 13, 14, 15, 16];
try {
    var i = -1;
    while (++i < arr.length) {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(arr[i]);
    }
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3: Make sure it catches undefined:
errorTriggered = false;
arr = [-10.0234, 2, 3, 4, 5, 6, 7, 8, 9, 10, undefined, 12, 13, 14, 15, 16];
try {
    var i = -1;
    while (++i < arr.length) {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(arr[i]);
    }
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4: Make sure it catches NaN:
errorTriggered = false;
arr = [-10.0234, 2, 3, 4, 5, 6, 7, 8, 9, 10, NaN, 12, 13, 14, 15, 16];
try {
    var i = -1;
    while (++i < arr.length) {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(arr[i]);
    }
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5: Make sure it catches NEGATIVE_INFINITY:
errorTriggered = false;
arr = [-10.0234, 2, 3, 4, 5, 6, 7, 8, 9, 10, Number.NEGATIVE_INFINITY, 12, 13, 14, 15, 16];
try {
    var i = -1;
    while (++i < arr.length) {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(arr[i]);
    }
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6: Make sure it catches POSITIVE_INFINITY:
errorTriggered = false;
arr = [-10.0234, 2, 3, 4, 5, 6, 7, 8, 9, 10, Number.POSITIVE_INFINITY, 12, 13, 14, 15, 16];
try {
    var i = -1;
    while (++i < arr.length) {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(arr[i]);
    }
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7: Make sure it catches a boolean:
errorTriggered = false;
arr = [-10.0234, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, 12, 13, 14, 15, 16];
try {
    var i = -1;
    while (++i < arr.length) {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(arr[i]);
    }
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 failed');
// Test 8: Make sure it catches null:
errorTriggered = false;
arr = [-10.0234, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 12, 13, 14, 15, 16];
try {
    var i = -1;
    while (++i < arr.length) {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(arr[i]);
    }
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 failed');
// Test 9: Make sure it catches array:
errorTriggered = false;
arr = [-10.0234, 2, 3, 4, 5, 6, 7, 8, 9, 10, [], 12, 13, 14, 15, 16];
try {
    var i = -1;
    while (++i < arr.length) {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(arr[i]);
    }
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9 passed');
else
    console.log('test 9 failed');

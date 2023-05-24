"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var last = function (arr) {
    if (arr.length > 0)
        return arr[arr.length - 1];
    return undefined;
};
var prepend = function (arr, item) {
    return __spreadArray([item], arr, true);
};
var mix = function (arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
};
console.log(mix([1, 'hoya'], [5, 3]));
var count = function (arr) {
    return arr.length;
};
var findIndex = function (arr, item) {
    var index = arr.indexOf(item);
    return index !== -1 ? index : null;
};
console.log(findIndex([1, 2, 3, 'hoya'], 2));
var SliceFunc = function (arr, startIndex, endIndex) {
    return typeof endIndex === 'number' ? arr.slice(startIndex, endIndex) : undefined;
};

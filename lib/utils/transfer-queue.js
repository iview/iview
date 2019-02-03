"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var transferIndex = 0;

function transferIncrease() {
    exports.transferIndex = transferIndex += 1;
}

exports.transferIndex = transferIndex;
exports.transferIncrease = transferIncrease;
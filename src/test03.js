"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var AbLocalStorage = (function () {
        function AbLocalStorage() {
            this.storage = {};
        }
        AbLocalStorage.prototype.setItem = function (key, value) {
            this.storage[key] = value;
        };
        AbLocalStorage.prototype.getItem = function (key) {
            return this.storage[key];
        };
        AbLocalStorage.prototype.clearItem = function (key) {
            delete this.storage[key];
        };
        AbLocalStorage.prototype.clear = function () {
            this.storage = {};
        };
        return AbLocalStorage;
    }());
    var LocalStorage = (function (_super) {
        __extends(LocalStorage, _super);
        function LocalStorage() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.storage = {};
            return _this;
        }
        LocalStorage.prototype.setItem = function (key, value) {
            this.storage[key] = value;
            _super.prototype.setItem.call(this, key, value);
        };
        LocalStorage.prototype.getItem = function (key) {
            return _super.prototype.getItem.call(this, key);
        };
        LocalStorage.prototype.clearItem = function (key) {
            delete this.storage[key];
            _super.prototype.clearItem.call(this, key);
        };
        LocalStorage.prototype.clear = function () {
            this.storage = {};
            _super.prototype.clear.call(this);
        };
        return LocalStorage;
    }(AbLocalStorage));
    var localStorage_1 = new LocalStorage();
    localStorage_1.setItem('nico', '30');
    localStorage_1.setItem('nico', '30');
    var GeolocationAPI = (function () {
        function GeolocationAPI() {
        }
        GeolocationAPI.prototype.getCurrentPosition = function (success) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success);
            }
            else {
                console.log("Geolocation is not supported by this browser.");
            }
        };
        GeolocationAPI.prototype.watchPosition = function (success, error, options) {
            if (navigator.geolocation) {
                return navigator.geolocation.watchPosition(success);
            }
            else {
                console.log("Geolocation is not supported by this browser.");
                null;
            }
        };
        GeolocationAPI.prototype.clearWatch = function (id) {
            navigator.geolocation.clearWatch(id);
        };
        return GeolocationAPI;
    }());
    var geolocation = new GeolocationAPI();
}

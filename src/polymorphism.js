"use strict";
{
    var LocalStorage = (function () {
        function LocalStorage() {
            this.storage = {};
        }
        LocalStorage.prototype.set = function (key, value) {
            this.storage[key] = value;
        };
        LocalStorage.prototype.remove = function (key) {
            delete this.storage[key];
        };
        LocalStorage.prototype.get = function (key) {
            return this.storage[key];
        };
        LocalStorage.prototype.clear = function () {
            this.storage = {};
        };
        return LocalStorage;
    }());
    var stringsStorage = new LocalStorage();
    stringsStorage.get('key');
    stringsStorage.set('hello', 'hello my bro');
    var booleanStorage = new LocalStorage();
    booleanStorage.get('xxx');
    booleanStorage.set('hello', true);
}

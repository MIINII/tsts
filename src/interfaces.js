"use strict";
{
    var Player = (function () {
        function Player(firstName, lastName, health) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.health = health;
        }
        Player.prototype.fullName = function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        };
        Player.prototype.sayHi = function (name) {
            return "Hello ".concat(name, ". My name is ").concat(this.fullName);
        };
        return Player;
    }());
}

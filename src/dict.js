"use strict";
{
    var Dict = (function () {
        function Dict() {
            this.words = {};
        }
        Dict.prototype.add = function (word) {
            if (this.words[word.term] === undefined) {
                this.words[word.term] = word.def;
            }
        };
        Dict.prototype.def = function (term) {
            return this.words[term];
        };
        Dict.hello = function () {
            return 'hello';
        };
        return Dict;
    }());
    var Word = (function () {
        function Word(term, def) {
            this.term = term;
            this.def = def;
        }
        return Word;
    }());
    var kimchi = new Word('kimchi', '한국의 음식');
    var dict = new Dict();
    dict.add(kimchi);
    dict.def('kimchi');
    Dict.hello();
}

"use strict";
{
    var Dict = (function () {
        function Dict() {
            this.word = {};
        }
        Dict.prototype.add = function (word) {
            if (this.word[word.term] === undefined) {
                this.word[word.term] = word.def;
            }
        };
        Dict.prototype.get = function (term) {
            if (this.word[term] === undefined) {
                return '❌단어가 없어용❌';
            }
            return "".concat(term, " \uD83D\uDC49 ").concat(this.word[term]);
        };
        Dict.prototype.delete = function (word) {
            if (this.word[word.term] !== undefined) {
                delete this.word[word.term];
            }
        };
        Dict.prototype.update = function (word, newDef) {
            if (this.word[word.term] !== undefined) {
                this.word[word.term] = newDef;
            }
        };
        Dict.prototype.showAll = function () {
            return Object.keys(this.word);
        };
        Dict.prototype.count = function () {
            return "\uB2E8\uC5B4\uC758 \uAC2F\uC218\uB294 \uCD1D ".concat(Word_1.length, "\uAC1C \uC785\uB2C8\uB2E4.");
        };
        Dict.prototype.upsert = function (word) {
            if (this.word[word.term] !== undefined) {
                this.word[word.term] = word.term;
            }
            else {
                this.add(word);
            }
        };
        Dict.prototype.exist = function (term) {
            if (term !== undefined) {
                return "\u274C'".concat(term, "'\uB294(\uC740) \uC5C6\uC5B4\uC6A9\u274C");
            }
            else {
                return "'".concat(term, "'\uB294(\uC740) \uC788\uC5B4\uC694");
            }
        };
        Dict.prototype.bulkAdd = function (words) {
            for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                var word = words_1[_i];
                this.add(word);
                this.update(word, word.def);
            }
        };
        Dict.prototype.bulkDelete = function (words) {
            for (var _i = 0, words_2 = words; _i < words_2.length; _i++) {
                var word = words_2[_i];
                delete this.word[word];
            }
        };
        return Dict;
    }());
    var Word_1 = (function () {
        function Word(term, def) {
            this.term = term;
            this.def = def;
        }
        return Word;
    }());
    var kimchi = new Word_1('김치', '한국의 음식');
    var stanley = new Word_1('스텐리', '텀블러');
    var alchol = new Word_1('술', '마시면 기분이 좋아진다');
    var dict = new Dict();
    dict.add(kimchi);
    dict.add(stanley);
    console.log(dict.get('김치'));
    dict.update(kimchi, '존맛');
    console.log(dict.get('김치'));
    console.log(dict.get('스텐리'));
    console.log(dict.count());
    dict.upsert(alchol);
    console.log(dict.showAll());
    console.log(dict.get('술'));
    console.log(dict.exist('하이'));
    dict.bulkAdd([
        { term: '김치', def: '대박이네~' },
        { term: '아파트', def: '비싸네~' },
    ]);
    console.log(dict.showAll());
    console.log(dict.get('김치'));
    dict.bulkDelete(['김치', '아파트']);
    console.log(dict.showAll());
}

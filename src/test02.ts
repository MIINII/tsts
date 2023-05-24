{type Words = {
  [key: string]: string;
};

class Dict {
  private word: Words;
  constructor() {
    this.word = {};
  }

  // 단어추가
  add(word: Word) {
    if (this.word[word.term] === undefined) {
      this.word[word.term] = word.def;
    }
  }

  // 단어 정의 리턴
  get(term: string) {
    if (this.word[term] === undefined) {
      return '❌단어가 없어용❌';
    }
    return `${term} 👉 ${this.word[term]}`;
  }

  // 단어 삭제
  delete(word: Word) {
    if (this.word[word.term] !== undefined) {
      delete this.word[word.term];
    }
  }

  // 단어 업데이트
  update(word: Word, newDef: string) {
    if (this.word[word.term] !== undefined) {
      this.word[word.term] = newDef;
    }
  }

  // 사전의 단어를 모두 보여줌
  showAll(): string[] {
    return Object.keys(this.word);
  }

  // 사전의 단어 갯수를 모두 보여줌
  count(): string | number {
    return `단어의 갯수는 총 ${Word.length}개 입니다.`;
  }

  // 단어를 업데이트 함. 존재하지 않을시. 이를 추가
  upsert(word: Word) {
    if (this.word[word.term] !== undefined) {
      this.word[word.term] = word.term;
    } else {
      this.add(word);
    }
  }

  // 해당 단어가 사전에 존재하는지 여부를 알려줌.
  exist(term: string): string {
    if (term !== undefined) {
      return `❌'${term}'는(은) 없어용❌`;
    } else {
      return `'${term}'는(은) 있어요`;
    }
  }

  // 여러개의 단어를 한번에 추가
  bulkAdd(words: Word[]) {
    for (const word of words) {
      this.add(word);
      this.update(word, word.def);
    }
  }

  // 여러개의 단어를 한번에 삭제
  bulkDelete(words: string[]) {
    for (const word of words) {
      delete this.word[word];
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

let kimchi = new Word('김치', '한국의 음식');
let stanley = new Word('스텐리', '텀블러');
let alchol = new Word('술', '마시면 기분이 좋아진다');
const dict = new Dict();

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
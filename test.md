# 변수 타입 생성 및 constructor() 생성자 메소드 정의

1.  Dict라는 이름의 클래스를 생성하시기 전에 제일 먼저 Dict 클래스에 들어갈 단어들 (여기서는 words라고 정했습니다) 객체
    에 대한 타입을 설정해주셔야 합니다.
2.  여기서 words 객체에 들어갈 타입을 Words라는 이름으로 지정해주었고, 인덱스 서명이라는 것을 통해 words 객체에 어떤 식
    으로 들어가는지 지정해주었습니다.
3.  여기서 key는 들어갈 단어를 의미하고 string 타입으로 지정하였습니다. 그리고 해당 단어에 대한 정의 또한 string으로 지
    정하였습니다.
    ![img](https://lh3.googleusercontent.com/AiyYLRIBS3Usy-3iiN7O0j4-qib10gLl07bqsHgvIecslefn51HGxF7EETanPI3drzk-TKVSamjJ0lLhorWobcYtZQfy6ycCe4Qtf053862vKu5skQ4R7AuK9PkVHlgqa-RCKs63brz84h27kI8AeS1Gs4-XaCYr9A0wPup9-BCLwS1C24nLDcEFBQ)

4.  `words` 객체는 함부로 바뀌면 안 되므로 외부 그 어디서든 접근을 못 하게끔 하는 것이 좋을 것 같습니다. 따라서 접근 제
    한자를 private을 사용하였습니다.
5.  자바스크립트 (혹은 타입스크립트)에서 클래스를 정의하기 위해서는 constructor() 생성자 메소드를 반드시 정의해야 합니다
    . 클래스 내부에서 words라는 객체에 접근할 수 있도록 this 연산자를 이용하여 빈 객체를 할당해주었습니다. 이것이 단어가
    들어갈 우리의 딕셔너리인 것입니다.

## 메소드 정의

- `add`메소드는 제일 먼저 해당 딕셔너리에 똑같은 단어가 있는지 알아봐야 합니다.
  - add의 경우 없는 경우에만 단어를 추가할 수 있으므로 if문에 ! 연산자를 써서 없는지 체크 후 없다면 파라미터로 제공한
    term을 key로 전달 후 파라미터로 전달한 definition을 값으로 대입합니다.
- `get` 메소드는 해당 단어만 반환만 하면 됩니다. 그렇기에 단순히 `this.words[term]`으로 값을 접근한 후 그것을 return 해
  주었습니다.
- `delete` 메소드는 해당 단어를 삭제해야 합니다. delete 연산자를 이용하면 해당 객체 요소를 삭제할 수 있습니다.
- `update` 메소드는 해당 단어를 새 정의로 업데이트 해야 합니다. add 메소드 로직과 동일합니다.
- `showAll()` 메소드가 좀 복잡했을텐데요...
  1. 먼저 `Object.keys()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)를
     이용하여 words 객체 안의 모든 키값들을 배열 형태로 가져옵니다.
  2. 두번째로 forEach() 메소드를 이용하여 모든 원소에 대해서 어떻게 할건지에 대한 로직을 설정합니다. 따라서 콜백 함수를
     파라미터로 전달해준 후, 각각의 단어(term)에 대해서 템플릿 리터럴을 이용하여 각각의 배열의 원소를 프린트합니다.
- `count` 메소드는 총 단어의 수를 return만 하면 됩니다. 여기서 키값들의 총 길이만 반환하면 되므로 length를 이용했습니다.

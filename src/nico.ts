{
  // 01.TS에서 Class사용하는방법 알아보기
  // 02.TS가 반복되는 많은 양의 코드들을 쓰지않도록 어떻게 막아주는지 알아보기

  class Player {
    constructor(private firstName: string, private lastName: string, public nickname: string) {}
  }

  const mini = new Player('jm', 'shin', 'mini');

  mini.nickname = 'miinii';

  // 추상클래스 -> 다른클래스에게 상속 가능한 클래스 / 새로운 인스턴스는 만들수 없음
  abstract class User {
    constructor(private firstName: string, private lastName: string, public nickname: string) {}
    getFullName() {
      return `${this.firstName} ${this.lastName}`; // 구현부분
    }

    // 추상 메소드 : call signature만 가지고 있음
    abstract getNickName(): void;
  }

  // AbPlayer : User를 상속받음 & User로 부터 getFullName 메소드를 상속받음
  class AbPlayer extends User {
    getNickName(): void {
      console.log(this.nickname);
    }
  }

  // const sha = new User -> err : 추상클래스의 인스턴스를 만들 수 없기때문
  const sha = new AbPlayer('sh', 'gwak', 'sha');

  console.log(sha.getFullName());
}

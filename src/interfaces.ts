{
  interface User {
    firstName: string;
    lastName: string;
    sayHi(name: string): string;
    fullName(): string;
  }

  interface Human {
    health: number;
  }

  // extends를 쓰면 JS로 바뀜 -> implements 사용
  class Player implements User, Human {
    // 상속받은 속성들은 public이 되어야한다~
    constructor(public firstName: string, public lastName: string, public health: number) {}
    
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string): string {
      return `Hello ${name}. My name is ${this.fullName}`;
    }
  }
}

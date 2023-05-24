type PlayerA = {
  firstName: string;
};

interface PlayerB {
  firstName: string;
}

class User implements PlayerB { //PlayerA 상속 가능
  constructor(public firstName: string) {}
}

{
  interface SStorage<T> {
    [key: string]: T;
  }

  // localStoarge API 만들어보기
  class LocalStorage<T> {
    // generic
    private storage: SStorage<T> = {};
    set(key: string, value: T) {
      this.storage[key] = value;
    }
    remove(key: string) {
      delete this.storage[key];
    }
    get(key: string): T {
      return this.storage[key];
    }
    clear() {
      this.storage = {};
    }
  }

  const stringsStorage = new LocalStorage<string>();

  stringsStorage.get('key');
  stringsStorage.set('hello', 'hello my bro');

  const booleanStorage = new LocalStorage<boolean>();

  booleanStorage.get('xxx');
  booleanStorage.set('hello', true);
}

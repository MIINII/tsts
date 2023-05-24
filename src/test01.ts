// 01. last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
type Last = <T>(arr: T[]) => T | undefined;

const last: Last = (arr) => {
  if (arr.length > 0) return arr[arr.length - 1];
  return undefined;
};

// 02. prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
type Prepend = <T>(arr: T[], item: T) => T[];

const prepend: Prepend = (arr, item) => {
  return [item, ...arr];
};

// 03. mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
type Mix = <T>(arr1: T[], arr2: T[]) => T[];

const mix: Mix = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

console.log(mix([1, 'hoya'], [5, 3]));

// 04. count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
type Count = <T>(arr: T[]) => number;

const count: Count = (arr) => {
  return arr.length;
};

// 05. findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
type FindIndex = <T>(arr: T[], item: T) => number | null;

const findIndex: FindIndex = (arr, item) => {
  const index = arr.indexOf(item);

  return index !== -1 ? index : null;
};

console.log(findIndex([1, 2, 3, 'hoya'], 2));

// 06. slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
type Slice = <T>(arr: T[], startIndex: number, endIndex?: number) => T[] | undefined;

const SliceFunc: Slice = (arr, startIndex, endIndex) => {
  return typeof endIndex === 'number' ? arr.slice(startIndex, endIndex) : undefined;
};

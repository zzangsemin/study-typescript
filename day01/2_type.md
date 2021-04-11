### 타입 선언(Type Declaration)

- 변수명 뒤에 타입을 명시하는 것으로 타입을 선언
  선언한 타입에 맞지 않는 값을 할당하면 컴파일 시점에서 에러

```ts
let foo: string = "hello";
let bar: number = true; // error
```

- 함수의 매개변수와 반환값에 대한 타입 선언 방법
  - 일반 변수와 마찬가지로 선언된 타입과 일치하지 않는 값이면 에러

```ts
// 함수 선언식
function multiply1(x: number, y: number): number {
  return x * y;
}
// 함수 표현식
const multiply2 = (x: number, y: number): number => x * y;
```

- 자바스크립트의 타입 이외에도 TypeScript 고유의 타입이 추가로 제공

```ts
// array
let list1: any[] = [1, "two", true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3]; // 제너릭 배열 타입

// tuple : 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현
let tuple: [string, number];
tuple = ["hello", 10]; //ok
tuple = [10, "hello"]; // error
tuple = ["hello", 10, "hello", 10]; // error
tuple.push(true); // error

// enum : 열거형은 숫자값 집합에 이름을 지정한 것이다
enum Color1 {
  Red,
  Green,
  Blue,
}
let c1: Color1 = Color.Green;
console.log(c1); // 1

enum Color2 {
  Red = 1,
  Green,
  Blue,
}
let c2: Color2 = Color2.Green;
console.log(c2); // 2

enum Color3 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c3: Color3 = Color3.Blue;
console.log(c3); // 4

/* any : 타입 추론(type interence)할 수 없거나 체크가 필요없는 변수에 사용
var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당할 수 있다 */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// void : 일반적으로 함수에서 반환값이 없을 경우 사용
function warnUser(): void {
  console.log("This is my warning message");
}

// never : 결코 발생하지 않는 값
function error(message: string): never {
  throw new Error(message);
}
```

### 타입 추론(Type Interence)

- 타입 선언을 생략하면 값이 할당되는 과정에서 동적으로 타입이 결정되는 것

```ts
let foo = 123; // foo는 number 타입
foo = "hi"; // error
```

- `foo`에 타입을 선언하지 않았으나 타입 추론에 의해 변수 타입이 결정
  - 동적 타입 언어는 변수의 타입이 결정된 후에도 여러 타입의 값을 교차하여 할당 가능
  - 정적 타입 언어는 타입이 결정된 후에는 타입을 변경할 수 없음

```ts
let foo; // let foo: any와 동치
foo = "hello";
console.log(typeof foo); // string
foo = true;
console.log(typeof foo); // boolean
```

- 타입 선언을 생략하고 값도 할당하지 않아 타입을 추론할 수 없으면 `any` 타입이 됨
  - TypeScript를 사용하는 장점을 없애기 때문에 권장하지 않음

### 타입 캐스팅

- 기존의 타입에서 다른 타입으로 타입 캐스팅하려면 `as` 키워드를 사용하거나 `<>` 연산자를 사용

```ts
const $input = document.querySelector('input["type="text"]');
// $input: Element | null
const val = $input.value; // error
```

- `$input`의 타입인 Element 또는 null에 value란 프로퍼티가 존재하지 않으므로 컴파일 에러가 발생
- value 프로퍼티는 Element 타입의 하위 타입인 HTMLInputElement 타입에 존재하여 타입 캐스팅이 필요

```ts
// 1. as 키워드
const $input = document.querySelector(
  'input["type="text"]'
) as HTMLInputElement;
const val = $input.value;
// 2. <> 연산자
const $input = <HTMLInputElement>document.querySelector('input["type="text"]');
const val = $input.value;
```

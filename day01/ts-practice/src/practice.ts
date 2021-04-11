// interface는 클래스 또는 객체를 위한 타입을 지정할 때 사용되는 문법

// Shape 라는 interface를 선언
interface Shape {
  getArea(): number; // Shape interface에는 getArea라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // implements 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시합니다
  constructor(public radius: number) {
    this.radius = radius;
  }
  // 너비를 가져오는 함수를 구현합니다
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);
// console.log(rectangle.width);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

// type은 특정 타입에 별칭을 붙이는 용도로 사용
// 이를 사용하여 객체를 위한 타입을 설정할 수도 있고, 배열, 또는 그 어떤 타입이던 별칭을 지어줄 수 있습니다.
type Person = {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미
};
// &는 intersection으로서 두개 이상의 타입들을 합쳐줍니다
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "김사람",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

type People = Person[]; // Person[]를 이제 앞으로 People이라는 타입으로 사용할 수 있습니다
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const color: Color = "red";
const colors: Color[] = ["red", "orange"];

// 제너릭(Generics)은 타입스크립트에서 함수, 클래스, interface, type alias를 사용하게 될 때 여러 종류의 타입에 대하여
// 호환을 맞춰야하는 상황에서 사용하는 문법

// 함수에서 Generics 사용하기
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}
const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return {
    param,
  };
}
const wrapped = wrap(10);

// interface에서 Generics 사용하기
interface Items<T> {
  list: T[];
}
const itmes: Items<string> = {
  list: ["a", "b", "c"],
};

// type에서 Generics 사용하기
type Items2<T> = {
  list: T[];
};
const itmes2: Items2<string> = {
  list: ["a", "b", "c"],
};

// 클래스에서 Generics 사용하기
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

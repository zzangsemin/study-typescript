## 리액트 컴포넌트 타입스크립트로 작성하기

```
$ npx create-react-app ts-react-tutorial --template typescript
```

- 타입스크립트 설정이 적용된 프로젝트가 생성(\*.tsx 확장자 사용)

> /ts-react-tutorial/src/Greetings.tsx

```ts
import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string; // 있어도 되고 없어도 되는 props는 ? 문자 사용
  onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미
};

const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
```

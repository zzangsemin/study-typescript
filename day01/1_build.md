## 개발환경 구축

- TypeScript 파일(.ts)은 컴파일러를 이용해 자바스크립트 파일로 변환해야 함(컴파일 or 트랜스파일링)

```
$ npm install (-g) typescript
$ tsc -v
Version 4.2.4

$ tsc 파일명
```

- 타입스크립트 컴파일러(tsc)는 타입스크립트 파일(.ts)를 자바스크립트 파일로 트랜스파일링함

```
$ tsc -- init
```

- 타입스크립트 설정 파일 생성(tsconfig.json)

```js
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"
  },
  "exclude": [
    "node_modules"
  ]
}
```

- `compilerOptions` : 컴파일 옵션을 설정
- `target` : 컴파일된 코드가 어떤 환경에서 실행될지 정의
  - ex) es5로 한다면 일반 function 키워드를 사용하는 함수로 변환, es6면 화살표 함수를 그대로 유지
- `module` : 컴파일된 코드가 어떤 모듈 시스템을 사용할지 정의
- `strict` : 모든 타입 체킹 옵션을 활성화한다는 것을 의미
- `esModuleInterop` : commonjs 모듈 형태로 이루어진 파일을 es2015 모듈 형태로 불러올 수 있게 해줌
- `outDir` : 컴파일된 파일들이 저장되는 경로를 지정
- `exclude` : node_modules 패키지들을 타입스크립트 컴파일 대상으로 제외

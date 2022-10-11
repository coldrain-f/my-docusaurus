---
sidebar_position: 2
title: map() 사용하기
---

### 시작하기에 앞서

:::caution 주의
해당 블로그의 모든 문서는 학습한 내용을 제 방식으로 정리하여 작성하고 있습니다. <br/>
틀린 내용이 있을 수 있으므로 참고하고 읽어주시면 감사하겠습니다.
:::
<br/>

## React map()

```jsx showLineNumbers
function App() {
  // highlight-start
  const todoData = [
    { id: 1, title: "공부하기", completed: true },
    { id: 2, title: "밥 먹기", completed: false },
  ];
  // highlight-end

  return (
    <div>
      {todoData.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" defaultChecked={todo.completed} />
          <span>{todo.title}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
```

가장 먼저 `map()`함수를 사용하기 위한 배열을 준비합니다.

앞의 예제처럼 배열을 직접 만들어줘도 되고, 서버에서 데이터로 받아와도 됩니다.

```jsx showLineNumbers
function App() {
  const todoData = [
    { id: 1, title: "공부하기", completed: true },
    { id: 2, title: "밥 먹기", completed: false },
  ];

  return (
    <div>
      {/*highlight-start*/}
      {todoData.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" defaultChecked={todo.completed} />
          <span>{todo.title}</span>
        </div>
      ))}
      {/*highlight-end*/}
    </div>
  );
}

export default App;
```

그리고 자바스크립트에서 `map()`을 사용하듯이

리액트에서도 `{data.map(data => ( ... ))}` 형태로 사용하면 되고,

`...`안에서 JSX 문법으로 UI를 작성하면 됩니다.

그리고 데이터에 접근할 땐 중괄호{}로 묶어줘야 합니다.

ex) `<span>{todo.title}</span>`

## key를 사용하는 이유

작성 필요...

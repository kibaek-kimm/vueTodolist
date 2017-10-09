# Vue-todo

* vue-cli init 을 이용하여 프로젝트를 세팅 하였습니다.

``` bash
$ vue init webpack-slmple vue-todo
```


## 프로젝트 폴더 구조
```
src
├── main.js
├── components
|   ├── App.vue
|   ├── TodoHeader.vue
|   └── TodoList.vue
└─── store
    ├── index.js
    ├── actions.js
    ├── mutation-types.js
    └── mutations.js
```

## Components 설명
<dl>
    <dt><b>App.vue</b></dt>
    <dd>
        TodoHeader 와 TodoList 컴퍼넌트를 가지고 있는 컴포넌트 중 최상위 컴포넌트입니다.
    </dd>
</dl>

<dl>
    <dt><b>TodoHeader.vue</b></dt>
    <dd>
        검색 input 박스와 "추가" 버튼으로 구성 되어있는 컴포넌트입니다.<br/><br/>
         <b>data</b><br/>
         <b>- todoData</b> : input에 model로 연결되어 있는 데이터<br/><br/>
         <b>method</b><br/>
         <b>- validateTodo</b> : "추가" 버튼에 click 이벤트에 등록되어 있는 메소드이고, 현재 등록되어있는 todos에 저장 될 데이터가 이미 존재하는지 체크하는 메소드<br/>
         <b>- handleInput</b> : input에 keyup 이벤트에 등록되어 있는 메소드이고, input에 입력 된 글자가 todos 내용 중 중복 되어있다면 하단에 렌더링이 되도록 하는 메소드
    </dd>
</dl>
<br/>
<dl>
    <dt><b>TodoList.vue</b></dt>
    <dd>
        todos데이터를 기반으로 할일을 렌더링 해주는 컴포넌트입니다.<br/><br/>
        <b>props</b><br/>
        <b>- passedTodo</b> : 상위 컴포넌트 (App.vue)를 통해 정의되는 props 입니다.<br/><br/>
        <b>data</b><br/>
        <b>- todos</b> : state에서 받는 todos 데이터를 가지고 렌더링에 사용됩니다.
    </dd>
</dl>


<br/>


## Vuex 구조
#### State
* todos (Array) : <b>렌더링 용으로 사용하는 todo 데이터</b>
* todosOrigin (Array) : <b>원본 데이터를 유지하는 데이터</b>

#### Actions / Mutations
* addTodo (async) : <b>Todo를 저장하는 함수</b>
* deleteTodo (async) : <b>특정 Todo를 삭제하는 함수</b>
* setSearchedTodos : <b>특정 키워드에 해당되는 todo를 받아서 state.todos 에 저장한다.</b>

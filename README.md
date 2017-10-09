# vue-todo

* vue-cli init 을 이용하여 프로젝트를 세팅 하였습니다.
``` bash
$ vue init webpack-slmple vue-todo
```

Vuex구조
- action
    business logic
- mutations
    commit
    - mutation-type
- state


Todo Array
{
    num
    * num을 변수로 뺄지
      index+1로 해줄지.
    contents
    option
}

input에 텍스트가 있다가 없을 떄 왜 데이터가 본래대로 돌아오는지..
(의도 된 것이 아니기에..)


* state 구성 및 정의이유

todosOrigin 과
todos 라는 두개의 state를 만들어 원본 데이터 유지 용과,단순 렌더링용으로 사용 하였습니다.




vueTodo Components

src
├── main.js
├── components
|   ├── App.vue
|   ├── Header.vue
|   ├── TodoList.vue
|   └── Todo.vue
└─── store
    ├── footer.html
    ├── footer.html
    └── header.html



> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

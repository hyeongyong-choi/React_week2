// src/modules/counter.js

const ADDTODO = "ADDTODO"
const DELETE = "DELETE"
const CHANGE = "CHANGE"

export const Addtodo = (payload) => { //추가버튼  Action Creator
  console.log(payload)
  return {
    type: ADDTODO, payload
  }
}

export const Delete = (payload) => { //삭제버튼  Action Creator
  return {
    type: DELETE, payload
  }
}

export const Change = (payload) => { //완료버튼  Action Creator
  console.log(payload)
  return {
    type: CHANGE, payload
    
  }

}

// 초기 상태값
const initialState = [
  {
    id: 1,
    title: '리액트 강의보기',
    body: '챕터 1부터 챕터 12까지 학습',
    isDone: false
  },
  {
    id: 2,
    title: '점심 먹기',
    body: '점심 뭐먹지..?',
    isDone: false
  }
];



// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      let bb = state.map((stat)=> stat.isDone)
      // console.log(bb)
      return (
        state.concat(action.payload)
      )
    case DELETE:
      return (
        state.filter((todo) => todo.id !== action.payload)
      )
    case CHANGE:
      console.log(action.payload.id)
      return (
        state.filter((todo) => todo.id == action.payload.id ? todo.isDone = !todo.isDone : todo)
        )
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
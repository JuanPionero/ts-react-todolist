import * as Types from "./action.types";

interface ActionCreator {

}

/*
 * action creators
 */
let nextTodoId = 0
export function addTodo(text:string) : {type:string,id:number,text:string} {
  return { type: Types.ADD_TODO, id: nextTodoId++, text };
}

export function toggleTodo(id:number) : {type:string, id:number} {
  return { type: Types.TOGGLE_TODO, id };
}

export function setVisibilityFilter(filter:string) : {type:string,filter:string} {
  return { type: Types.SET_VISIBILITY_FILTER, filter };
}

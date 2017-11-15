import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/action.types';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action:ActionType) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todos(state:ITodo[] = [], action:ActionType) {
  switch (action.type) {
  case ADD_TODO:
    return [...state, {
      text: action.text,
      id : action.id,
      completed: false
    }];
  case TOGGLE_TODO:
    const text:string = state[action.id].text as string;
    const completed:boolean = ! state[action.id].completed;
    return [
      ...state.slice(0, action.id),
      {text, id:action.id, completed },
      ...state.slice(action.id + 1)
    ];
  default:
    return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
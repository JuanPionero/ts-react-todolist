import {Dispatch} from "redux";
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos:ITodo[], filter:string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state:{todos:ITodo[],visibilityFilter:string}) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch:Dispatch<{onTodoClick:typeof toggleTodo}>) => {
  return {
    onTodoClick: (id:number) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect<{todos:ITodo[]|undefined},{onTodoClick:Function},{}>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
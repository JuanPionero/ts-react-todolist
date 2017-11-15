import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

interface IAddTodo {
    dispatch: Dispatch<typeof addTodo>;
}

const AddTodo : React.SFC<IAddTodo> = (props) => {
  let input : HTMLInputElement|null;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input!.value.trim()) {
            return
          }
          props.dispatch(addTodo(input!.value))
          input!.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}


export default  connect()(AddTodo);
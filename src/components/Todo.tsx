import * as React from 'react'

const Todo : React.SFC<{onClick:()=>{}, completed:boolean, text:string}> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)



export default Todo
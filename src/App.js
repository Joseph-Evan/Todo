import { useReducer, useState } from "react"
import Todo from "./componets/Todo"

function App () {

  const ACTION = {
    ADD_TODO: 'add-todo'
  }

  function reducer(todos, action) {
    switch(action.type) {
      case ACTION.ADD_TODO:
        return [...todos, newTodo(action.payload.name)]
    }
  }

  function newTodo (name) {
    return {id: Date.now, name:name, complete: false}
  }

  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState("")

  function handleSubmit (e) {
    e.preventDefault()
    dispatch({type: ACTION.ADD_TODO, payload: {name: name}})
    setName("")
  }



  

  return (
    <div className="app">
      <h1>Joseph's todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo=> {
        return <Todo key={todo.id} todo={todo}/>
      }) }
    </div>

  )
}

export default App
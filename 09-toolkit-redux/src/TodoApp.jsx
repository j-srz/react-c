import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"



export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);

    const { data: todo = [], isLoading } = useGetTodoQuery(todoId);

    const nextTodo = () => {
      setTodoId( todoId+1 )
    }

    const prevTodo = () => {
      if (todoId === 1) return;
      setTodoId( todoId-1 )
    }
 
    return (
    <>
        <h1>Todos - RTK query</h1>
        <hr />

        <h4>{isLoading ? 'Loading...' : ''}</h4>
        
        <pre>{JSON.stringify(todo, null, 3)}</pre>


        <button onClick={ prevTodo }>Prev todo</button>
        <button onClick={ nextTodo }>Next todo</button>


        {/* <ul>
          {
            todos.map(todo => (
              <li key={ todo.id }>
                <strong>{todo.completed ? 'DONE ' : 'Pending '}</strong>
                { todo.title }
              </li>
            ))
          }
        </ul> */}


    </>
  )
}

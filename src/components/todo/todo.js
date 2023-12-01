import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/slices/toDoSlice";

const ToDo = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('State: ', state.toDo.data);

  if(state.toDo.isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div>
      <button onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
        {
          state.toDo.data && state.toDo.data.map((e) => <li key={e.id}>{e.title}</li>)
        } 
    </div>
  )
}

export default ToDo;
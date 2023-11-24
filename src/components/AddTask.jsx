import { postTask } from '../api/api';
import './AddTask.css'

import { useRef, useState } from 'react'

function AddTask({ setTasks }) {
  const inputRef = useRef(null);

  const addTask = async () => {
    const newTask = inputRef.current.value;
    if (newTask.length == 0) return;

    const taskToPost = JSON.stringify({
      task: newTask,
      isCompleted: false,
    })

    const postedTask = await postTask(taskToPost);
    setTasks((tasks) => [...tasks, postedTask]);
   
    inputRef.current.value = "";
  };

  return (
    <div className='add-task-wrapper'>
      <input
        ref={inputRef}
        name="task"
        id="task"
        type="text"
        placeholder="New task..."
      />
      <button onClick={addTask}>Add task</button>
    </div>
  );
}

export default AddTask;

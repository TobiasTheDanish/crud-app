import { useState } from 'react';
import './Task.css'
import { putTask, deleteTask } from '../api/api';
import DeleteIcon from './DeleteIcon';

function Task({task, setRefetch}) {
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);

    const toggleCompleted = () => {
        console.log("toggle clicked");
        setIsCompleted(!isCompleted)
        const taskToPut = JSON.stringify({
            task: task.task,
            isCompleted: !isCompleted,
        });

        putTask(task.id, taskToPut);
    }

    const handleDelete = () => {
        console.log("delete clicked");
        deleteTask(task.id);
        setRefetch((current) => !current);
    }

    return (
      <div className="task" >
        <div style={{flex: 1, cursor: "pointer"}} onClick={toggleCompleted}>
          {isCompleted ? (
            <p style={{ textDecoration: "line-through" }}>{task.task}</p>
          ) : (
            <p>{task.task}</p>
          )}
        </div>
        <div className="delete-button" onClick={handleDelete}>
          <DeleteIcon />
        </div>
      </div>
    );
}

export default Task;
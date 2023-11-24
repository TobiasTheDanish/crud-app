import { useEffect, useState } from 'react'
import './App.css'
import Task from './components/Task';
import AddTask from './components/AddTask';
import { getTasks } from './api/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const tasks = await getTasks();
      setTasks(tasks);
    }
    fetchData()
  }, [refetch]);

  return (
    <>
      <div className="card">
        <h2>ToDo's</h2>
        <div className='task-wrapper'>
          {tasks.map((task) => (
            <Task key={task.id} task={task} setRefetch={setRefetch} />
          ))}
        </div>
        <AddTask setTasks={setTasks} />
      </div>
    </>
  );
}

export default App

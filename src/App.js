import './index.css';
import Header from './components/header';
import Tasks from './components/task';
import AddTask from './components/addTask';
import { useState } from 'react';



function App() {

  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text: 'Doctor Appointment',
            day: 'Feb 5th at 14:30',
            reminder: true,
            
        },
        {
            id:2,
            text: 'Meeting at School',
            day: 'Feb 6th at 12:30',
            reminder: false,
            
        },
        {
            id:3,
            text: 'Food Shopping',
            day: 'Feb 10th at 11:10',
            reminder: true,
            
        }
    ]
);

const addTask = (task) => {
  console.log('hello');
}

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=> task.id !== id))
}

const toggleReminder=(id)=> {
  setTasks(tasks.map((task)=>
  task.id === id ? {...task, reminder: !task.reminder} : task
  ))
}

  return (
    <div className="container">
     <Header title="Task Tracker" />
     <AddTask onAdd={AddTask} />
    {tasks.length===0 ? 'No Task to show' :<Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder} />}
    </div>
  );
}

export default App;

import React from 'react';
import Task from './tasks';



const Tasks=({tasks,onDelete, toggleReminder})=> {

     return ( 
        <div>
        {tasks.map((task)=>(
            <div>
        <Task key={task.id} task={task} onDelete={onDelete} toggleReminder={toggleReminder}></Task>
        </div>
        ))}
        </div>
      );
 }
 
 export default Tasks;
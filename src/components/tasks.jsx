const Task=({ task,onDelete, toggleReminder})=> {
    return ( 
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={()=>toggleReminder(task.id)}>
            <h3>
            {task.text}
            <span style={{color:"red", textAlign:"right"}} onClick={()=>onDelete(task.id)}>Delete</span>
            </h3>
            <p>
            {task.day}
            </p>
        </div>
     );
}

export default Task;
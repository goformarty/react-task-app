import React, { useState } from 'react';

function Task(props) {
    const [task, setTask] = useState(props.content)

    function handleNewTask(event) {
        event.preventDefault()
        setTask(event.target[0].value)
    } 
    return(
       <section className="Task">
           <section className="Task">
           {!task && (
               <form onSubmit= {handleNewTask}>
                   <label htmlFor="name">Task:</label>
                   <input type="text" name="taskname" />
               </form>
           )}
            { task }
            </section>
       </section>
   )
}

export default Task;
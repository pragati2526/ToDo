import React,{useState} from 'react';
import './ToDoStyle.css';

const ToDo = ({todo}) => {
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     handleToggle(e.currentTarget.id)
    // }



   return (
    <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} className="todo box">
    {todo.task}
    </div>
   );
};
 
export default ToDo;
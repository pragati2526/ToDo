import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo}/>
               )
           })}
           {/* <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button> */}
       </div>
   );
};
 
export default ToDoList;
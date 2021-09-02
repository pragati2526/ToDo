import React,{ useState } from 'react'
import data from './data.json';
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

export default function Title({title}) {
    const [ toDoList, setToDoList ] = useState(data);
    // const handleToggle = (id) => {
    //     let mapped = toDoList.map(task => {
    //       return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    //     });
    //     setToDoList(mapped);
    //   }

    // const handleFilter = () => {
    //   let filtered = toDoList.filter(task => {
    //     return !task.complete;
    //   });
    //   setToDoList(filtered);
    // }
    const addTask = (userInput ) => {
      let copy = [...toDoList];
      copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
      setToDoList(copy);
    }
    

    return (
        <>
        <h1 style={{color:"white",textAlign:"center"}}>{title}</h1>
        <div style={{backgroundColor:"white",borderRadius: "21px",padding:"20px"}}>
            <ToDoList toDoList={toDoList}/>
            {/* <ToDoList toDoList={toDoList} handleToggle={handleToggle}/> */}
            <ToDoForm addTask={addTask}/>
        </div>
        </>
    )
}

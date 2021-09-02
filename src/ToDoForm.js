import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." style={{color:"#A2A3C1",backgroundColor:"white",border:"1px solid #A2A3C1",margin:"10px",padding:"20px",borderRadius:"10px",height:"60px",textAlign:"center"}}/>
            <button style={{color:"#A2A3C1",border:"none",backgroundColor:"white",textAlign:"center"}}>Add Item +</button>
        </form>
    );
};

export default ToDoForm;
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
            <input value={userInput} type="text"  onChange={handleChange} placeholder="Enter task in Todo..." style={{color:"white",backgroundColor:"#4D4D5C",border:"1px solid #A2A3C1",margin:"10px",padding:"20px",borderRadius:"10px",maxHeight:"60px",textAlign:"center"}}/>
            <button style={{color:"white",backgroundColor:"#4D4D5C",border:"none",textAlign:"center"}}>Add Item +</button>
        </form>
    );
};

export default ToDoForm;
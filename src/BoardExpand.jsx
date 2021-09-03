import React, { useState } from 'react';
import './index.css';
import ToDoList from './ToDoList';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const BoardExpand=(props)=>{
    
    const [inputList,setInputList]=useState("");

    const [item, setItems] = useState([]);

    const itemEvent =(event)=>{
        setInputList(event.target.value); 
    };

    const listOfItems=()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        });
        setInputList("");
    };
    const deleteItems=(id)=>{
        console.log("deleted");

        setItems((oldItems)=>{
            return oldItems.filter((arrEleme, index)=>{
                return index !== id;
            });
        });
    };
    return(
        <><div>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>{props.title}</h1>
                    <br />
                    <input type="text" placeholder="add items" onChange={itemEvent} value={inputList} />
                    <AddCircleIcon onClick={listOfItems} variant="primary" /> 
                    <ol>
                       {
                           item.map((val, index)=>{
                               return <ToDoList 
                               text={val}
                               onSelect={deleteItems}
                               key={index}
                               id={index} />;
                        })}
                    </ol>
                </div>
            </div>
        </div> 
        </>
    );
};

export default BoardExpand;
import React,{ useState } from 'react'
import ToDo from "./ToDo";
import ToDoForm from './ToDoForm';
import DropWrapper from "./DropWrapper";
import Col from "./Col";
import { data, statuses } from "./data/index.js";
import './ToDoStyle.css';

const Title = () => {
  const [items, setItems] = useState(data);
  const addTask = (userInput ) => {
          let copy = [...items];
          copy = [...copy, { 
              id: items.length + 1,
              status: "ToDo",
              title: userInput}];
          setItems(copy);
        }

  const onDrop = (item, monitor, status) => {
      const mapping = statuses.find(si => si.status === status);

      setItems(prevState => {
          const newItems = prevState
              .filter(i => i.id !== item.id)
              .concat({ ...item, status, icon: mapping.icon });
          return [ ...newItems ];
      });
  };

  const moveItem = (dragIndex, hoverIndex) => {
      const item = items[dragIndex];
      setItems(prevState => {
          const newItems = prevState.filter((i, idx) => idx !== dragIndex);
          newItems.splice(hoverIndex, 0, item);
          return  [ ...newItems ];
      });
  };

  return (
      <>
       <div className="row1">
            {statuses.map(s => {
                return (
                    <>
                    <div key={s.status} className={"col-wrapper"}>
                    <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col>
                                {items
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <ToDo key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                }
                            </Col>
                        </DropWrapper>
                    </div>
                    </>
                );
            })}
        </div>
        <div className={"row1"}>
        <ToDoForm addTask={addTask}/>
        </div>
          </>
   
  )};

export default Title;

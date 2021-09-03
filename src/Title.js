import React,{ useState } from 'react'
// import data from './data.json';
// import ToDoList from "./ToDoList";
import ToDo from "./ToDo";
import ToDoForm from './ToDoForm';
import DropWrapper from "./DropWrapper";
import Col from "./Col";

// import {Container,Row,Col} from 'react-bootstrap';
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
       <div className={"row"}>
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
        <div className={"row"}>
        <ToDoForm addTask={addTask}/>
        </div>

        {/* <Container fluid style={{backgroundColor:"#4D4D5C",padding:"30px"}}> 
          <Row> 
          {statuses.map(s => {
              return (
                        <> 
                            <div className='align-items-center mx-auto' style={{backgroundColor:"white",borderRadius: "21px",padding:"5px",margin:"10px"}}>
                                <div key={s.status}>
                                   <h1 style={{color:"white",backgroundColor:"#4D4D5C",borderRadius: "21px",textAlign:"center"}}>{s.status}  {s.icon}</h1>
                                   <DropWrapper onDrop={onDrop} status={s.status}>
                                    <div >
                                        {items
                                            .filter(i => i.status === s.status)
                                            .map((i, idx) => <ToDo key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                        }      
                                    </div>
                                    </DropWrapper>
                                </div>
                            </div> 
                        </>
                    );
                })}
            <div className="mx-auto" style={{backgroundColor:"white",borderRadius: "21px",padding:"5px",margin:"0px"}}>  
          <ToDoForm addTask={addTask}/>
     

 </Row>
       </Container>   */}
          </>
   
  )};

export default Title;

// export default function Title({title}) {
//     const [ toDoList, setToDoList ] = useState(data);
//     // const handleToggle = (id) => {
//     //     let mapped = toDoList.map(task => {
//     //       return task.id === id ? { ...task, complete: !task.complete } : { ...task};
//     //     });
//     //     setToDoList(mapped);
//     //   }

//     // const handleFilter = () => {
//     //   let filtered = toDoList.filter(task => {
//     //     return !task.complete;
//     //   });
//     //   setToDoList(filtered);
//     // }
//     const addTask = (userInput ) => {
//       let copy = [...toDoList];
//       copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
//       setToDoList(copy);
//     }
    

//     return (
//         <>
//         <h1 style={{color:"white",textAlign:"center"}}>{title}</h1>
//         <div style={{backgroundColor:"white",borderRadius: "21px",padding:"20px"}}>
//             <ToDoList toDoList={toDoList}/>
//             {/* <ToDoList toDoList={toDoList} handleToggle={handleToggle}/> */}
//             <ToDoForm addTask={addTask}/>
//         </div>
//         </>
//     )
// }

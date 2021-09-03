import React from 'react'
import Title from './Title.js';
import './ToDoStyle.css';
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import ButtonAppBar from "./NavbarBoard";
import Footer from "./Footer";

export default function Kanban() {
    return (
        <>
        <ButtonAppBar/>
        <div style={{backgroundColor:"#4D4D5C",marginTop:"30px",paddingBottom:"130px"}}>
        <DndProvider backend={HTML5Backend}>
        <Title/>
        </DndProvider>
        </div>
        <Footer/>
        </>
    )
}

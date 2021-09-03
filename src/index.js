import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import DetailedCard from './DetailedCard';
// import BoardExpand from './BoardExpand';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import NavBar from './NavBar';
import CreateBoard from './CreateBoard'
// import ToDo from './ToDo';
import Kanban from './Kanban';

ReactDOM.render(
        <BrowserRouter>
        {/* <App /> */}
        <Footer />
    </BrowserRouter>,
  document.getElementById('root')
);


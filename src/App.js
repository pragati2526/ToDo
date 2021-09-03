import SignIn from "./LogIn";
import SignUp from "./Register";
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateBoard from "./CreateBoard";
import SimpleCard from "./SimpleCard";
import Kanban from "./Kanban";
function App(){
  return(
    <>
    <BrowserRouter>
    <Route exact path="/" component={SignIn}></Route>

    <Switch>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/createboard" component={CreateBoard} />
      <Route path="/card" component={SimpleCard} />
      <Route path="/kanban" component={Kanban} />
    </Switch>
    </BrowserRouter>
    </>
  )
}
export default App;

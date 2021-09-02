import SignIn from "./LogIn";
import SignUp from "./Register";
import CreateBoard from "./CreateBoard";
import DetailedCard from "./DetailedCard";
import Kanban from './Kanban.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Route exact path="/" component={SignIn}></Route> */}
    {/* <Route exact path="/" component={DetailedCard}></Route> */}
    <Route exact path="/" component={Kanban}></Route>

    <Switch>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/createboard" component={CreateBoard} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;

import SignIn from "./LogIn";
import SignUp from "./Register";
import CreateBoard from "./CreateBoard";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Route exact path="/" component={SignIn}></Route>

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

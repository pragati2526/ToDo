import SignIn from "./LogIn";
import SignUp from "./Register";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Route exact path="/" component={SignIn}></Route>

    <Switch>
      {/* <Route path="/signup" component={SignUp}></Route> */}
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;

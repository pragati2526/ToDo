import SignIn from "./LogIn";
import SignUp from "./SignUp";
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateBoard from "./CreateBoard";
import SimpleCard from "./SimpleCard";
function App() {
  return (
    <>
    {/* <SimpleCard /> */}
    <main>
            <Switch>
                <Route path="/" component={SignIn} exact />
                <Route path="/signup" component={SignUp} />
                <Route path="/createboard" component={CreateBoard} />
            </Switch>
        </main>
    </>
  );
}

export default App;

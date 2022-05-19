import React from 'react'
import './App.css';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Dasboard from './components/dasboard/Dasboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateWallet from './components/dasboardoperations/CreateWallet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Nav}></Route>
          <Route path='/welcome' component={Welcome}></Route>
          <Route path='/dasboard' component={Dasboard}></Route>
          <Route path='/creatwallet' component={CreateWallet}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

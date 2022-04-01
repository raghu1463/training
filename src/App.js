
import './App.css';
import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import Createemployee from './Components/CreateEmployee';
import Updateemployee from './Components/UpdateEmployee';
import Viewemployee from './Components/ViewEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListEmployeeComponent}></Route>
        <Route path="/employees" component={ListEmployeeComponent}></Route>
        <Route path="/add-employee" component={Createemployee}></Route>
        <Route path="/update-employee/:id" component={Updateemployee}></Route>
        <Route path="/view-employee/:id" component={Viewemployee}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

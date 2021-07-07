import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddToDo from "./Components/addToDo";
import Navbar from "./Components/Navbar/Navbar";
import ToDoState from './Context/ToDo/ToDoState';

import Reports from './Components/pages/Reports';
import Products from './Components/pages/Products';
import Login from './Components/Auth/Login';
import './App.css';


// const array = [];

const App= ()=> {

    return (   
        <ToDoState>
            <Router>
                <Navbar />
                <Switch>
                    <AddToDo />
                    <Route exact path='/' component={AddToDo} />
                    <Route exact path='/reports' component={Reports} />
                    <Route exact path='/login' component={Login} />
                    
                    </Switch>
                </Router>
            </ToDoState>



          );
       }

          export default App;

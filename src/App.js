import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddToDo from "./Components/addToDo";
import Navbar from "./Components/Navbar/Navbar";
import ToDoState from './Context/ToDo/ToDoState';



import Login from './Components/Auth/Login';
import { signin } from "./Components/Auth/signin";
import './App.css';
import { Resgister } from "./Components/Auth/Resgister";


// const array = [];

const App= ()=> {

    return (   
        <ToDoState>
            <Router>
                <Navbar />
                <Switch>
                   
                    <Route exact path='/' component={AddToDo} />
                    <Route exact path = "/login" component = {signin} />
                    <Route exact path = "/Register" component = {Resgister} />
                  
                   
                    
                    </Switch>
                </Router>
            </ToDoState>



          );
       }

          export default App;

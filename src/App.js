import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToDoState from './Context/ToDo/ToDoState';
import AuthState from './Context/Auth/AuthState';
import AddToDo from "./Components/addToDo";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login";
import Resgister from "./Components/Auth/Resgister";
import PrivateRoute from "./Components/privetRout"





// const array = [];

const App= ()=> {

    return (  
        <AuthState>
        <ToDoState>
            <Router>
                <Navbar />
                <Switch>
                   
                    <PrivateRoute exact path='/' component={AddToDo} />
                        <Route exact path="/login" component={Login} />
                    <Route exact path = "/Register" component = {Resgister} />
                  
                   
                    
                    </Switch>
                </Router>
            </ToDoState>
            </AuthState>



          );
       }

          export default App;

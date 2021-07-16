import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToDoState from './Context/ToDo/ToDoState';
import AuthState from './Context/Auth/AuthState';
import AddToDo from "./Components/addToDo";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Auth/Login";
import Resgister from "./Components/Auth/Resgister";
import PrivateRoute from "./Components/privetRout"
import setAuthToken from "./utils/setAuthToken"
import Year from "./Components/footer";




// const array = [];

const App= ()=> {
    if(localStorage.token){
setAuthToken(localStorage.token)
    }

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
            <Year></Year>
            </AuthState>

          );
       }

          export default App;

import React, { useState, useContext, useEffect } from "react";
import ToDO from  "./toDo";
import ToDoState from "../Context/ToDo/ToDoContext";


// import login from './Auth/Login'
//main function is to add a to do

const AddToDo = () => {


     const toDoState = useContext(ToDoState)
     const {  ItemToDo, GetTask } = toDoState
   

    

useEffect(() => {
    GetTask()
},[])
    



// const [Todo, SetTodo] = useState([null]);

    // const handeling=(event)=> {
    //     const newValue = event.target.value;
    //     SetTodo(newValue);
    //     event.target.name = null
    // }

    // const handelClick = (e) => {
        
      

    //     ADDToDO(Todo);

    //     SetTodo([null])
        
 
    // }








  
    return (

        <div className="container">

            <div className="heading">
                <h1>To-Do list</h1>
            </div>
            <div className="form">
                {/* <input required name="text" onChange={handeling} type="text" value={Todo}  /> */}
                {/* <button onClick={handelClick}>
                    <span>add</span>
       
                </button> */}
                { <ToDO value={ItemToDo} /> }

               
                {/* //<li>buy bread</li>
                <li>buy eggs</li> */}
            </div>
            </div>
    
    
    )
}

export default AddToDo;
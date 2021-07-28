import React ,{useContext} from "react";
import ToDoState from "../Context/ToDo/ToDoContext";
import "../Components/Navbar/toDo.css"

//main function is to map throught the to do and display them 
const ToDO = (props) => {

    
    //   getRootUrl()


    

    //const [bool , setBool] = useState(false)
    // const [styles , setStyle] = useState()

  



    const toDoState = useContext(ToDoState)
    const { SendDate } = toDoState

const handelNewClick = (data)=>{
    
    const Id=data.id
    
//  console.log(data.complete)

    if(data.complete){
        const completed_at=null
        const info={Id ,completed_at}
        // console.log("meaw")
         
        //  setStyle(null)
         SendDate(info) 
         //window.location.reload();
     }else{
        const today =  new Date()
        const completed_at = today.toISOString()
        const info={Id ,completed_at}
            // setStyle({textDecorationLine : "line-through"  })
            SendDate(info) 
            // console.log(completed_at)
            // console.log(Id)
            //window.location.reload();

     }


    
}
  return(
        <ul>
        
            { props.value != null ?  props.value.map((x)=> (
    
<li  key = {x.id}  onClick = {()=> handelNewClick({id:x.id , complete:x.completed_at})} style = {x.completed_at===null ?null : {textDecorationLine : "line-through" , color : "#00a5e6"}}>

<p id = "title"> {x.task.title}</p>

             
              <span> {x.task.content}</span> 
              
              </li>))
             : null} 
             
    </ul>
     
        )
}



export default ToDO;






















//bugs
//put Request error
//styles apply to all
// styles doesnt get saved when refreshed 
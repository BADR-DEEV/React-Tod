import react from "react"

import "./footer.css"






const Year = ()=> {


   const current = new Date();
   const CurrentYear = current.getFullYear();
   return (<div><p id = "year">@moomken{CurrentYear}</p>
   <div id = "mother"><div id = "inner-circle"></div>
   <div id = "inner-circle2"></div></div>
   
   </div>)





}

export default Year;
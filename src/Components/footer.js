import react from "react"

import "./footer.css"






const Year = ()=> {


   const current = new Date();
   const CurrentYear = current.getFullYear();
   return (<p id = "year">@moomken{CurrentYear}</p>)





}

export default Year;
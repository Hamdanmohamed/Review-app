// import { useState } from "react";
import Navbar from "./components/Navbar";
import Listspassing from "./components/Listspassing";
import Feedbackform from "./components/Feedbackform";

import { Contexts } from "./components/Contexts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";



export default function App() {

  // function handletheadd(userinput){
  //   userinput.id= uuidv4()
  //   setdatas([userinput,...datas])
  // }
  

  // }
  // const handlethestate = id=>{
  //   console.log(id,"confirmed");
  
   
    
  // }
  return (
  <BrowserRouter>
     <Contexts>
    <Routes>
   <Route path="/" element={
    <>
    <Navbar/>
    <Feedbackform/>
    <Listspassing />
    </>
   }/>
    </Routes>
    <Routes>
   <Route path="/about" element={<About/>}/>
    </Routes>
    </Contexts>
  </BrowserRouter>
  )
}

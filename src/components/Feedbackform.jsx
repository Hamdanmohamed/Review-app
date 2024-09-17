import { useContext, useEffect, useState } from "react"
import contextuse from "./Contexts"

export default function Feedbackform() {
    const [userinput,setuserinput] =useState("")
   const {handletheadd,feedbackedit,addeditfeedback} =useContext(contextuse)
 
 
   useEffect(()=>{
    if(feedbackedit.edit===true){
      setuserinput(feedbackedit.item.text)
    }
  },[feedbackedit])


  function handlethesubmit(e){
   e.preventDefault()
   if(userinput.length===0){
      alert("Please enter val")
   }
   else{
    const newdata = {
      text:userinput
    }
    if(feedbackedit.edit===true){
      addeditfeedback(feedbackedit.item.id,newdata)
      setuserinput("")
    }
    else{
      handletheadd(newdata)
      setuserinput("")
    }
   }
  }
  return (
    <>
   
   <form onSubmit={handlethesubmit}>
        <div className="m-6 flex justify-center items-center gap-5" >
        <input
        value={userinput}
        onChange={(e)=>{
            setuserinput(e.target.value)
        }}
         type="text" className="border-2 border-grey-600 w-[380px] px-4  py-2 rounded-xl text-green-300" />
        <input
         type="submit" className="text-white bg-blue-400 py-3 rounded-2xl w-24"/>
        </div>
   </form>
    </>
  )
}


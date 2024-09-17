import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useContext } from "react";
import contextuse from "./Contexts";

export default function Listsobtained({eachobj}) {
  //  const {handlethestate}=useContext(contextuse)
  
  const {handlethestate,handletheedit}=useContext(contextuse)

  return (
    <>
      <div className="bg-gray-900 flex justify-between px-7 items-center text-white min-w-[500px] mb-4 min-h-14 rounded-xl">
           <p >{eachobj.text}</p>
           <div className="flex gap-4">
            
           <FaRegEdit color="white" className="cursor-pointer" onClick={()=>{handletheedit(eachobj)}} />
           <AiOutlineDelete color="white" className="cursor-pointer" onClick={()=>{
             handlethestate(eachobj.id)
            }}/>
           </div>

       </div>
    </>
  )
}


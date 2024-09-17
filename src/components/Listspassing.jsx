import { useContext } from "react"
import Listsobtained from "./Listsobtained"
import contextuse from "./Contexts"


export default function Listspassing() {
  const {datas}=useContext(contextuse)
  return (
     <>
     <div className="flex flex-col items-center">
        {
            datas.map((item,index)=>(
              <Listsobtained key={index} eachobj={item} />
            ))
        }
     </div>
     </>
  )
}

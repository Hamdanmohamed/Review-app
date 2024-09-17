import { createContext,useEffect,useState } from "react";
const contextuse = createContext();
export function Contexts({children}){
    const [feedbackedit,setfeedbackedit] = useState({
      item:{},
      edit:false
    }) 
    const [datas,setdatas]= useState([
        // {
        //   id:1,
        //   text:"iam the sample context 1"
        // },
        // {
        //   id:2,
        //   text:"iam the sample context 2"
        // },
        // {
        //   id:3,
        //   text:"iam the sample context 3"
        // },
        // {
        //   id:4,
        //   text:"iam the sample context 4"
        // }
      ])
      // console.log(datas);
      useEffect(()=>{
        handlethegetserver()
      },[])

      async function handlethegetserver(){
       const response = await fetch("http://localhost:3000/posts",{
          method:"GET"
       })
       const res = await response.json()
       console.log(res);
       
       setdatas([...res])
      }

      async function handletheadd(userinput){
        const response = await fetch("http://localhost:3000/posts",{
          method:"POST",
          headers:{
             "content-Type":"application/json"
          },
          body:JSON.stringify(userinput)
         })
         const newdata = await response.json()
         setdatas([...datas,newdata])
      }

      async function addeditfeedback(id,newdata){
        const response = await fetch(`http://localhost:3000/posts/${id}`,{
          method:"PUT",
          headers:{
             "content-Type":"application/json"
          },
          body:JSON.stringify(newdata)
         })

        const data = await response.json()

        setdatas(
          datas.map((item)=>(
            item.id===id ? {...item,...data}:item
          ))
        )
        setfeedbackedit({
          item:{},
          edit:false
        })
      }
      
      async function handlethestate(id){
        if(confirm("Are you sure you want to delete")){
          await fetch(`http://localhost:3000/posts/${id}`,{
            method:"DELETE"
          })
          setdatas(
            datas.filter((item)=>(
              item.id !== id
            ))
          )
      }
    }
    // function handletheadd(userinput){
    //     userinput.id= uuidv4()
    //     setdatas([userinput,...datas])
    // }
    function handletheedit(text){
      setfeedbackedit({
        item:text,
        edit:true
      })
    }
    // function addeditfeedback(id,newdata){
    //   console.log(newdata)
    //   setdatas(datas.map((item)=>(
        
    //     item.id === id ? {...item,...newdata}:item
    //   )))
    //   setfeedbackedit({
    //     item:{},
    //     edit:false
    //   })


    // }

    return(
      <contextuse.Provider value={{
        datas,
        handlethestate,
        handletheadd,
        handletheedit,
        feedbackedit,
        addeditfeedback
      }}>
        {children}
      </contextuse.Provider>
    )
    }
export default contextuse;
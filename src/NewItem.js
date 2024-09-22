import { useRef, useState } from "react"
import apireq from './apireq'
// import apiReq from "./apireq";

const NewItem = ({list,setList,noOfItems,url,setFetchErr}) => {
 
  const [text,settext]=useState('');
  const addItem = async(text)=>{
    const id= noOfItems? `${(parseInt(list[noOfItems-1].id) + 1)}`:"1";
    
    const newItem={id,checked:false,text}
    setList([...list,newItem])

    // const postOpt ={
    //   method: 'POST',
    //   headers: {'content-type':'application/json'},
    //   body: JSON.stringify(newItem)
    // }
    // // console.log(url)
    // const result = await apireq(url,postOpt)
    // if(result)console.log(result)
  }

 const handleAdd=()=>{
  if(!text)return;
  else{
    // console.log(addItem(text))
    addItem(text)
    settext('');
    inRef.current.focus()
  }
  
 }
 const inRef=useRef();
  return (

    <div
       
      className='new-item' 
      name='new-item' 
      onSubmit={(e)=>(e.preventDefault())}
    >
      <label htmlFor="new-item">Add new list item</label>
      <input 
        id="new-item"
        ref={inRef}
        type="text" 
        placeholder='add new item' 
        autoFocus 
        value={text}
        onChange={(e)=>settext(e.target.value)}
      />
      <button 
        onClick={()=>handleAdd()}
      >+</button>
    </div>
  )
}

export default NewItem
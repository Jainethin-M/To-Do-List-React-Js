import React from 'react'
import apireq from './apireq'
const ListItem = ({list,setList,orglist,url}) => {
  if(list.length==0){
    return(
      <div className='list-container'>
        <p className='center'>list is empty</p>
      </div>
    )
  }
  const handleCheck = async(id) =>{
    const alterList = list.map((list) => 
      list.id===id?{...list,checked:!list.checked}:list
  )
  setList(alterList)

  // const thatList = list.filter((list)=>list.id===id)
  // const updateOpt ={
  //   method: 'PATCH',
  //   headers: {'content-type':'application/json'},
  //   body: JSON.stringify({checked:!thatList[0].checked})
  // };
  // const reqUrl = `${url}/${id}`;
  // console.log(reqUrl)
  // const result = await apireq(reqUrl,updateOpt)
  // if(result)console.log(result)

  
  
  

  }
  const handleDelete =async (id) => {
    const alterList = orglist.filter(orglist => (orglist.id!==id))
    setList(alterList)
    // const deleteOpt = {
    //   method: "DELETE"
    // }
    // const reqUrl = `${url}/${id}`;
    // console.log(reqUrl)
    // const result = await apireq(reqUrl,deleteOpt)
    // if(result)console.log(result)
    }
  return (
    <>
      <ul>
        {list.map((list)=>(
          <li key={list.id}>
            <input 
            type="checkbox" 
            checked={list.checked}
            onChange={()=>handleCheck(list.id)}
            />
            <p>{list.text}</p>
            <button onClick={()=>handleDelete(list.id)}>x</button>
          </li>
        ))}
        
      </ul>
    </>
  )
}


export default ListItem
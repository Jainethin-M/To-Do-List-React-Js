import React, { useEffect, useState } from 'react'
import NewItem from './NewItem'
import SearchItem from './SearchItem'
import ListItem from './ListItem'
// import apireq from './apireq'


const Content = ({noOfItems,setNoOfItems}) => {
  const API_URL="http://localhost:3500/List"
  
  const [fetchErr,setFetchErr]=useState(false)
  const [isLoading,setIsLoading]=useState(false)
  const [list,setList] = useState(
    //  {  //LOCAL STORAGE METHOD
          JSON.parse(localStorage.getItem("List"))
      // }
        )
  
        useEffect(()=>{ 
          // {  //LOCAL STORAGE METHOD
            setNoOfItems(list.length)
            localStorage.setItem("List",JSON.stringify(list))
            console.log("use")
          // }

        //   // { DB METHOD
        //   const summa= async()=>{
        //     try{
             
        //       const response = await fetch(API_URL)
        //       if(!response.ok) throw Error("Data not received")
        //         const resList = await response.json();
        //       setList(resList)
        //       // console.log(resList.length)
        //       setFetchErr(null)
        //     }catch(err){
        //       setFetchErr(err.message)
        //       // console.log(fetchErr)
        //     }finally{
        //       setIsLoading(false)
        //     }
        //   }

        //   // setTimeout(()=>{
        //     (async()=> await summa())()
            
        //   // },2000)


        //   // summa()
        // // }
          
          
        },[]);
        useEffect(()=>{
          const updateNo = () => {
            setNoOfItems(list.length)
            
          }
          updateNo()
        },[list])
        
        
        
      
      

  // FOOTER

  // SEARCHING
  const [search,setSearch]=useState('')
  
      

  return (
    <div className='main'>
      <div className='user-space'>
        <NewItem
        
          list={list}
          setList={setList}
          noOfItems={noOfItems}
          url={API_URL}
          setFetchErr={setFetchErr}
          
          />
        <SearchItem
        search={search}
        setSearch={setSearch}
        />
      </div >
      
      <div className='list-container'>
        {isLoading && <p className='center'>LOADING...</p>}
        {fetchErr && <p className='center'>{`Error: ${fetchErr}`}</p>}
        {!isLoading && !fetchErr &&
        <ListItem
        list={list.filter((list)=>list.text.includes(search))}
        setList={setList}
        orglist={list}
        url={API_URL}
        />
      }
      </div>
      
    </div>
    
  )
}

export default Content
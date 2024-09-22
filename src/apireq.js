const apireq= async(url = '',optObj=null,err=null) =>{
    try{
        const response = await fetch(url,optObj)
        if(!response.ok) throw Error("plz reload")
        
    }catch(e){
        err=e.Message
        console.log(err)
    }finally{
        return err
    }
}
export default apireq
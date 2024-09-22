import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content"
import { useState } from "react";

const ToDoList = () => {
    const [noOfItems,setNoOfItems]=useState('')
  return (
    <div className="body">

    <Header 
    title="to-do-list"
    />
    <Content 
    noOfItems={noOfItems}
    setNoOfItems={setNoOfItems}
    />

    <Footer
    noOfItems={noOfItems}
    />
    </div>
  )
}

export default ToDoList
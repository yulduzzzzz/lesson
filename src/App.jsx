import React, { useEffect, useState } from "react";
import "./App.css"
import axios from "axios";

function 
App() {
 const [val,setVal] = useState([]);
 useEffect(() => {
axios.get("https://admin.taffeine.com/api/events").then((res) => {
  const data = res.data.data;
  setVal(data);
})
 },[]);

  return (
    <div className='father'>
{val.map((items,index) => {
  return(
    <div key={index} className='card'>
      <img src={items.url} alt="" />
      <h2>{items.title}</h2>
      <p>{items.content}</p>
    </div>
  );
})}
    </div>
  )
}

export default App
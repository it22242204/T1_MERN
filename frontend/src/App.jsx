import React from 'react';
import { useEffect, useState } from 'react';



function App() {
  const[data,setdata]= useState([]);

useEffect(()=>{
  
fetch('http://Localhost:1000/api/info/get-all')
.then(response=>response.json())
.then(data=>{
  console.log(data);
  setdata(data);
})
.catch(error=>{
  console.log("error fetching data",error);
});
});


  return (
    <div>
      {data.map(item=>(
        <div ket = {item.id}>
          <h3>{item.name}</h3>
          {/* <p>{item.nested}</p> */}
          <p>{item.age}</p>
          <p>{item.address}</p>
          <p>{item.phone}</p>
          <p>{item.email}</p>
          <p>{item.Birthdate}</p>
          <p>{item.Married}</p>
          <p>{item.Salary}</p>
        </div>

      ))}
    </div>
  )
}

export default App
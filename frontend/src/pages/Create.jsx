import React from 'react';
import { useEffect, useState } from 'react';



function create() {
  const [data, setdata] = useState([]);
  const [form, setForm] = useState({
    name: "",
    firstname: "",
    lastname: "",
    age: "",
    address: "",
    phone: "",
    email: "",
    Birthdate: "",
    Married: "",
    Salary: "",
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCreate = () =>{
    fetch('http://Localhost:1000/api/info/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        nested: {
          firstname: form.firstname,
          lastname: form.lastname
        },
        age: form.age,
        address: form.address,
        phone: form.phone,
        email: form.email,
        Birthdate: form.Birthdate,
        Married: form.Married,
        Salary: form.Salary
      }),
    })
       .then((res) => res.json())
      .then((newItem) => {
        console.log("Created:", newItem);
        setData([...data, newItem]); 
        setForm({
          name: "",
          firstname: "",
          lastname: "",
          age: "",
          address: "",
          phone: "",
          email: "",
          Birthdate: "",
          Married: "",
          Salary: "",
        });
      })
      .catch((error) => console.error("Error creating data:", error));

  };


  return (
    <>
      <div>
        <div style={{ marginTop: "20px" }}>
          <h2>Add New</h2>
          <input name="name" value={form.name} onChange={handleChange} placeholder="name" />
          <input name="firstname" value={form.firstname} onChange={handleChange} placeholder="firstname" />
          <input name="lastname" value={form.lastname} onChange={handleChange} placeholder="lastname" />
          <input name="age" value={form.age} onChange={handleChange} placeholder="age" type="number" />
          <input name="address" value={form.address} onChange={handleChange} placeholder="address" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="phone" type="number" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="email" type="email" />
          <input name="Birthdate" value={form.Birthdate} onChange={handleChange} type="date" />
          <input name="Married" value={form.Married} onChange={handleChange} placeholder="Married" />
          <input name="Salary" value={form.Salary} onChange={handleChange} placeholder="Salary" type="number" />
          <button onClick={handleCreate}>Add</button>
        </div>
      </div>
      <div>
        <button>edit</button>
      </div>
      <div>
        <button>delete</button>
      </div>
    </>
  )
}

export default create;
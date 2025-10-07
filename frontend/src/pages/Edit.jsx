import React, { useEffect, useState } from "react";

function Create() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    id: null, 
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
  const [isEditing, setIsEditing] = useState(false);

  // Fetch all data once
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:1000/api/info/get-all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Create new record
  const handleCreate = () => {
    fetch("http://localhost:1000/api/info/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        nested: {
          firstname: form.firstname,
          lastname: form.lastname,
        },
        age: form.age,
        address: form.address,
        phone: form.phone,
        email: form.email,
        Birthdate: form.Birthdate,
        Married: form.Married,
        Salary: form.Salary,
      }),
    })
      .then((res) => res.json())
      .then((newItem) => {
        setData([...data, newItem]);
        resetForm();
      })
      .catch((err) => console.error("Error creating:", err));
  };

  // Edit record (start editing)
  const startEdit = (item) => {
    setForm({
      id: item.id,
      name: item.name,
      firstname: item.nested.firstname,
      lastname: item.nested.lastname,
      age: item.age,
      address: item.address,
      phone: item.phone,
      email: item.email,
      Birthdate: item.Birthdate,
      Married: item.Married,
      Salary: item.Salary,
    });
    setIsEditing(true);
  };

  // Update record
  const handleUpdate = () => {
    fetch(`http://localhost:1000/api/info/update/${form.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        nested: {
          firstname: form.firstname,
          lastname: form.lastname,
        },
        age: form.age,
        address: form.address,
        phone: form.phone,
        email: form.email,
        Birthdate: form.Birthdate,
        Married: form.Married,
        Salary: form.Salary,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchData(); // refresh list
        resetForm();
      })
      .catch((err) => console.error("Error updating:", err));
  };

  // Delete record
  const handleDelete = (id) => {
    fetch(`http://localhost:1000/api/info/delete/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((err) => console.error("Error deleting:", err));
  };

  // Reset form
  const resetForm = () => {
    setForm({
      id: null,
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
    setIsEditing(false);
  };

  return (
    <>
      <h2>Data List</h2>
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3>{item.name}</h3>
            <p>{item.nested.firstname} {item.nested.lastname}</p>
            <p>Age: {item.age}</p>
            <p>Email: {item.email}</p>
            <p>Salary: {item.Salary}</p>
            <button onClick={() => startEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>

      <h2>{isEditing ? "Edit Record" : "Add New Record"}</h2>
      <div>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input name="firstname" value={form.firstname} onChange={handleChange} placeholder="Firstname" />
        <input name="lastname" value={form.lastname} onChange={handleChange} placeholder="Lastname" />
        <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Age" />
        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" />
        <input name="phone" type="number" value={form.phone} onChange={handleChange} placeholder="Phone" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" />
        <input name="Birthdate" type="date" value={form.Birthdate} onChange={handleChange} />
        <input name="Married" value={form.Married} onChange={handleChange} placeholder="Married" />
        <input name="Salary" type="number" value={form.Salary} onChange={handleChange} placeholder="Salary" />
      </div>

      {isEditing ? (
        <>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={resetForm}>Cancel</button>
        </>
      ) : (
        <button onClick={handleCreate}>Add</button>
      )}
    </>
  );
}

export default Create;

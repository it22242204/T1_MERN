import React, { useState } from 'react';
import { useEffect, UseState } from 'react';



function create() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('http://Localhost:1000/api/info/get-all')
            .then(responce => responce.json())
            .then(data => {
                setdata(data);
            })
            .catch(error => {
                console.log("eroor fetching data", error)
            });
    }, []);

    return (
        <div>
            {data.map(item => (
                <div ket={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.nested.firstname}</p>
                    <p>{item.nested.lastname}</p>
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

export default create
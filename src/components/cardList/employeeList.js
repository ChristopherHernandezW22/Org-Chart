import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const FormInput = styled.form`
  text-align:center;
  padding:15px;
`

export default function SearchForm() {
 
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  useEffect( () => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      const data = response.data.results
      const results = data.filter(item => {
        return item.name.toLowerCase().includes(searchTerm)
      })
      setSearchResults(results)
    })
    
  },[searchTerm])
  const handleChange = event => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  }
  return (
    <section className="cardContainer">
      
      <FormInput className="employeeCard">
      <h3>Rick and Morty Department</h3>
      <input 
        type="text"
        placeholder="Search by Name"
        name="textfield"
        value={searchTerm}
        onChange={handleChange}
        className="searchLabel"
      />
      <h4>This is a directory of all employees in this Department, you can add new employees using the above dashboard or you can seach through exisiting employees and see information about them</h4>
      </FormInput>
    {
      searchResults.map(item => {
        return (
          <div className="employeeCard"  key={item.id}>
            <img src={item.image} alt="Employee profile" />
            <h3>{item.name}</h3>
            <h4>{item.gender}</h4>
            <h4>{item.type}</h4>
            <h4>{item.origin.name}</h4>
            <button onClick={console.log("edit initiated")}>Edit</button>
          </div>
        )
      })
    }

    </section>
  );
} 
































// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import EmployeeCard from './employeeCard';
// import { render } from 'react-dom'

// export default function EmployeeList() {
//   // TODO: Add useState to track data from useEffect
//   const [ emp, setEmp ] = useState([])

//   // Useeffect / axios
//   useEffect(() => {
//    const Hook = () => {
//    axios
//     .get('https://rickandmortyapi.com/api/character/')
//     .then(e =>{
//       setEmp(e.data.results)
//     })
//     }
//     Hook()
//   }, []);    
//     return (
//     <>
//       {emp.map(data => 
//       <EmployeeCard  key={data.name} data={data} />
//       )}

//     </>
//   );
// }

// render(<EmployeeList />, document.getElementById('root'))

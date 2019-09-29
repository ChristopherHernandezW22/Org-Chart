import React from 'react'

export default function EmployeeCard(props) {
  // Pass props into state
  const { name, gender, type, origin, } = props.data

  // JSX strucutre
  return (
    <div className="employeeCard">  
      <h3>{name}</h3>
      <h4>{gender}</h4>
      <h4>{type}</h4>
      <h4>{origin.name}</h4>
      <button onClick={console.log("edit initiated")}>Edit</button>
    </div>
  )
}
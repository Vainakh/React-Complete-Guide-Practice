import React from 'react';

import './UserOutput.css'

const UserOutput = (props) => {
  console.log(props)
  return (
    <div className="UserOutput">
      <p onClick={props.click}>My name is {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
    </div>
  )
}

export default UserOutput;
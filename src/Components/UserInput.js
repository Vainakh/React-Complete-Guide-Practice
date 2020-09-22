import React from 'react';

import './UserInput.css';

const UserInput = (props) => {
  console.log(props)
  return (
    <div className="UserInput">
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  )
}

export default UserInput;
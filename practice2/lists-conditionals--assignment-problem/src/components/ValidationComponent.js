import React from 'react';

const Validation = (props) => {

  return (
    <div>
      {props.length > 5 ? "text long enough" : "text too short"}
    </div>
  )
};


export default Validation;
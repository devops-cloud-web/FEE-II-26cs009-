


import React from 'react'

const InputField = ({type,name,placeholder,value,onChange}) => {
  return (
    <div>
       <input type={type} name={name}  value={value}
       placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default InputField



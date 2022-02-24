import React from 'react';
import { GoSearch } from 'react-icons/go';

const Input = ({ user, setUser }) => {
  return (
    <form
      className='input'
      onSubmit={(e) => {
        e.preventDefault();
        console.log(user);
      }}
    >
      <input type='text' name='' id='' placeholder='Username' value={user} onChange={(e)=>setUser(e.target.value)}/>
      <GoSearch/>
    </form>
  );
};

export default Input;

import React from 'react';
import { GoSearch } from 'react-icons/go';

const Input = ({ user, setUser,search,submit }) => {
  return (
    <form
      className='input'
      onSubmit={submit}
    >
      <input type='text' name='' id='' placeholder='Username' value={user} onChange={(e)=>setUser(e.target.value)}/>
      <GoSearch onClick={search}/>
    </form>
  );
};

export default Input;

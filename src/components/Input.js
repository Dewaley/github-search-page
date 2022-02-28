import React from 'react';
import { GoSearch } from 'react-icons/go';

const Input = ({ setUser, submit }) => {
  return (
    <form onSubmit={submit}>
      <input
        type='text'
        name=''
        id=''
        placeholder='Username'
        onChange={(e) => setUser(e.target.value)}
        className='input'
      />
      <GoSearch onClick={submit} />
    </form>
  );
};

export default Input;

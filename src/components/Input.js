import React from 'react';
import { GoSearch } from 'react-icons/go';

const Input = ({ setUser, submit,user }) => {
  return (
    <form onSubmit={submit}>
      <input
        type='text'
        name=''
        id=''
        placeholder='Username'
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className='input'
      />
      <GoSearch onClick={submit} className="search" />
    </form>
  );
};

export default Input;

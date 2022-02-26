/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Input from './components/Input';
import { GoMarkGithub } from 'react-icons/go';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState('1');
  const [list, setList] = useState([]);
  var pager = document.querySelectorAll('.pager');
  const inputBar = document.querySelector('input');
  const pages = [];
  var pagination;

  const getUsers = async (e) => {
    const url = `https://api.github.com/search/users?q=${user}&page=${page}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    const response = data.items;
    const count = data.total_count;
    pagination = Math.ceil(count / 30);
    if (pagination > 5) {
      pagination = 5;
    }
    for (var i = 1; i <= pagination; i++) {
      pages.push(i);
    }
    pager = document.querySelectorAll('.pager');
    setUsers(response);
    setPage('1');
    setList(pages);
    inputBar.value = '';
  };
  const submit = (e) => {
    e.preventDefault();
    getUsers();
  };

  
  useEffect(()=>{
    
  return
  },[page,list])    

useEffect(() => {
  pager.forEach((number) => {
    if (page === number.innerHTML) {
      number.classList.add('active');
    } else {
      number.classList.remove('active');
    }
  });

  return () => {
    fetch(`https://api.github.com/search/users?q=${user}&page=${page}`)
        .then(res => {
          res.json();
          console.log(res.json())
        })
      }
}, [page,list])

  return (
    <div className='App'>
      <header>
        <h1>
          <a href='google.com'>
            <GoMarkGithub className='logo' size={20} />
            <span>Github User Search</span>
          </a>
        </h1>
        <Input setUser={setUser} getUsers={getUsers} submit={submit} />
      </header>
      {users !== [] && (
        <div className='main'>
          <div className='pageIndentation'>
            <span className='pager'></span>
            {list.map((indent, index) => (
              <span
                className='pager'
                key={index}
                onClick={() => {
                  setPage(index + 1);
                  console.log(index + 1);
                }}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <div className='container'>
            {users.map((profile) => {
              return (
                <section key={profile.id}>
                  <img
                    src={`${profile.avatar_url}`}
                    alt=''
                    className='profilePic'
                  />
                  <p className='username'>{profile.login}</p>
                  <div className='tentative'>
                    <span className='score'>Score: {profile.score}</span>
                    <a href={`github.com/${profile.login}`} className='link'>
                      <GoMarkGithub />
                      github.com/{profile.login}
                    </a>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import './App.css';
import Input from './components/Input';
import { GoMarkGithub } from 'react-icons/go';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState('2');
  const inputBar = document.querySelector('input');
  const pager = document.querySelectorAll('.pager');
  pager.forEach((number) => {
    number.addEventListener('click', () => {
      setPage(number.innerHTML);
      console.log(number.classList);
    });
    if (page === number.innerHTML) {
      number.classList.add('active');
    } else {
      number.classList.remove('active');
    }
  });
  const search = async (e) => {
    if (user === '') {
      alert('Hello World');
    } else {
      const res = await fetch(`https://api.github.com/search/users?q=${user}`);
      const data = await res.json();
      const response = data.items;
      const count = data.total_count;
      setUsers(response);
      console.log(data.total_count);
      inputBar.value = '';
    }
  };
  const submit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <div className='App'>
      <header>
        <h1>
          <a href='google.com'>
            <GoMarkGithub className='logo' size={20} />
            <span>Github User Search</span>
          </a>
        </h1>
        <Input setUser={setUser} search={search} submit={submit} />
      </header>
      {users !== [] ? (
        <div className='main'>
          <div className='pageIndentation'>
            <span className='pager active'>1</span>
            <span className='pager'>2</span>
            <span className='pager'>3</span>
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
      ) : (
        <div>Error</div>
      )}
    </div>
  );
}

export default App;

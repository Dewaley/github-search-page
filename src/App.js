import './App.css';
import Input from './components/Input';
import { GoMarkGithub } from 'react-icons/go';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const search = async () => {
    const res = await fetch(`https://api.github.com/search/users?q=${user}`);
    const data = await res.json();
    const response = data.items;
    setUsers(response);
    console.log(response);
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
        <Input user={user} setUser={setUser} search={search} submit={submit} />
      </header>
      {users !== {} && (
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
      )}
    </div>
  );
}

export default App;

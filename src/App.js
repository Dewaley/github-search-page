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
        <section>
          {users.map((profile) => {
            return (
              <div>
                <img src={`${profile.avatar_url}`} alt='' className='profilePic'/>
                <p>
                  {profile.login}
                </p>
                <div className="tentative">
                  <span>Score: {profile.score}</span>
                  <a href={`github.com/${profile.login}`}>github.com/{profile.login}</a>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}

export default App;

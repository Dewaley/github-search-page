import './App.css';
import Input from './components/Input';
import {GoMarkGithub} from 'react-icons/go'
import {useState} from 'react'

function App() {
  const [user,setUser]= useState('')
  return (
    <div className='App'>
      <header>
        <h1>
          <a href='google.com'>
            <GoMarkGithub className='logo' size={20}/>
            <span>Github User Search</span>
          </a>
        </h1>
        <Input user={user} setUser={setUser}/>
      </header>
    </div>
  ); 
}

export default App;

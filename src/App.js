import './App.css';
import Input from './components/Input';
import {GoMarkGithub} from 'react-icons/go'

function App() {
  return (
    <div className='App'>
      <header>
        <h1>
          <a href=''>
            <GoMarkGithub className='logo' size={20}/>
            <span>Github User Search</span>
          </a>
        </h1>
        <Input />
      </header>
    </div>
  ); 
}

export default App;

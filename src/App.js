import React, {useState} from 'react';
import logo from './logo.svg';

import './App.css';

import AddUser from './Component/User/AddUser';
import Userlist from './Component/User/Userlist'

function App() {
  const [Userslist, setUserlist] = useState([])

  const formHandler = (uName, uAddress, uPhoneline, uMail, uDate) => {
    setUserlist((prevUserlist) => {
      return [...prevUserlist, { name: uName, address: uAddress, phoneline: uPhoneline, date: uDate, mail: uMail, id: Math.random().toString() }]
    })
    
  }


  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        
          <AddUser onAddUser={formHandler} />
          <Userlist users ={Userslist} />
        
        </header>
      </div>
    </React.Fragment>

    
  );
}

export default App;

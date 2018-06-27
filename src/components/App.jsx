import React from 'react'
import TicketList from './TicketList'
import Header from './Header'
import NewTicketForm from './NewTicketForm';
import { Switch, Route } from 'react-router-dom';

function App(){
  let appStyle = {
    backgroundColor: 'salmon',
      border: '5px solid green'
  }
  return (
    <div style={appStyle}>
      <Header/>
      <switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </switch>
    </div>
  );
}

export default App

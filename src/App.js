import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactDetails from './components/ContactDetails';
import axios from 'axios';
import EditContact from './components/EditContact';
import Navbar from './components/Navbar';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const addContactHandeler = async (contact) => {
    const request = {
      id: new Date().getTime().toString(), ...contact
    }
    const response = await axios.post("http://localhost:3006/contacts", request)
    setContacts([...contacts, response.data])
  }
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== '') {
      const newContactList = contacts.filter((contact) => {
        return (Object.values(contact).join(' ').toLowerCase().includes(searchTerm));
      })
      setSearchResults(newContactList)
    } else {
      setSearchResults(contacts)
    }

  }
  //retrive contacts
  const retriveContacts = async () => {
    const response = await axios.get("http://localhost:3006/contacts")
    return response.data
  }
  const removeContactHandeler = async (id) => {
    await axios.delete(`http://localhost:3006/contacts/${id}`)
    const updateContacts = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(updateContacts)
  }
  const updateContactHandeler = async (contactUpdate) => {
    console.log(contactUpdate);
    const response = await axios.put(`http://localhost:3006/contacts/${contactUpdate.id}`, contactUpdate)
    setContacts(contacts.map((contact) => {
      return contact.id === response.data.id ? { ...response.data } : contact
    }))
  }
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts()
      if (allContacts)
        setContacts(allContacts)
    }
    getAllContacts()
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar term={searchTerm} searchKeyword={searchHandler} />
        <Switch>
          <Route exact path={'/add'} render={(props) => (<AddContact {...props} addContactHandeler={addContactHandeler} />)}></Route>
          <Route exact path={'/edit'} render={(props) => (<EditContact {...props} updateContactHandeler={updateContactHandeler} />)}></Route>

          <Route exact path={'/'} render={(props) => (<ContactList {...props} contacts={searchTerm.length < 1 ? contacts : searchResults} removeContactHandeler={removeContactHandeler} />)}></Route>
          <Route exact path={'/contact/:id'} component={ContactDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

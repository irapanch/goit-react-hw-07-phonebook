import React from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { ContactList } from './ContactList';

const App = () => {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;

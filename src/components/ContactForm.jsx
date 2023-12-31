import React, { useState } from 'react';

import {
  StyledForm,
  StyledTitle,
  StyledDesc,
  StyledBtn,
} from '../styles/App.Styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const findByName = contacts.find(contact => contact.name === name);
    if (!findByName) {
      dispatch(addContactThunk({ name, phone }));
    } else alert(`${findByName.name} is already in contacts`);
    setName('');
    setPhone('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle>Phonebook</StyledTitle>
      <StyledDesc>Name</StyledDesc>
      <input
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
      <StyledDesc>Phone number</StyledDesc>
      <input
        type="tel"
        name="number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="XXX-XXX-XXXX"
      />

      <StyledBtn type="submit">Add Contact</StyledBtn>
    </StyledForm>
  );
};

export default ContactForm;

const express = require('express');
const router = express.Router();
const { Contact, addContact, getContacts } = require('../models/Contact');
const { validateContact, handleValidationErrors } = require('../middleware/validation');

router.post('/', validateContact, handleValidationErrors, (req, res) => {
  const { name, email, phone } = req.body;
  const contact = new Contact(name, email, phone);
  addContact(contact);
  res.status(201).json({ message: 'Contact added successfully', contact });
});

router.get('/', (req, res) => {
  const contacts = getContacts();
  res.json(contacts);
});

module.exports = router;
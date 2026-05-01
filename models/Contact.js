let contacts = [];

class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

function addContact(contact) {
  contacts.push(contact);
}

function getContacts() {
  return [...contacts].sort((a, b) => a.name.localeCompare(b.name));
}

module.exports = { Contact, addContact, getContacts };
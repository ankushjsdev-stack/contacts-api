const express = require('express');
const app = express();
const contactsRouter = require('./routes/contacts');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

app.use('/contacts', contactsRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
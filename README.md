# Contacts API

A simple REST API for managing contacts using in-memory storage.

## Features

- Clean code structure with separation of concerns
- Input validation for POST requests
- Error handling for invalid requests and server errors
- Sorted contact list by name

## Endpoints

### POST /contacts
Add a new contact.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890"
}
```

**Response (201):**
```json
{
  "message": "Contact added successfully",
  "contact": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890"
  }
}
```

**Validation Errors (400):**
```json
{
  "errors": [
    {
      "msg": "Name is required",
      "param": "name",
      "location": "body"
    }
  ]
}
```

### GET /contacts
Retrieve all contacts sorted by name.

**Response (200):**
```json
[
  {
    "name": "Alice",
    "email": "alice@example.com",
    "phone": "111-222-3333"
  },
  {
    "name": "Bob",
    "email": "bob@example.com",
    "phone": "444-555-6666"
  }
]
```

## Setup and Running

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```

The server will run on port 3000 by default. You can change the port by setting the `PORT` environment variable.

## Tech Stack

- Node.js
- Express.js
- express-validator for input validation

## Testing

You can test the API using tools like curl, Postman, or any HTTP client.

A Postman collection file (`Contacts API.postman_collection.json`) is included for easy testing in Postman. It includes requests for valid additions, retrieval, and validation error scenarios. Set up a Postman environment with `baseUrl` variable set to `http://localhost:3000`.

Example POST request:
```
curl -X POST http://localhost:3000/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","phone":"987-654-3210"}'
```

Example GET request:
```
curl http://localhost:3000/contacts
```
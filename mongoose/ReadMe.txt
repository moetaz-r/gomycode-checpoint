# Express-Routing Project

This project demonstrates the use of Mongoose with Node.js to interact with a MongoDB database. It includes examples of creating, reading, updating, and deleting documents, as well as chaining query helpers for advanced data manipulation.

## Features

- **Database Connection**: Connects to a MongoDB database using Mongoose.
- **Create Documents**: Adds single and multiple documents to the database.
- **Read Documents**: Retrieves documents based on various criteria.
- **Update Documents**: Updates specific fields in documents.
- **Delete Documents**: Deletes single or multiple documents.
- **Query Helpers**: Chains query helpers for sorting, limiting, and selecting fields.

## Prerequisites

- Node.js installed on your system.
- MongoDB database connection string in a `.env` file under the key `MONGO_URI`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amenia859-collab/Express-Routing.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Express-Routing
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node server.js
   ```
2. The server will connect to the MongoDB database and perform the operations defined in `server.js`.

## File Structure

- `server.js`: Main file containing the database operations.
- `models/Person.js`: Mongoose schema and model for the `Person` collection.
- `.env`: Environment file containing the MongoDB connection string.

## Example Operations

- **Create a Document**:
  ```javascript
  const newPerson = new Person({
    name: "Alice Johnson",
    age: 32,
    favoriteFoods: ["ice cream", "chocolate"],
  });
  newPerson.save();
  ```

- **Find Documents**:
  ```javascript
  Person.find({ name: "John Doe" });
  ```

- **Update a Document**:
  ```javascript
  Person.findByIdAndUpdate(id, { age: 35 });
  ```

- **Delete a Document**:
  ```javascript
  Person.findOneAndDelete({ name: "John Doe" });
  ```

## License

This project is licensed under the MIT License.
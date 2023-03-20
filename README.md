# Friendbase

Friendbase is a web-based application that allows you to store and manage your contact list of friends. It is built using Node.js and MongoDB as the database. With Friendbase, you can easily add, edit, and delete your friend's contact details.

![friendbase](https://user-images.githubusercontent.com/60400251/226363411-e3aea66a-07ea-4e8e-aef3-a4c6c4a6cb36.png)

## Features

- Add a new friend to your contact list with their name, email, phone number, and address
- Edit an existing friend's contact details
- Delete a friend from your contact list
- Search for a friend in your contact list by name or email
- User-friendly UI for easy navigation

## Installation

1. Clone the repository to your local machine.
    - `git clone https://github.com/<username>/friendbase.git`

2. Install the dependencies.
    - `cd friendbase`
    - `npm install`

3. Set up the database connection. 
    - Create a MongoDB database named `friendbase`.
    - Create a collection named `friends`.
    - Create a user with read/write access to the `friendbase` database.

4. Create a `.env` file in the root directory of the project and add the following configuration details.
    - `DB_URI=mongodb://<username>:<password>@<host>:<port>/friendbase`
    - `PORT=8000`

5. Start the server.
    - `npm start`


## API Endpoints

Friendbase provides the following API endpoints to perform CRUD operations on the contacts collection.

| Endpoint | HTTP Method | Description |
| --- | --- | --- |
| `/my-contacts` | GET | Get all contacts |
| `/create-contact` | POST | Add a new contact |
| `/delete-contact/:id` | GET | Delete a contact by ID |

## Technologies Used

- Node.js
- MongoDB
- Express.js
- Bootstrap
- Handlebars

## Contributing

Contributions to Friendbase are always welcome! Please feel free to submit a pull request or create an issue if you encounter any problems or have suggestions for improvement.

## License

Friendbase is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

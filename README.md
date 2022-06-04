I developed an app for blogging
First, there is the backend service, which manages users and posts, and stores the data in MongoDB.
In terms of posts, I developed a full crud.
When a user wants to connect, he sends a request to connect and then logs in. An userID can be used to delete, update, and find a user.
Secondly, there is a client written in react that lets you sign up, log in, write posts, see the entire feed of posts, see a single post, and see a post by the user.
Lastly, Radis has a service that counts how many times someone has connected to the server.

to start the project:
docker compose up
Open http://localhost:3000 to view the client in browser.
Open http://localhost:5001 to view the server in browser.

youtube link :
https://www.youtube.com/watch?v=J0yKlZq9zKs



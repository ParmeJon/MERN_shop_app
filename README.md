# MERN STACK SHOPPING APP PRACTICE.
- This is a simple application to practice the MERN STACK

MongoDB
Express
React
NodeJS

## What was involved?

- mongoose to interact with database (ODM)
- dotenv to hide passwords and keys
- redux to manage state

## Followed This Tutorial
- Thank you Traversy Media!
https://www.youtube.com/watch?v=PBTYxXADG_k

## Setup
create your own .env file with DB_USER and a DB_PASSWORD connected to your mongodb atlas collection.

npm install
node run client-install

node run dev


## additional comments

Fixed a url deprecation warning with:
mongoose
  .connect(db, {useNewUrlParser: true})

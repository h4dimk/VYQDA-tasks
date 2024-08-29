# Overview

This repository contains solutions for three React.js tasks, each demonstrating different aspects of React.js integration and API interaction. The tasks are organized into separate folders: **Task 1**, **Task 2**, and **Task 3**.

## Task 1: React.js Frontend Task

**Objective:** Create a simple HTML page with React.js without using Node.js.

### Instructions

1. The project is a simple HTML page using React.js and React DOM.
2. Scripts used:
   - `<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>`
   - `<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>`
3. Follow the [React documentation](https://reactjs.org/docs/add-react-to-a-website.html) for integrating React.js into an HTML page.
4. Implement a table format where every column is editable.
5. The frontend should be prepared to post the edited data to an API endpoint (backend implementation is not required).

### Folder Structure

- `Task 1/`: Contains the HTML file and React.js code for this task.

## Task 2: Notes Web App

**Objective:** Create a notes web app with a MySQL database.

### Instructions

1. The web app should have a simple design.
2. Implement functionality to add and delete notes.
3. Data should be stored in a MySQL database.

### Folder Structure

- `Task 2/frontend/`: Contains the React.js code for the notes web app.
- `Task 2/backend/`: Contains the necessary configurations and code to interact with the MySQL database.

## Task 3: API Interaction

**Objective:** Post data to an API endpoint and display response headers on the page.

### Instructions

1. Post the variable `phonenumber` to the API endpoint: [https://chimpu.xyz/api/post.php](https://chimpu.xyz/api/post.php).
2. Capture and display the response headers on the page.
3. Use the React integration method from [React documentation](https://reactjs.org/docs/add-react-to-a-website.html).

### Folder Structure

- `Task 3/`: Contains the React.js code to post data and display response headers.

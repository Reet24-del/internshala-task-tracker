# MERN Stack Task Tracker

This is a Full Stack Task Tracker Web Application built using the MERN stack (MongoDB, Express, React, Node.js) for the COLL-EDGE CONNECT Full Stack Developer Intern assignment.

## Features Included

### Mandatory Features
- **CRUD Operations**: Create, Read, Update, and Delete tasks efficiently.
- **Form Validation**: Both frontend (React) and backend (Mongoose) validation.
- **REST APIs**: Structured, modular RESTful APIs using Express.
- **MongoDB Integration**: Robust data storage using Mongoose schema and models.
- **Responsive UI**: A sleek, mobile-first, fully responsive design using CSS variables.
- **Dynamic Updates**: Real-time state updates using React hooks without page refreshes.

### Bonus Features Implemented
- **Filtering**: Filter tasks based on their status (All, Pending, In Progress, Completed).
- **Sorting**: Sort tasks by Newest, Oldest, or Due Date.
- **Notifications**: Interactive toast notifications for user actions (using `react-hot-toast`).
- **Reusable Components**: Code is modularized into reusable React components (`TaskItem`, `TaskForm`, `TaskList`, `Controls`).
- **Environment Variables**: Integrated `dotenv` for secure backend and Vite environment variables for the frontend.
- **Premium Aesthetics**: A stunning dark mode user interface featuring glassmorphism and subtle animations.

## Tech Stack
- **Frontend**: React.js (Vite), Axios, react-icons, date-fns
- **Backend**: Node.js, Express.js, Mongoose, cors
- **Database**: MongoDB Atlas

## Getting Started Locally

### 1. Database Setup
Ensure you have a MongoDB instance running or use MongoDB Atlas. Get your connection string.

### 2. Backend Setup
```bash
cd backend
npm install
```
- Create a `.env` file in the `backend` directory based on `.env.example`:
  ```env
  PORT=5000
  MONGO_URI=your_mongodb_connection_string_here
  ```
- Run the backend:
  ```bash
  npm run dev
  ```

### 3. Frontend Setup
```bash
cd frontend
npm install
```
- Create a `.env` file in the `frontend` directory:
  ```env
  VITE_API_URL=http://localhost:5000/api/tasks
  ```
- Run the frontend:
  ```bash
  npm run dev
  ```
Open `http://localhost:5173` in your browser.

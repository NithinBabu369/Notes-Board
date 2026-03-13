📝 Notes-Board

A full-stack, responsive note-taking application built with the MERN stack. This project allows users to create, manage, and organize digital sticky notes with a focus on speed and a clean user interface.

🚀 Live Demo: https://notes-board-app-mern.onrender.com

🌟 Features

Full CRUD Functionality: Create, Read, Update, and Delete notes in real-time.

Persistent Storage: Data is stored securely in a MongoDB Atlas database.

Responsive Design: Fully optimized for Mobile, Tablet, and Desktop using Tailwind CSS.

Fast Performance: Built with Vite for near-instant Hot Module Replacement (HMR).

RESTful API: Decoupled Backend and Frontend architecture.

🛠️ Tech Stack

Frontend:

React.js - UI Library

Tailwind CSS - Styling

Vite - Build Tool

Backend:

Node.js - Runtime Environment

Express.js - Web Framework

MongoDB - Database (NoSQL)

Mongoose - ODM for MongoDB

⚙️ Installation & Setup

To run this project locally, follow these steps:

1. Clone the repository

Bash
git clone https://github.com/NithinBabu369/Notes-Board.git
cd Notes-Board

2. Setup the env file

Navigate to the Backend folder: cd Backend
Create a .env file and add the following variables with your values:

MONGO_URI=your_mongodb_connection_string

PORT=3000

UPSTASH_REDIS_REST_URL=get from redis site

UPSTASH_REDIS_REST_TOKEN=get from redis site

NODE_ENV=production

3. Install dependencies and build the application
   
Open a new terminal and navigate to the root of the application

Install dependencies: npm run build

4. Start the development server: npm run start

👤 Author
Nithin Babu B R

GitHub: @NithinBabu369

Live Project: Notes-Board

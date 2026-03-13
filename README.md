# Notes-Board-MERN

A full-stack, responsive note-taking application built with the MERN stack. This project allows users to create, manage, and organize digital sticky notes with a focus on speed and a clean user interface.

🚀 Live Demo: [Visit Now](https://notes-board-app-mern.onrender.com/)

## 🌟 Features

* Full CRUD Functionality: Create, Read, Update, and Delete notes in real-time.

* Persistent Storage: Data is stored securely in a MongoDB Atlas database.

* Responsive Design: Fully optimized for Mobile, Tablet, and Desktop using Tailwind CSS.

* Fast Performance: Built with Vite for near-instant Hot Module Replacement (HMR).

* RESTful API: Decoupled Backend and Frontend architecture.

## 💻 Tech Stack

### Frontend:

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

### Backend:

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)

## ⚙️ Installation & Setup

Follow these steps to get a local copy up and running:

### 1. Clone the Repository

```bash
git clone [https://github.com/NithinBabu369/Notes-Board.git](https://github.com/NithinBabu369/Notes-Board.git)
cd Notes-Board
```

### 2. Environment Configuration
Navigate to the Backend folder and create a .env file:

```
cd Backend
touch .env
```

Add the following variables to your .env file:

```
MONGO_URI=your_mongodb_connection_string

PORT=3000

UPSTASH_REDIS_REST_URL=get from redis site

UPSTASH_REDIS_REST_TOKEN=get from redis site

NODE_ENV=production
```

### 3. Install Dependencies & Build 
   
From the root directory, run the following to install all packages and build the frontend:

```
npm run build
```

### 4. Start the Application

   Once the build is complete, start the production server:
   
   ```
   npm run start
   ```

_________________________________________________________________________

👤 Author
Nithin Babu B R

GitHub: @NithinBabu369

Live Project: Notes-Board



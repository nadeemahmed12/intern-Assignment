# intern-Assignment

# Backend Assignment System

This is a **intern-assignment** built using Node.js, Express.js, and MongoDB. The system manages assignments between **Users** and **Admins**. Users can upload assignments, and Admins can accept or reject them.

---

## Features

### User Functionalities:

1. Register and log in as a user.
2. Upload assignments with the following details:
   - **Task Description**
   - **Admin** assigned to the task.
3. Fetch all available Admins.

### Admin Functionalities:

1. Register and log in as an admin.
2. View all assignments tagged to them.
3. Accept or reject assignments.

---

## API Endpoints

### User Routes

1. **Register User**

   - **POST** `/user/register`
   - **Body Example:**
     ```json
     {
       "username": "nadeem",
       "password": "1230",
       "role": "User"
     }
     ```

2. **Login User**

   - **POST** `/user/login`
   - **Body Example:**
     ```json
     {
       "username": "nadeem",
       "password": "1230"
     }
     ```

3. **Upload Assignment**

   - **POST** `/user/upload`
   - **Body Example:**
     ```json
     {
       "task": "Complete the backend assignment",
       "admin": "674c89b0a90866f2f7f76b71"
     }
     ```

4. **Fetch All Admins**
   - **GET** `/user/admins`

---

### Admin Routes

1. **Register Admin**

   - **POST** `/admin/register`
   - **Body Example:**
     ```json
     {
       "username": "ahmed",
       "password": "1234"
     }
     ```

2. **Login Admin**

   - **POST** `/admin/login`
   - **Body Example:**
     ```json
     {
       "username": "ahmed",
       "password": "password1234"
     }
     ```

3. **View Tagged Assignments**

   - **GET** `/admin/getassignments`

4. **Accept an Assignment**

   - **POST** `/admin/assignments/:id/accept`

5. **Reject an Assignment**
   - **POST** `/admin/assignments/:id/reject`

---

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Middleware:** Custom middleware for role-based authorization.

---

## Installation

### Prerequisites

- Node.js installed
- MongoDB running locally or on a cloud service like MongoDB Atlas

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/nadeemahmed12/intern-Assignment.git
   ```

2.Navigate to the project directory:
cd intern-Assignment

3.Install dependencies:
npm install

4.Start the server:
nodemon server.js

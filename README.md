
# Apollo Clone

This is a full-stack application that replicates the basic functionality of Apollo 24/7 for doctor listings and doctor management.

## Features

### Frontend:
- **Doctor Search**: Allows users to search for doctors based on name, fee, location, experience, and specialty.
- **Filters**: Enables filtering doctors by minimum fee, maximum fee, experience, location, and specialty.
- **Pagination**: Implemented pagination to display a limited number of doctors per page, improving performance.
- **Add New Doctor**: Form to add a new doctor to the platform with details like name, fees, experience, location, and specialty.
- **Delete Doctor**: Option to delete a doctor by clicking a delete button on each doctor's card.
- **Responsive Design**: Fully responsive layout using Tailwind CSS for mobile-first design.

### Backend:
- **Doctor CRUD Operations**: Backend implemented using Express.js to manage doctor data with the ability to create, read, and delete doctor records.
- **Filters and Pagination**: Supports searching and filtering doctors based on query parameters and pagination.
- **Validation**: Ensures valid data when adding doctors with validation on name, fees, experience, and specialty.

## Tech Stack

### Frontend:
- **React**: For building interactive and dynamic user interfaces.
- **Next.js**: A React framework for server-side rendering and building scalable web applications.
- **Tailwind CSS**: A utility-first CSS framework for custom and responsive styling.
- **React Icons**: For adding vector icons to the UI.

### Backend:
- **Node.js**: JavaScript runtime to build the backend server.
- **Express.js**: Web framework for Node.js for creating API endpoints.
- **MongoDB**: NoSQL database for storing doctor data.
- **Mongoose**: MongoDB object modeling tool for schema-based solutions.
- **dotenv**: For managing environment variables.

## Installation Guide

### Prerequisites

- Node.js installed on your machine (You can download it from [here](https://nodejs.org/)).
- MongoDB running locally or using a cloud-based solution like MongoDB Atlas.
---

## Installation Guide

### Prerequisites
Make sure you have the following installed:
- Node.js (>= 14.x)
- npm (>= 6.x) or Yarn (>= 1.22)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/apollo-clone.git
cd apollo-clone
```

### 2. Frontend (React)
#### Navigate to the frontend directory:
```bash
cd frontend
```

#### Install dependencies:
```bash
npm install
```

#### Start the frontend:
```bash
npm start
```

The frontend will run on `http://localhost:3000/specialties/general-physician-internal-medicine`.

### 3. Backend (Node.js & Express)
#### Navigate to the backend directory:
```bash
cd ../backend
```

#### Install dependencies:
```bash
npm install
```

#### Setup environment variables:
Create a `.env` file in the `backend` directory and add your environment variables like:

```env
MONGO_URI=your_mongo_db_connection_string
PORT=5000
```

#### Start the backend:
```bash
npm start
```

The backend will run on `http://localhost:5000`.

---


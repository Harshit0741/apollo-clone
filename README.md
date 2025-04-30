
# Apollo Clone

This is a full-stack application that replicates the basic functionality of Apollo 24/7 for doctor listings and doctor management.

## Features

### Frontend
- **Doctor Listing**: View doctors based on various filters like name, location, fee, experience, and specialty.
- **Add Doctor**: Form to add new doctors to the list.
- **Delete Doctor**: Option to delete a doctor from the list (appears on hover).
- **Search**: Search doctors by different criteria (name, fee, location, experience).
- **Pagination**: Pagination for navigating through doctor listings.
  
### Backend
- **Add Doctor**: API to add a new doctor to the system.
- **List Doctors**: API to list doctors with filtering and pagination support.
- **Delete Doctor**: API to delete a doctor from the database.

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

The frontend will run on `http://localhost:3000`.

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


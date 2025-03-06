# Lead Management API

This is a simple REST API built using **Node.js**, **Express.js**, and **MongoDB**. It allows users to manage leads by adding and fetching them from a database.

## 📁 Folder Structure

```
src/
├── configs/
│   ├── db.js         # Database connection setup
├── features/
├── controller/
│   ├── leadController.js  # Handles request logic
├── router/
│   ├── leadRoutes.js      # Defines API routes
├── schema/
│   ├── Lead.js            # Mongoose schema for leads
├── service/
│   ├── leadService.js     # Service layer for business logic
├── validation/
│   ├── leadValidation.js  # Joi validation schema
├── index.js               # Main entry point
.env                        # Environment variables
```

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone <repository_url>
cd <project_folder>
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file and add the following:
```sh
MONGO_URI=mongodb://localhost:27017/leadsDB
PORT=5000
```

### 4️⃣ Run the Server
For production:
```sh
npm start
```
For development with auto-restart:
```sh
npm run dev
```

## 🛠 API Endpoints

### 1️⃣ Add a Lead
**POST** `/api/leads`
#### Request Body (JSON)
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "status": "New"
}
```
#### Response
```json
{
  "_id": "65123abc456def789",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "status": "New",
  "createdAt": "2025-03-06T12:00:00.000Z",
  "updatedAt": "2025-03-06T12:00:00.000Z",
  "__v": 0
}
```

### 2️⃣ Fetch All Leads
**GET** `/api/leads`
#### Response
```json
[
  {
    "_id": "65123abc456def789",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "status": "New",
    "createdAt": "2025-03-06T12:00:00.000Z",
    "updatedAt": "2025-03-06T12:00:00.000Z",
    "__v": 0
  }
]
```

## 📌 Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Joi** - Data validation
- **dotenv** - Environment variable management

## 📜 License
This project is open-source and available under the MIT License.

---
🚀 **Developed by Jaydeep**

#  Movie Management API

A backend API built with **Express.js** and **MongoDB** for managing movies.  
Implements **full CRUD operations**, **Swagger/OpenAPI documentation**, and **unit testing**.

---

##  Tech Stack :
- Node.js + Express.js
- MongoDB + Mongoose
- Swagger (swagger-jsdoc + swagger-ui-express)
- Jest + Supertest (unit testing)

---

##  Features :
- Create, Read, Update, Delete (CRUD) movies
- Swagger UI documentation (`/api-docs`)
- RESTful API design with validation
- Unit tests for all CRUD endpoints
- Layered architecture (Controller, Service, DAO)

---

##  Setup Instructions :

### 1. Clone Repository
```bash
git clone https://github.com/<your-username>/movie-management.git
cd movie-management
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Setup Environment

Create a .env file:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/moviedb # your database connection string
```

### 4. Run the Server 
```bash
npm run dev
```

Server will run on: http://localhost:5000


## Swagger Documentation :

After starting the server, open Swagger UI at:
 http://localhost:5000/api-docs
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/c0e4efed-7bb4-4f3c-86d7-ea740292d552" />

 Project Structure :
 ```bash
src/
 ├── controllers/   # Route handlers
 ├── services/      # Business logic
 ├── dao/           # Database access
 ├── models/        # Mongoose models
 ├── routes/        # API routes
 ├── tests/         # Unit tests
```
## API Endpoints :

GET /movies → List all movies

GET /movies/{id} → Get movie by ID

POST /movies → Create a new movie

PUT /movies/{id} → Update movie

DELETE /movies/{id} → Delete movie




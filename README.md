# 🚀 Minimal Social Media Backend

A lightweight social media-style backend built with **Node.js**, **Express**, **Prisma (PostgreSQL)**, and **JWT authentication**. Supports user registration/login, creating posts, follow/unfollow functionality, and personalized user feeds.

---

## 🧱 Tech Stack

- **Node.js** + **Express** – Web framework  
- **PostgreSQL** – Relational database  
- **Prisma ORM** – Database access  
- **JWT (JSON Web Tokens)** – Authentication  
- **Docker** – Containerized environment  

---

## 📦 Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/) (optional if not using Docker)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/social-backend.git
cd social-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/social
JWT_SECRET=your_jwt_secret
PORT=3000
```

### 4. Run Prisma Migrations

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Start the Server

```bash
npm run dev
```

Or with Docker ( Preferred ):

```bash
docker-compose up --build
```

---

## 🔑 Authentication

Authentication is handled via JWT. After logging in or signing up, you'll receive a token that must be passed in the `Authorization` header:

```
Authorization: Bearer <your-token>
```

---

## 🛠️ API Endpoints

### 🔐 Auth

#### Register

```bash
curl --location 'http://localhost:8080/auth/register' \
--header 'Content-Type: application/json' \
--data '{ "username":"Albin1", "password":"test" }'
```

#### Login

```bash
curl --location 'http://localhost:8080/auth/login' \
--header 'Content-Type: application/json' \
--data '{ "username":"Albin1", "password":"test" }'
```

---

### 📝 Posts

#### Create a Post

```bash
curl --location 'http://localhost:8080/posts' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzQ5NjI3ODUzfQ.b63hZi3DhqwkoldH3MBxOtnffa6kjiV-qx90Nd9MUy4' \
--header 'Content-Type: application/json' \
--data '{ "content":" Test Content 2 from Albin1", "mediaUrl":"https://www.gettyimages.com/photos/free" }'
```

#### Get Your Feed

```bash
curl --location --request GET 'http://localhost:8080/posts/feed' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzQ5NjI3ODUzfQ.b63hZi3DhqwkoldH3MBxOtnffa6kjiV-qx90Nd9MUy4' \
--header 'Content-Type: application/json' \
--data '{ "content":" Test Content 2 from Albin1", "mediaUrl":"https://www.gettyimages.com/photos/free" }'
```
#### Get Your Posts

```bash
curl --location --request GET 'http://localhost:8080/posts/posts' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzQ5NjI3ODUzfQ.b63hZi3DhqwkoldH3MBxOtnffa6kjiV-qx90Nd9MUy4' \
--header 'Content-Type: application/json' \
--data '{ "content":" Test Content 2 from Albin1", "mediaUrl":"https://www.gettyimages.com/photos/free" }'
```

---

### 👥 Follow

#### Follow a User

```bash
curl --location 'http://localhost:8080/users/follow/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzQ5NjI3ODUzfQ.b63hZi3DhqwkoldH3MBxOtnffa6kjiV-qx90Nd9MUy4' \
--header 'Content-Type: application/json' \
--data '{ "content":" Test Content 2 from Albin1", "mediaUrl":"https://www.gettyimages.com/photos/free" }'
```

#### Unfollow a User

```bash
curl --location --request DELETE 'http://localhost:8080/users/unfollow/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzQ5NjI3ODUzfQ.b63hZi3DhqwkoldH3MBxOtnffa6kjiV-qx90Nd9MUy4' \
--header 'Content-Type: application/json' \
--data '{ "content":" Test Content 2 from Albin1", "mediaUrl":"https://www.gettyimages.com/photos/free" }'
```

---

## 🧠 Feed Logic

The feed (`/posts/feed`) includes posts made by:

- The current user
- Users the current user is following

Sorted by `createdAt` in **descending** order.

---

## 🔒 Middleware

JWT verification middleware is applied to all protected routes (`/posts`, `/follow`). It checks for a valid token and attaches the `userId` to `req.user`.


---

## 📜 License

MIT © [Albin Thomas]

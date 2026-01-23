# Social Media Backend

Node.js social platform with JWT auth, user posts, likes, and profile picture uploads.

## Features

**Authentication**
- JWT-based auth with cookies on page
- Bcrypt password hashing
- Protected routes via middleware

**User Management**  
- User registration (username, email, name, age)
- Profile picture upload (Multer)
- User profiles with post history

**Posts**
- Create text posts
- Edit your posts
- Delete your posts  
- Like/unlike any post
- View all your posts on profile

## Tech Stack

- Express.js
- MongoDB + Mongoose
- EJS templates
- JWT + bcrypt
- Multer (file uploads)
- Cookie-parser

## Installation

```bash
npm install
```

## Database Setup

Requires MongoDB connection in `./models/user.js` and `./models/post.js`

## Run

```bash
node app.js
```
Server runs on `http://localhost:8080`

## Routes

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | No | Landing page |
| GET | `/login` | No | Login form |
| POST | `/login` | No | Authenticate user |
| POST | `/register` | No | Create account |
| GET | `/logout` | No | Clear session |
| GET | `/profile` | Yes | View your profile + posts |
| GET | `/profile/upload` | No | Upload form |
| POST | `/upload` | Yes | Update profile pic |
| POST | `/post` | Yes | Create post |
| GET | `/edit/:id` | Yes | Edit post page |
| POST | `/update/:id` | Yes | Save post edits |
| GET | `/delete/:id` | Yes | Delete post |
| GET | `/like/:id` | Yes | Toggle like |

## What This Actually Is

A basic social media learning project. Works for understanding Express auth patterns and MongoDB relationships, but needs serious hardening before production. 

Good for: Portfolio starter, learning project  
Bad for: Anything facing real users

## License

Forked from [Amandeepyadav-git/My-First-backend-Sheryians](https://github.com/Amandeepyadav-git/My-First-backend-Sheryians)

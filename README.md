# Freelance Marketplace

A full-stack freelance marketplace platform currently under active development. The backend is complete with a fully secured authentication system, and frontend development is in progress.

---

## Project Status

| Layer | Status |
|---|---|
| Backend — Authentication & Security | Complete |
| Backend — Core API | In Progress |
| Frontend | In Progress |

---

## Backend — Completed

### Authentication System

A production-grade authentication system has been implemented with the following:

- User registration and login with secure credential handling
- JWT-based authentication with token signing and verification
- Protected route middleware to restrict access to authenticated users only
- Role-based access control to differentiate between clients and freelancers

### Security Implementation

Security has been treated as a first-class concern throughout the backend:

**Password Security**
- Passwords are hashed using bcrypt before storage — plain text passwords are never saved to the database
- Salt rounds configured for strong hashing resistance against brute-force attacks

**HTTP Security Headers**
- Helmet.js integrated to set secure HTTP response headers
- Protects against common vulnerabilities including XSS, clickjacking, and MIME-type sniffing

**Data Sanitization**
- Input sanitization applied to prevent NoSQL injection attacks
- Request body validation to reject malformed or unexpected data

**Rate Limiting**
- API rate limiting configured to prevent brute-force and denial-of-service attacks on authentication endpoints

**CORS**
- Cross-Origin Resource Sharing configured to allow only trusted origins

---

## Tech Stack

| Category | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB with Mongoose |
| Authentication | JWT (jsonwebtoken) |
| Password Hashing | bcrypt |
| Security Headers | Helmet.js |
| Environment Config | dotenv |

---

## Getting Started

### Prerequisites

- Node.js v18 or above
- MongoDB (local or Atlas)
- npm or yarn

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Yasir349913/freelance-marketplace.git
cd freelance-marketplace/backend
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:3000
```

**4. Start the development server**

```bash
npm run dev
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/auth/register` | Register a new user | Public |
| POST | `/api/auth/login` | Login and receive JWT token | Public |
| GET | `/api/auth/me` | Get current user profile | Protected |
| POST | `/api/auth/logout` | Logout and invalidate session | Protected |

---

## Upcoming Features

- Freelancer profile creation and portfolio management
- Job posting and bidding system for clients and freelancers
- Proposal management with accept and reject workflows
- Messaging system between clients and freelancers
- Payment integration for milestone-based project payments
- Reviews and ratings system
- Frontend — React.js with Tailwind CSS

---

## Author

**Yasir Maqsood**
- GitHub: [@Yasir349913](https://github.com/Yasir349913)
- LinkedIn: [yasir-maqsood](https://linkedin.com/in/yasir-maqsood)
- Email: yasirmaqsood534@gmail.com

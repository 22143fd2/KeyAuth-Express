# KeyAuth-Express

A secure login and registration system built with **Express.js**, **JWT**, and **SQLite**, powered by a **redeemable key system**.

## Features

* User Registration with Key Validation
* Admin-generated Registration Keys (`daily`, `weekly`, `monthly`, `lifetime`)
* Login using **JWT** Tokens (4h expiry)
* Protected Routes with Middleware
* Single-file SQLite database (`database.db`)
* Simple Web UI for Login, Registration, and Admin Key Creation

## Tech Stack

* **Backend**: Node.js, Express.js, SQLite, JWT, bcrypt
* **Frontend**: Vanilla HTML, CSS, and JS
* **Security**: Helmet, Rate Limiting, Input Validation

## Installation

```bash
git clone https://github.com/yourusername/keyauth-express.git
cd keyauth-express
npm install
```

## Environment Variables

Create a `.env` file in the root:

```
ADMIN_API_KEY=your_admin_key_here
JWT_SECRET=your_super_secret_jwt_key
```

## Usage

```bash
node app.js
```

Navigate to:

* `/register` – User registration page (requires valid key)
* `/login` – User login page (returns a JWT)
* `/adminpanel` – Admin page to generate keys (requires admin API key)

## API Routes

| Endpoint         | Method | Description                            |
| ---------------- | ------ | -------------------------------------- |
| `/api/register`  | POST   | Register a user using a redeemable key |
| `/api/login`     | POST   | Login and receive a JWT token          |
| `/api/createkey` | POST   | Admin route to generate a new key      |

## License

MIT License. Free to use, modify, and distribute.

---

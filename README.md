# ✈️ MERN Flight Booking Application

A comprehensive flight booking application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

## 📋 Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting Started](#getting-started)

---

## ✨ Features

### 🎨 Frontend Features
- **Authentication & Authorization**
  - Sign-In & Sign-Up Pages
  - Token-based authentication system (Passport.js)
  - Secure password hashing
  - User profile page with all user information

- **Flight Booking Experience**
  - City selection (departure & destination)
  - Real-time flight listings from multiple airlines
  - Dynamic seat selection with user-friendly interface
  - Auto-generated passenger information forms
  - Debit card details collection (react-credit-cards)

- **Booking Management**
  - Confirmation page with booking summary
  - Boarding pass generation with transaction ID
  - Ticket cancellation functionality
  - Travel history & upcoming trips

- **Additional Features**
  - Integrated AI chatbot for customer support
  - Additional services (Hotels, Food, Beverages)
  - Seat feature customization (Economy, Business, First Class)

### 🔧 Backend Features
- **Framework & Architecture**
  - Express.js RESTful API
  - MongoDB Atlas cloud database
  - Passport.js authentication middleware
  - JWT token-based session management

- **Security & Data Handling**
  - Password hashing before cloud storage
  - User authentication & authorization
  - Secure API endpoints

---

## 📸 Screenshots

| Page | Preview |
|------|---------|
| **Landing Page** | ![Homepage](documentationResources/homepage.png) |
| **Sign-In Page** | ![Login](documentationResources/login.png) |
| **Flight Selection** | ![Booking](documentationResources/booking.png) |
| **Seat Selection** | ![Seat Selection](documentationResources/seatselection.png) |
| **Payment & Confirmation** | ![Payment](documentationResources/payment.png) |
| **Ticket Cancellation** | ![Cancellation](documentationResources/cancellation.png) |
| **AI Chatbot** | ![Chatbot](documentationResources/aichatbot.png) |

---

## 🛠️ Tech Stack

### Frontend Technologies
| Technology | Purpose |
|-----------|---------|
| [React](https://reactjs.org/) | JavaScript UI library |
| [Webpack](https://webpack.js.org/) | Module bundler |
| [Babel](https://babeljs.io/) | JavaScript transpiler |
| [Bootstrap 4](https://getbootstrap.com/) | CSS framework |
| [SCSS](http://sass-lang.com/) | CSS preprocessor |
| [Axios](https://github.com/axios/axios) | HTTP client |
| [React Router](https://reactrouter.com/) | Client-side routing |
| [React Credit Cards](https://www.npmjs.com/package/react-credit-cards) | Payment UI |

### Backend Technologies
| Technology | Purpose |
|-----------|---------|
| [Node.js](https://nodejs.org/) | JavaScript runtime |
| [Express.js](http://expressjs.com/) | Web framework |
| [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) | Cloud database |
| [Passport.js](http://www.passportjs.org/) | Authentication |
| [JWT](https://jwt.io/) | Token-based auth |

---


## 📦 Prerequisites

Before running this project, ensure you have:

- **Node.js** v8.x or higher
- **npm** v3.x or higher
- **MongoDB Atlas** account

### Verify Installation
```bash
node -v
npm -v
```

---

## 🚀 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/Flight-Booking-App.git
cd Flight-Booking-App
```

### Step 2: Install Dependencies
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

---

## 🎯 Getting Started

### Start Frontend Development Server
```bash
cd frontend
npm start
```
Access at: **http://localhost:3000**

### Start Backend Development Server
```bash
cd backend
npm run devStart
```
Backend runs on: **http://localhost:8080**

### Environment Configuration
Create `.env` in backend directory:
```
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=8080
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

---

## 📝 License

MIT License - feel free to use this project!

---

## 🤝 Contributing

Contributions welcome! Feel free to fork and submit pull requests.

---

## 📧 Support

For questions or issues, please open a GitHub issue.

---

**Happy Booking! ✈️**

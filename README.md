# 📚 Online Book Borrowing Platform

A modern and responsive web application that digitizes the traditional library experience. Users can explore books, filter by categories, and borrow books securely with authentication.

---

## 🌐 Live Website

👉 [https://booknest-psi.vercel.app/]

## 💻 GitHub Repository

👉 [https://github.com/soheldev-codes/BookNest]

---

## 🎯 Project Purpose

This project simulates a real-world online library system where users can:

- Browse books easily
- View detailed information
- Borrow books securely
- Manage their profile

It focuses on performance, security, and modern UI/UX.

---

## 🚀 Key Features

### 🔐 Authentication System

- Email & Password Login/Register
- Google Social Login
- Secure authentication using BetterAuth
- Protected Routes (Book Details & Profile)

### 📖 Book Management

- View all books
- Search books by title
- Filter books by category (Story, Tech, Science)
- Featured books section on homepage

### 📄 Book Details Page (Private Route)

- Detailed information about each book
- Available quantity display
- Borrow button with authentication check

### 👤 User Profile (Private Route)

- View user information
- Update profile (Name & Image)

### 🎨 UI/UX Features

- Fully responsive (Mobile, Tablet, Desktop)
- Smooth animations using Framer Motion & Animate.css
- Toast notifications using React Hot Toast
- Clean UI with Tailwind CSS + DaisyUI

### 🏠 Homepage Sections

- Hero Banner ("Find Your Next Read")
- Marquee (Announcements / New Arrivals)
- Featured Books
- Extra custom sections

---

## 🛠️ Tech Stack

- Next.js
- Tailwind CSS
- DaisyUI
- BetterAuth
- MongoDB

### 📦 Additional Packages

- Framer Motion
- React Hot Toast
- Animate.css
- React Icons

---

## 📊 Data Structure

Books are stored using the following JSON format:

```json
{
  "id": 1,
  "title": "Book Name",
  "author": "Author Name",
  "description": "Short description",
  "category": "Story | Tech | Science",
  "available_quantity": 5,
  "image_url": "image link"
}
```

###🔑 Environment Variables

Create a .env file and add:

NEXT_PUBLIC_BASE_URL=
MONGODB_URI=
BETTER_AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

```
###📱 Responsiveness

The application is fully responsive and optimized for:
Mobile
Tablet
Desktop
```

###📦 Deployment

Deployed using:

Vercel

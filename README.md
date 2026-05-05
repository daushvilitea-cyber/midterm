# 🛒 MyStore – React / Next.js E-commerce App

## 📌 Project Description

This is a simple e-commerce web application built with Next.js (App Router) and React.  
The project includes product listing, product details, cart functionality, and basic user authentication.

The goal of this project is to demonstrate understanding of:
- Client-side and server-side data fetching
- State management with React hooks
- Routing in Next.js
- Working with external APIs
- LocalStorage for persistence

---

## 🚀 Features

### 🛍 Products
- Fetch products from API: https://fakestoreapi.com/products
- Display list of products
- Navigate to product details page (/products/[id])

### 📄 Product Details
- Dynamic routing using [id]
- Fetch single product data
- Display product image, title, description, and price
- Ability to select quantity
- Add product to cart

### 🛒 Cart
- Fetch cart data from API
- Combine cart items with product details
- Increase / decrease product quantity
- Calculate total price
- Store cart data in LocalStorage

### 👤 Profile
- Fetch user data from API: https://fakestoreapi.com/users/3
- Display user information (name, email, phone, address)

### 🔐 Authentication (Client-side)
- Register user (saved in LocalStorage)
- Login with email and password
- Basic validation
- Store auth state (isAuth)

---

## 🧠 Technologies Used

- Next.js (App Router)
- React
- JavaScript (ES6+)
- CSS Modules
- FakeStore API

---


## ⚠️ Notes

- Authentication is simulated (client-side only)
- No backend or database is used


# Project 3: Database Integration — Mastering State Persistence 🚀

Welcome to the repository for **Project 3: Database Integration**, a core milestone in the **DecodeLabs Full Stack Development Industrial Training Program (Batch 2026)**.  

This project demonstrates how to connect a backend application to a **MySQL database**, design relational schemas, and expose **CRUD RESTful APIs** for persistent data management.

---

## 📌 Project OverviewThe primary objective of this project is to move beyond temporary in‑memory states and build a robust **data persistence layer**. By completing this milestone, you’ll learn how to:

- Design relational schemas with **primary keys** and **foreign keys**  
- Integrate backend logic with a permanent database  
- Implement **CRUD operations** via RESTful endpoints  
- Ensure **data integrity and security** in your application  

---

## 🛠️ Tech Stack
- **Backend:** Node.js + Express.js  
- **Database:** MySQL (Relational, ACID‑compliant)  
- **Driver:** `mysql2` npm package  
- **Tools:** Postman for API testing  

---

## 📂 Database Schema
Two core entities are modeled:

- **Users**
  ```sql
  CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
  );
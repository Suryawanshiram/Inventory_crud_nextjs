# Full-Stack Inventory Management System with Next.js & Stack Auth

<div align="center">
  <a href="https://inventory-crud-nextjs.vercel.app/" target="_blank">
    <img width="1280" height="720" alt="Inventory Dashboard Screenshot" src="https://github.com/user-attachments/assets/f208a5dc-a6b4-4a90-a3ef-93b9dbc23367" />
  </a>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/-PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/-Stack Auth-FF6B6B?style=for-the-badge&logo=stackauth&logoColor=white" alt="Stack Auth" />
    <img src="https://img.shields.io/badge/-Lucide Icons-FD4D4D?style=for-the-badge&logo=lucide" alt="Lucide Icons" />
  </div>
  <h3 align="center">Create a Complete Inventory Management System with Authentication, Dashboard Analytics, and CRUD Operations</h3>
</div>

## 📋 Table of Contents

1. [Introduction](#-introduction)
2. [Live Demo](#-live-demo)
3. [Tech Stack](#-tech-stack)
4. [Features](#-features)
5. [Quick Start](#-quick-start)
6. [Screenshots](#-screenshots)
7. [Deployment](#-deployment)
8. [Resources](#-resources)
9. [License](#-license)

---

## 🚀 Introduction

Build a **full-stack inventory management system** with Next.js 15, Stack Auth, Prisma, and PostgreSQL. Includes authentication, dashboard analytics, product CRUD, search, and pagination. Ideal for learning modern web development and building production-ready apps.

---

## 🌐 Live Demo

Check the live project here: [https://inventory-crud-nextjs.vercel.app/](https://inventory-crud-nextjs.vercel.app/)

---

## ⚙️ Tech Stack

- **Next.js 15** – Server Components & App Router
- **React 19** – UI components
- **TailwindCSS** – Utility-first CSS
- **Stack Auth** – Authentication
- **Prisma** – Database ORM
- **PostgreSQL** – Relational database
- **Lucide Icons** – Icon library
- **Recharts** – Charts for analytics
- **TypeScript** – Type safety
- **Vercel** – Hosting

---

## ⚡️ Features

- 🔐 User authentication with Stack Auth  
- 📊 Dashboard with real-time metrics & charts  
- 📦 Product CRUD operations  
- 🔍 Search and filter products  
- 📄 Pagination for large datasets  
- ⚠️ Low stock alerts  
- 💰 Inventory value tracking  
- 📈 Visual analytics & weekly reports  
- 📱 Responsive design  
- 🎨 Modern UI with TailwindCSS  
- 🔄 Real-time UI updates after changes

---

## 👌 Quick Start

### Prerequisites

- Node.js v18+
- Git
- PostgreSQL or cloud database

### Setup

```bash
git clone https://github.com/yourusername/nextjs-fullstack-inventory.git
cd nextjs-fullstack-inventory
npm install
Create a .env.local file:

DATABASE_URL="postgresql://username:password@localhost:5432/inventory_db"
NEXT_PUBLIC_STACK_PROJECT_ID="your_stack_project_id"
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="your_publishable_key"
STACK_SECRET_SERVER_KEY="your_secret_key"


Run migrations and generate Prisma client:

npx prisma migrate dev
npx prisma generate


Start the dev server:

npm run dev


Visit http://localhost:3000
.

🖼️ Screenshots

Add screenshots of:

Dashboard

Inventory list

Add Product form

Analytics charts

☁️ Deployment
Vercel

Push code to GitHub

Import repo in Vercel

Add environment variables

Deploy

🔗 Resources

Next.js Docs

Stack Auth Docs

Prisma Docs

Tailwind CSS Docs

Lucide Icons

Recharts Docs

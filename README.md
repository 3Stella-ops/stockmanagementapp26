# Stock Management App

A comprehensive inventory management application built with React, Node.js, Express, and PostgreSQL.

## Features

- 📦 **Product Management**: Add, edit, and manage products with SKU tracking
- 📊 **Real-time Inventory Tracking**: Track stock levels across multiple locations
- 🚨 **Low Stock Alerts**: Automatic notifications when inventory falls below threshold
- 📝 **Transaction History**: Complete audit trail of all stock movements
- 📈 **Analytics & Reporting**: Detailed inventory reports and analytics
- 🔐 **User Authentication**: Secure login with JWT tokens
- 🏢 **Multi-location Support**: Manage inventory across warehouses
- 📱 **Responsive Dashboard**: Real-time inventory overview

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Authentication**: JWT

### Frontend
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios

## Quick Start

### Using Docker (Recommended)
```bash
docker-compose up
```

### Manual Setup

#### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

#### Frontend
```bash
cd frontend
npm install
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Stock
- `GET /api/stock/:productId` - Get stock details
- `POST /api/stock/add` - Add inventory
- `POST /api/stock/remove` - Remove inventory

## License

MIT
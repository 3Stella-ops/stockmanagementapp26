# Getting Started with Stock Management App

## Prerequisites

- Node.js 16+ (or use Docker)
- PostgreSQL 12+ (or use Docker)
- npm or yarn

## Quick Start with Docker

The easiest way to get started is using Docker Compose:

```bash
git clone https://github.com/3Stella-ops/stockmanagementapp26.git
cd stockmanagementapp26
docker-compose up
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **PostgreSQL**: localhost:5432

## Manual Setup

### 1. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your database credentials
# DB_HOST=localhost
# DB_PORT=5432
# DB_USER=postgres
# DB_PASSWORD=postgres
# DB_NAME=stock_management

# Start backend
npm run dev
```

### 2. Database Setup

First, create the database and run migrations:

```bash
# Create database
psql -U postgres -c "CREATE DATABASE stock_management;"

# Run schema
psql -U postgres -d stock_management -f backend/src/database/schema.sql
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start frontend
npm start
```

## Testing the App

### Default Test Credentials

You can create a test account or use these credentials if you seed them:
- **Email**: test@example.com
- **Password**: password123

### API Testing

Use curl, Postman, or any HTTP client:

```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Get Products
curl -X GET http://localhost:5000/api/products \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Key Features

### Dashboard
- Overview of inventory metrics
- Low stock alerts
- Recent product activity

### Inventory Management
- Add/edit/delete products
- Track SKU codes
- Manage product details (price, reorder levels)

### Stock Management
- Add stock to locations
- Remove stock with reasons
- View transaction history

### Reports
- Inventory analytics
- Stock value metrics
- Low stock alerts

## Project Structure

```
stockmanagementapp26/
├── backend/
│   ├── src/
│   │   ├── database/       # Database connection & schema
│   │   ├── routes/         # API routes
│   │   └── server.ts       # Main server file
│   ├── .env.example        # Environment template
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── store/          # Redux store
│   │   └── App.tsx         # Main app component
│   ├── .env.example        # Environment template
│   └── package.json
├── docker-compose.yml      # Docker services
└── README.md
```

## Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=stock_management
JWT_SECRET=your-secret-key-here
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_APP_NAME=Stock Management
```

## Development

### Backend Development

```bash
cd backend
npm run dev      # Start with hot reload
npm run build    # Build for production
npm test         # Run tests
npm run lint     # Lint code
```

### Frontend Development

```bash
cd frontend
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests
```

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000
# Kill process
kill -9 <PID>
```

### Database Connection Error
- Verify PostgreSQL is running
- Check database credentials in .env
- Ensure database exists

### CORS Errors
- Verify CORS_ORIGIN in backend .env
- Check frontend API_URL matches backend

### Docker Issues
```bash
# Clean up Docker
docker-compose down -v
docker-compose up --build
```

## Deployment

See individual deployment guides:
- [Backend Deployment](./backend/DEPLOYMENT.md)
- [Frontend Deployment](./frontend/DEPLOYMENT.md)

## Contributing

1. Create a feature branch
2. Make changes
3. Submit a pull request

## Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

## License

MIT License - see LICENSE file for details

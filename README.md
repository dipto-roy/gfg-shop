# GFG Shop - NestJS API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

A comprehensive e-commerce API built with NestJS featuring User, Seller, and Midu modules with complete CRUD operations.

## 🚀 Quick Start

### Installation
```bash
$ npm install
```

### Development
```bash
# Start development server
$ npm run start:dev

# Access API at: http://localhost:3000
```

---

## 📚 API Documentation

### **Base URL:** `http://localhost:3000`

---

## 👤 User Routes

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/user` | Create new user | `{ name, email, age?, phone? }` |
| GET | `/user` | Get all users | None |
| GET | `/user/:id` | Get user by ID | None |
| PATCH | `/user/:id` | Update user | `{ name?, email?, age?, phone? }` |
| DELETE | `/user/:id` | Delete user | None |

### **User Examples:**

#### Create User
```bash
POST /user
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25,
  "phone": "+1234567890"
}
```

#### Response
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25,
  "phone": "+1234567890",
  "createdAt": "2025-07-23T10:30:00.000Z",
  "updatedAt": "2025-07-23T10:30:00.000Z"
}
```

---

## 🏪 Seller Routes

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/seller` | Create new seller | `{ name, email, phone?, address?, businessType?, registrationNumber? }` |
| GET | `/seller` | Get all sellers | None |
| GET | `/seller/:id` | Get seller by ID | None |
| PATCH | `/seller/:id` | Update seller | `{ name?, email?, phone?, address? }` |
| DELETE | `/seller/:id` | Delete seller | None |

### **Seller Examples:**

#### Create Seller
```bash
POST /seller
Content-Type: application/json

{
  "name": "Electronics Store",
  "email": "contact@electronics.com",
  "phone": "+1234567890",
  "address": "123 Main Street",
  "businessType": "Electronics",
  "registrationNumber": "BUS123456"
}
```

#### Response
```json
{
  "id": 1,
  "name": "Electronics Store",
  "email": "contact@electronics.com",
  "phone": "+1234567890",
  "address": "123 Main Street",
  "businessType": "Electronics",
  "registrationNumber": "BUS123456"
}
```

---

## 🎭 Midu Routes

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/midu/details` | Get default midu info | None |
| GET | `/midu/:id` | Get midu by ID | None |
| POST | `/midu/create` | Create simple user | `{ id, name, email }` |

### **Midu Examples:**

#### Get Details
```bash
GET /midu/details
```
**Response:**
```json
{
  "id": 1,
  "name": "Rabbni",
  "email": "rabbni@example.com"
}
```

#### Get by ID
```bash
GET /midu/123
```
**Response:**
```json
"midu is the best123"
```

#### Create Simple User
```bash
POST /midu/create
Content-Type: application/json

{
  "id": 123,
  "name": "Alice Smith",
  "email": "alice@example.com"
}
```
**Response:**
```json
{
  "id": 123,
  "name": "Alice Smith",
  "email": "alice@example.com",
  "message": "User created successfully",
  "createdAt": "2025-07-23T10:30:00.000Z"
}
```

---

## 🧪 Simple User Routes (Alternative)

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/simple-user` | Create user (all-in-one) | `{ name, email, age?, phone? }` |
| GET | `/simple-user` | Get all users | None |
| GET | `/simple-user/:id` | Get user by ID | None |
| PATCH | `/simple-user/:id` | Update user | `{ name?, email?, age?, phone? }` |
| DELETE | `/simple-user/:id` | Delete user | None |

---

## 📊 Route Summary

| Module | Base Route | Total Routes | Features |
|--------|------------|--------------|----------|
| **User** | `/user` | 5 | Full CRUD with DTOs & Interfaces |
| **Seller** | `/seller` | 5 | Full CRUD with validation |
| **Midu** | `/midu` | 3 | Custom logic & responses |
| **Simple User** | `/simple-user` | 5 | Simplified CRUD |

**Total API Endpoints:** 18

---

## 🔧 Testing with Postman

### Environment Variables
- `baseUrl`: `http://localhost:3000`

### Test Collection
1. Import all routes into Postman
2. Set up environment with base URL
3. Test CRUD operations in sequence:
   - Create → Read All → Read One → Update → Delete

---

## 🛠️ Development Commands

```bash
# Development
$ npm run start:dev

# Production
$ npm run start:prod

# Testing
$ npm run test
$ npm run test:e2e
$ npm run test:cov

# Linting
$ npm run lint
```

---

## 📁 Project Structure

```
src/
├── user/           # User module (with DTOs & interfaces)
├── seller/         # Seller module (full CRUD)
├── midu/           # Midu module (custom logic)
├── app.module.ts   # Main application module
└── main.ts         # Application entry point
```

---

## 🏗️ Architecture

- **Modular Design:** Separate modules for different entities
- **Dependency Injection:** Services injected into controllers
- **Type Safety:** TypeScript interfaces and DTOs
- **Error Handling:** Proper HTTP status codes and messages
- **Validation:** Request body validation with TypeScript types

---
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

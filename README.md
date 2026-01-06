# 🏠 HomeLink — Find & List Homes in Nepal

A simple platform for renters and homeowners in Nepal — built with **Node.js, Express, MongoDB, and React**.

## 🚀 Setup

```bash
git clone https://github.com/Manjit62726/HomeLink.git
cd HomeLink

# Backend
cd api
npm install
# Create .env: MONGODB_URI, JWT_SECRET
npm run dev

# Frontend
cd ../client
npm install
# .env: VITE_API_BASE_URL=http://localhost:5000/api
npm run dev

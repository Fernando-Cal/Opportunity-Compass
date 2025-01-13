# Opportunities & Resources Database

This project is a web application designed to provide a database of opportunities and resources for underrepresented individuals from lower socioeconomic backgrounds. It is built using Next.js, React, TypeScript, and NextUI.

## Features
- **Opportunity Listings**: View, add, edit, and delete opportunities/resources.
- **User-Friendly Interface**: Responsive and visually appealing design using NextUI.

---

## Tech Stack

### Frontend
- **Next.js**: React-based framework for server-side rendering and static site generation.
- **TypeScript**: Ensures type safety and improves developer experience.
- **NextUI**: UI library for clean, pre-styled components.

### Backend
- **Next.js API Routes**: Built-in backend for handling API requests.
- **Prisma**: Modern ORM for connecting to the database and managing schemas.
- **MongoDB**: NoSQL database for storing structured and unstructured data.

### Hosting
- **Vercel**: Deployment and hosting for the frontend and API.

---

## Installation

### Prerequisites
- Node.js (>=16.x)
- pnpm (>=8.x)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/opportunities-database.git
   cd opportunities-database
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables:
   Create a `.env` file and add:
   ```env
   DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/mydatabase
   ```
4. Run Prisma migrations:
   ```bash
   pnpm prisma migrate dev
   ```
5. Run the development server:
   ```bash
   pnpm dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
.
├── components       # Reusable UI components
├── pages
│   ├── api          # API routes for backend logic
│   ├── index.tsx    # Homepage
├── prisma           # Prisma schema and migrations
├── public           # Static assets
├── styles           # Global styles
├── utils            # Utility functions (e.g., database connection)
├── .env             # Environment variables
└── README.md        # Project documentation
```

---

## Usage

### Adding Opportunities
- Navigate to the "Add Opportunity" page.
- Fill out the form with opportunity details.
- Submit the form to add the opportunity to the database.

### Viewing Opportunities
- Visit the homepage to see a list of all opportunities and resources.

---

## Deployment

1. Install the Vercel CLI:
   ```bash
   pnpm add -g vercel
   ```
2. Deploy the application:
   ```bash
   vercel
   ```
   Follow the prompts to link your project and deploy it.

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---




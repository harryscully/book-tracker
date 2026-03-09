# book-tracker 📚

A full-stack CRUD application for tracking books you want to read, are currently reading, or have finished.

**Live demo:** https://book-tracker-blue.vercel.app

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Database | PostgreSQL (Supabase) |
| ORM | Prisma 7 |
| Server State | TanStack Query (React Query) |
| Forms | React Hook Form + Zod |
| Styling | Tailwind CSS v4 + DaisyUI v5 |

## Features

- View all books in a responsive card grid
- Add a new book with form validation
- Edit an existing book with prepopulated form fields
- Delete a book with confirmation
- Status tracking — Want to Read, Reading, Finished
- Optimistic UI updates on delete

## Project Structure

```
src/
├── app/
│   ├── api/books/          # REST API routes (GET, POST)
│   ├── api/books/[id]/     # Dynamic routes (GET, PATCH, DELETE)
│   ├── books/              # Books list page
│   ├── books/new/          # Add book page
│   └── books/[id]/edit/    # Edit book page
├── components/             # BookCard, AddBookForm, EditBookForm, Navbar
├── hooks/                  # useBooks, useBook, useAddBook, useUpdateBook, useDeleteBook
└── lib/
    ├── prisma.ts           # Prisma client singleton
    └── validations/        # Zod schemas
```

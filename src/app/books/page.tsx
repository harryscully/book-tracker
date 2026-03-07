"use client"
import { useBooks } from "@/hooks/useBooks"
import type { BookModel } from "../../../generated/prisma/models/Book"

export default function Books() {
    const { isPending, isError, data, error } = useBooks()

    if (isPending) return <p>Loading...</p>

    if (isError) return <p>Error: {error.message}</p>

    const bookCards = data.map((book: BookModel) => (
        <div key={book.id} className="card card-border bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">
                    {book.title}
                    <div className="badge badge-secondary">{book.status}</div>
                </h2>
                <p>{book.author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{book.genre}</div>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            {bookCards}
        </div>
    )
}
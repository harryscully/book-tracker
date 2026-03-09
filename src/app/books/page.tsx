"use client"
import { useBooks } from "@/hooks/useBooks"
import type { BookModel } from "../../../generated/prisma/models/Book"
import BookCard from "@/components/BookCard"

export default function Books() {
    const { isPending, isError, data, error } = useBooks()

    if (isPending) return (
        <div className="flex flex-1 justify-center items-center">
            <span className="loading loading-spinner text-secondary"></span>
        </div>
    )

    if (isError) return <p>Error: {error.message}</p>

    const bookCards = data.map((book: BookModel) => (
        <BookCard key={book.id} book={book} />
    ))

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {bookCards}
        </div>
    )
}
"use client"
import { useBooks } from "@/hooks/useBooks"
import type { BookModel } from "../../../generated/prisma/models/Book"
import BookCard from "@/components/BookCard"

export default function Books() {
    const { isPending, isError, data, error } = useBooks()

    if (isPending) return <p>Loading...</p>

    if (isError) return <p>Error: {error.message}</p>

    const bookCards = data.map((book: BookModel) => (
        <BookCard key={book.id} book={book} />
    ))

    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            {bookCards}
        </div>
    )
}
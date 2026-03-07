"use client"
import { useBooks } from "@/hooks/useBooks"
import { BookModel } from "../../../generated/prisma/models/Book"

export default function Books() {
    const { isPending, isError, data, error } = useBooks()

    if (isPending) return <p>Loading...</p>

    if (isError) return <p>Error: {error.message}</p>

    return (
        <ul>
            {data.map((book:BookModel) => (
                <li key={book.id}>{book.title}</li>
            ))}
        </ul>
    )
}
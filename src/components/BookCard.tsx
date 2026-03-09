"use client"
import type { BookModel } from "../../generated/prisma/models/Book"
import { useDeleteBook } from "@/hooks/useDeleteBook"
import { Trash2 } from "lucide-react"

const statusColours = {
    READING: "badge-info",
    FINISHED: "badge-success",
    WANT_TO_READ: "badge-warning"
}

const statusFormatted = {
    READING: "Reading",
    FINISHED: "Finished",
    WANT_TO_READ: "Want to Read"
}

export default function BookCard({ book }: { book: BookModel }) {
    const { mutate } = useDeleteBook(book.id)

    return (
        <div className="card card-border bg-base-100 border-base-300">
            <div className="card-body">
                <h2 className="card-title flex-wrap">
                    {book.title}
                    <div className={`badge ${statusColours[book.status]}`}>{statusFormatted[book.status]}</div>
                </h2>
                <p className="mb-4">{book.author}</p>
                <div className="card-actions justify-between items-center">
                    <button
                        onClick={() => {
                            if (window.confirm("Delete this book?")) {
                                mutate()
                            }
                        }}
                        className="btn btn-square btn-error text-white h-8 w-8"
                    >
                        <Trash2 size={16}/>
                    </button>
                    <div className="badge badge-outline font-semibold uppercase text-info text-xs">{book.genre}</div>
                </div>
            </div>
        </div>
    )
}
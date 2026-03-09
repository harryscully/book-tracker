"use client"
import type { BookModel } from "../../generated/prisma/models/Book"
import { useDeleteBook } from "@/hooks/useDeleteBook"
import { Trash2, Ellipsis, SquarePen } from "lucide-react"
import Link from "next/link"

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
                    <div className="dropdown dropdown-right">
                        <div tabIndex={0} role="button" className="btn p-0 h-6 w-6">
                            <Ellipsis size={16} />
                        </div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><Link href={`/books/${book.id}/edit`}><SquarePen size={16} />Edit</Link></li>
                            <li><button
                                onClick={() => {
                                    if (window.confirm("Delete this book?")) {
                                        mutate()
                                    }
                                }}
                            >
                                <Trash2 size={16} />Delete
                            </button></li>                            
                        </ul>
                    </div>
                    <div className="badge badge-outline font-semibold uppercase text-info text-xs">{book.genre}</div>
                </div>
            </div>
        </div>
    )
}
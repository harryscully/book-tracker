import type { BookModel } from "../../generated/prisma/models/Book"

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
    return (
        <div className="card card-border bg-base-100">
            <div className="card-body">
                <h2 className="card-title">
                    {book.title}
                    <div className={`badge ${statusColours[book.status]}`}>{statusFormatted[book.status]}</div>
                </h2>
                <p>{book.author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{book.genre}</div>
                </div>
            </div>
        </div>
    )
}
import Link from "next/link"
import { Plus } from "lucide-react"

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" href="/">book-tracker</Link>
            </div>
            <div className="flex navbar-end gap-6">
                <Link className="font-semibold" href="/books">Books</Link>
                <Link href="/books/new" className="btn btn-primary">
                        <Plus size={16} />
                        Add Book
                </Link>
            </div>
        </div>
    )
}
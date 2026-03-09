import Link from "next/link"

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to <span className="italic highlight">book-tracker</span></h1>
          <p className="py-6">
            A simple app to track books you want to read, are currently reading, or books you've finished!
          </p>
          <Link href="/books" className="btn btn-primary">Go to Books</Link>
        </div>
      </div>
    </div>
  )
}
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { bookSchema } from "@/lib/validations/book"

export async function GET() {
    const books = await prisma.book.findMany()
    return NextResponse.json(books)
}

export async function POST(request: Request) {
    const body = await request.json()
    const result = bookSchema.safeParse(body)
    if (!result.success) {
        return NextResponse.json({ error: result.error }, { status: 400 })
    } else {
        const book = await prisma.book.create({
            data: {
                ...result.data,
                userId: 1
            }
        })
        return NextResponse.json(book, { status: 201 })
    }
}
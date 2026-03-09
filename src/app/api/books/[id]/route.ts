import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const bookId = params.id
    await prisma.book.delete({
        where: {
            id: Number(bookId)
        }
    })
    return NextResponse.json(null, { status: 204 })
}
import { prisma } from "@/lib/prisma"
import { bookSchema } from "@/lib/validations/book"
import { NextResponse } from "next/server"

export async function DELETE(request: Request, { params }: { params: Promise<{id: string}>  }) {
    const { id } = await params
    await prisma.book.delete({
        where: {
            id: Number(id)
        }
    })
    return NextResponse.json({message: "deleted"}, { status: 202 })
}

export async function PATCH(request: Request, { params }: { params: Promise<{id: string}>  }) {
    const { id } = await params
    const body = await request.json()
    const result = bookSchema.safeParse(body)
    if (!result.success) {
        return NextResponse.json({error: result.error}, {status: 400})
    } else {
        const book = await prisma.book.update({
            where: {id: Number(id)},
            data: { 
                ...result.data
            }}
        )
        return NextResponse.json(book, { status: 200 })
    }
    
}
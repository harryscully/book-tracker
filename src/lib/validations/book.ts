import * as z from "zod"

export const bookSchema = z.object({
    title: z.string().min(1,"Title is required"),
    author: z.string().min(1, "Author is required"),
    genre: z.string(),
    status: z.enum(["READING","FINISHED","WANT_TO_READ"]),
    publishedYear: z.int().min(100).max(new Date().getFullYear()),
    notes: z.string().optional()
})

export type BookFormData = z.infer<typeof bookSchema>
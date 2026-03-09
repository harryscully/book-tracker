"use client"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useBook } from "@/hooks/useBook"
import { useUpdateBook } from "@/hooks/useUpdateBook"
import { BookFormData, bookSchema } from "@/lib/validations/book"
import { useRouter } from "next/navigation"

export default function EditBookForm({id}:{id:string}) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<BookFormData>({
        resolver: zodResolver(bookSchema),
    })
    
    const { data: book, isPending } = useBook(id)
    
    useEffect(()=>{
        if (book) {
            reset({
                ...book
            })
        }
    },[book, reset])
    
    const router = useRouter()

    const { mutate } = useUpdateBook(Number(id))

    const onSubmit = (data: BookFormData) => mutate(data, {
        onSuccess: () => {
            router.push("/books")
        }
    })

    if (isPending) return <p>Loading...</p>

    return (
        <div className="w-full max-w-lg card card-border bg-base-100 border-base-300">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        <label className="label">Title</label>
                        <input {...register("title")} type="text" placeholder="Book title here" className="input w-full" />
                        {errors.title && <p className="text-error text-sm">{errors.title.message}</p>}

                        <label className="label mt-4">Author</label>
                        <input {...register("author")} type="text" placeholder="Author here" className="input w-full" />
                        {errors.author && <p className="text-error text-sm">{errors.author.message}</p>}

                        <label className="label mt-4">Genre</label>
                        <input {...register("genre")} type="text" placeholder="Genre here" className="input w-full" />
                        {errors.genre && <p className="text-error text-sm">{errors.genre.message}</p>}

                        <label className="label mt-4">Published Year</label>
                        <input {...register("publishedYear", {valueAsNumber: true})} type="number" placeholder="Published year here" className="input w-full" />
                        {errors.publishedYear && <p className="text-error text-sm">{errors.publishedYear.message}</p>}

                        <label className="label mt-4">Status</label>
                        <select {...register("status")} defaultValue="Pick a status" className="select w-full">
                            <option disabled={true}>Pick a status</option>
                            <option value="WANT_TO_READ">Want to Read</option>
                            <option value="READING">Reading</option>
                            <option value="FINISHED">Finished</option>
                        </select>
                        {errors.status && <p className="text-error text-sm">{errors.status.message}</p>}

                        <label className="label mt-4">Notes</label>
                        <input {...register("notes")} type="text" className="input w-full" placeholder="Add notes here" />
                        <p className="label">Optional</p>
                        {errors.notes && <p className="text-error text-sm">{errors.notes.message}</p>}

                        <button type="submit" className="btn btn-primary mt-6">Save Changes</button>
                    </fieldset>
                </form >
            </div >
        </div >
    )
}
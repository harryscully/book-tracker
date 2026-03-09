import { BookFormData } from "@/lib/validations/book"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useUpdateBook(id:number) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (updatedBook: BookFormData) => {
            const res = await fetch(`/api/books/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedBook)
            })
            if (!res.ok) throw new Error("Failed to update book")
            return res.json()
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['books'] })
        }
    })
}
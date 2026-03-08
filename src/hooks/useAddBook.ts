import { useMutation, useQueryClient } from "@tanstack/react-query"
import { BookFormData } from "@/lib/validations/book"

export function useAddBook() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (newBook: BookFormData) => {
            const res = await fetch("/api/books", {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBook),
            })
            return res.json()
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['books'] })
        }
    })
}
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { BookModel } from "../../generated/prisma/models"

export function useDeleteBook(id:number) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async () => {
            const res = await fetch(`/api/books/${id}`, {
                method: "DELETE"
            })
            if (!res.ok) throw new Error("Failed to delete book")
            return null
        },
        onMutate: async () => {
            // Cancel any in-flight refetches
            await queryClient.cancelQueries({ queryKey: ['books'] })
            
            // Snapshot current data
            const previousBooks = queryClient.getQueryData(['books'])
            
            // Optimistically remove the book immediately
            queryClient.setQueryData(['books'], (old: BookModel[]) =>
                old.filter(book => book.id !== id)
            )
            
            return { previousBooks }
        },
        onError: (err, _, context) => {
            // If it fails, roll back to the snapshot
            queryClient.setQueryData(['books'], context?.previousBooks)
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] })
        }
    })
}
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useDeleteBook(id:number) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async () => {
            const res = await fetch(`/api/books/${id}`, {
                method: "DELETE"
            })
            return res.json()
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['books'] })
        }
    })
}
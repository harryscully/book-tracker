import { useQuery } from "@tanstack/react-query"

export function useBook(id:string) {
    return useQuery({
        queryKey: ["books", id],
        queryFn: async () => {
            const res = await fetch(`/api/books/${id}`)
            return res.json()
        }
    })
}
"use client"
import { useParams } from "next/navigation";
import EditBookForm from "@/components/EditBookForm";

export default function EditBook() {
    const { id } = useParams()
    return (
        <div className="flex flex-1 justify-center items-center">
            <EditBookForm id={id as string} />
        </div>
    )
}
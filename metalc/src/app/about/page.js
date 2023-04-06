"use client"
import { useTasks } from "@/context/TaskContext"

function page() {
    const values = useTasks()
    console.log(values)
    return (
        <div>About Page</div>
    )
}

export default page
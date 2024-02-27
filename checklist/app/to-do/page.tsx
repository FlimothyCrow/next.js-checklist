import Link from "next/link"

export default function ToDo() {
    return (
        <body>
            <h1 className="text-3xl font-bold underline">This is the new to-do list</h1>
            <div className={`mb-3 text-2xl font-semibold`}>
                <Link href="/to-do/personal">Personal</Link>
            </div>
            <div className={`mb-3 text-2xl font-semibold`}>
                <Link href="/to-do/professional">Professional</Link>
            </div>
        </body>
    )
}

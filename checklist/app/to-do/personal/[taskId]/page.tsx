export default function TaskDetails({ params }: { params: { taskId: string } }) {
    return (
        <body>
            <h1 className="text-3xl font-bold underline">Details about task {params.taskId}</h1>
        </body>
    )
}

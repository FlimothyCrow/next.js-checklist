"use client"
import React, { FormEventHandler } from "react"
export default function Personal() {
    const [personalTasks, setPersonalTasks] = React.useState([
        { taskId: "horse", taskDetails: "brush Chattanooga, feed hay and oats", taskOwner: "Mike" },
        { taskId: "kitchen", taskDetails: "buy groceries, wash the dishes every morning", taskOwner: "Mike" },
        { taskId: "car", taskDetails: "change the oil, rotate tires", taskOwner: "Bill" },
    ])

    const [newTaskTitle, setNewTaskTitle] = React.useState("")
    const [newTaskDetails, setNewTaskDetails] = React.useState("")
    const [newTaskOwner, setNewTaskOwner] = React.useState("")

    const addNewTask = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(e)
    }

    const taskStyle = {
        padding: 20,
    }
    return (
        <body>
            <h1 className="text-3xl font-bold underline">
                List of personal tasks I need to work on {personalTasks.length}
            </h1>
            <h2>Add a new task:</h2>
            <form onSubmit={addNewTask}>
                <label>Task name:</label>
                <input
                    type="text"
                    name="name"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    required
                />
                <label>Task details:</label>
                <textarea value={newTaskDetails} onChange={(e) => setNewTaskDetails(e.target.value)}>
                    required
                </textarea>
                <label>Task owner:</label>
                <select value={newTaskOwner} onChange={(e) => setNewTaskOwner(e.target.value)}>
                    <option value="bill">Bill</option>
                    <option value="mike">Mike</option>
                </select>
                <button>Click to add</button>
            </form>

            <div>
                <ul>
                    {personalTasks.map((task, idx) => (
                        <li key={task.taskId} style={taskStyle}>
                            <div>Task title: {task.taskId}</div>
                            <div>Task details: {task.taskDetails}</div>
                            <div>Task owner: {task.taskOwner}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </body>
    )
}

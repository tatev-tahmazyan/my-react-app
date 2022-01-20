import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SingleTaskComponent = () => {
    const [task, setTask] = useState(null);
    const { task_id } = useParams();
    const getTaskFromDB = (taskId) => {
        return new Promise((resolve, reject) => {
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            const candidate = tasks.find(task => task.id === taskId);
            console.log("🚀 ~ candidate", candidate)
            resolve(candidate);
            
        })

    }
    useEffect(() => {
        getTaskFromDB(task_id)
            .then(task => {
                console.log("🚀 ~ task", task)
                setTask(task);
            });
    }, []);
    return (
        <div>
            <h1>Single Task / id = {task.id}</h1>
            <p>{task.title}</p>
            <p>{task.description}</p>
        </div>
    )
}

export default SingleTaskComponent;
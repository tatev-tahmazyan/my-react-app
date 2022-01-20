import React, { memo } from "react";
import Task from "../Task";

const Todo = ({
    mockTasks,
    handleDeleteTask,
    toggleStatusChange,
    editBtnOpen
}) => {
    return (
        <div className="tasks-wrapper mt-5 d-flex justify-content-between flex-wrap">
            {mockTasks.map((task,idx) => (
                <Task
                    {...task}
                    idx={idx}
                    key={task.id}
                    handleDeleteTask={handleDeleteTask}
                    toggleStatusChange={toggleStatusChange}
                    editBtnOpen = {editBtnOpen}
                />
            ))}
        </div>
    )
}

export default memo(Todo);
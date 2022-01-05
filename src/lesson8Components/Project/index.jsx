import React, { useCallback, useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Todo from "./components/Todo";
// import { tasks } from "../../helpers/lesson8/mockData";


const Project = () => {
    //mock data
    const [mockTasks, setMockTasks] = useState([]);

    //localStorage set
    const setNewTaskToDB = (task) => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        // tasks.map(function(item) { 
        //     debugger;
        //     if(item.id === task['id']){
        //         tasks[item] = task;
        //     }
        // });
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    const setTasksToDB = (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    //add
    const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);
    const handleOpenAddTaskModal = () => {
        setAddTaskModalVisible(true);
    }
    const handleCloseAddTaskModal = () => {
        setAddTaskModalVisible(false);
    }
    const addTask = (formData) => {
        const { title, description, attachedTo } = formData;
        setMockTasks((prevData => {
            const copyData = [...prevData];
            const newTask= {
                id: Math.random(),
                title: title.value,
                description: description.value,
                status: "Active",
                attachedTo: attachedTo.value
            };

            setNewTaskToDB(newTask);
            copyData.push(newTask);
            return copyData;
        }));
        handleCloseAddTaskModal();
    }

    //edit
    const [editableTask, setEditableTask] = useState('');
    const handleEditTaskOpen = (id) => {
        setEditableTask(mockTasks.filter(item => item.id === id)[0]);
    }
    const handleEditTaskClose = () => {
        setEditableTask(false);
    }
    const editTask =  useCallback((editableTask) => {
        const { title, description, attachedTo,status, id } = editableTask;
        setMockTasks((prevData => {
            const copyData = [...prevData];
            const idx = prevData.findIndex(item => item.id === id);
            copyData[idx] = {
                id: id,
                title: title.value || title,
                description: description.value || description,
                status: status,
                attachedTo: attachedTo.value || attachedTo
            }
            setTasksToDB(copyData);
            return copyData;
        }));
        
        handleEditTaskClose();
    },[]);

    //delete
    const handleDeleteTask = useCallback((id) => {
        setMockTasks((prevData) => {
            const newTasks = prevData.filter(item => item.id !== id);
            // const idx = prevData.findIndex(item => item.id === id);
            // prevData.splice(idx, 1);
            setTasksToDB(newTasks);
        });
    }, []);

    //toggle status
    const toggleStatusChange = useCallback((id) => {
        setMockTasks((prevData) => {
            const copyData = [...prevData];
            const idx = prevData.findIndex(item => item.id === id);
            const status = copyData[idx].status.toLowerCase() === "active" ? "Done" : "Active";
            copyData[idx] = {
                ...copyData[idx],
                status
            }
            setTasksToDB(copyData);
            return copyData;
        });
    }, []);

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        if (!tasks)
            localStorage.setItem("tasks", JSON.stringify([]));
        else
            setMockTasks(JSON.parse(tasks));

    }, []);

    return (
        <div className="project-container">
            <h1 className="heading1">
                Todo Project
            </h1>
            <Button
                onClick={handleOpenAddTaskModal}
            >
                Add Task
            </Button>

            <Todo
                mockTasks={mockTasks}
                handleDeleteTask={handleDeleteTask}
                toggleStatusChange={toggleStatusChange}
                editBtnOpen={handleEditTaskOpen}
                
            />

            {addTaskModalVisible && <AddTask
                onHide={handleCloseAddTaskModal}
                onSubmit={addTask}
            />}

            {editableTask && <EditTask
                task={editableTask}
                onHide={handleEditTaskClose}
                onSubmit={editTask}
            />}
        </div>
    )
}

export default Project;
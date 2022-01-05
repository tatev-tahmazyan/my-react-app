import React, { memo } from "react";
import { Button, Card } from "react-bootstrap";
import "./styles.css";

const Task = ({
    title,
    description,
    status,
    id,
    attachedTo,
    handleDeleteTask,
    toggleStatusChange,
    editBtnOpen
}) => {
    const statusClassName = status.toLowerCase() === "done" ? "status-done" : "status-active";
    const statusBtn = status.toLowerCase() === "done" ? "Active" : "Done"
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title className="must-do-text">Must do : {attachedTo}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text className="status-text">
                    Status:
                    <span className={statusClassName}>
                        &nbsp;{status}
                    </span>
                </Card.Text>
                <Card.Text>
                    {/* Date  :  {new Date(date).format("YYYY MM DD")} */}
                </Card.Text>
                <Button variant="danger mr-2"
                    onClick={() => handleDeleteTask(id)}
                >
                    Delete
                </Button>
                <Button variant="warning mr-2"
                    onClick={() => editBtnOpen(id)}
                    >Edit</Button>
                <Button
                    variant={`${statusBtn === "Active" ? "success" : "primary"} `}
                    onClick={() => toggleStatusChange(id)}
                >
                    {statusBtn}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default memo(Task);
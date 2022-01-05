import React,{memo} from "react";
import {Card,Button} from 'react-bootstrap';
const PostCardItem = memo(
    ({
        title,
        description,
        id
    }) => {
        console.log("PostCardItem")
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> {id}</Card.Title>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Button</Button>
                </Card.Body>
            </Card>
        )
    }
);

export default PostCardItem;
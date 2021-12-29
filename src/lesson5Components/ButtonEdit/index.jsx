import {Button} from "react-bootstrap";
import EditIcon from '../../Icons/Edit';

const ButtonEdit = (props) =>{
    return(
        <Button onClick={props.handleEdit} className='float-left' variant="success"><EditIcon/> Edit</Button>
    ) 
}
export default ButtonEdit;
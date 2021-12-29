import {Button} from "react-bootstrap";
import DeleteIcon from '../../Icons/Delete';

const ButtonDelete = ({handleDelete}) => {
    return(
        <Button onClick={handleDelete} className="float-right" variant="danger"><DeleteIcon/> Delete</Button>
    )  
}
export default ButtonDelete;
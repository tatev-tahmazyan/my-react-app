import { Container, Form } from 'react-bootstrap';
import {useState} from  'react';
const FormComponent = () => {
    const [inpValue, setInpValue] = useState(null);
    const handleChange = (e) =>{
        const {value} = e.target;
        setInpValue(value);
    }
    return(
        <Container>
           <Form className="mt-5 mb-3">
                <Form.Group>
                  <Form.Control name="inp" onChange={handleChange} type="text" placeholder="Enter text" />
                </Form.Group>
            </Form>
            <p>{inpValue}</p>
        </Container>
    );
}

export default FormComponent;
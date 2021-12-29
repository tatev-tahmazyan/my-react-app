import {Container,Form} from 'react-bootstrap';
// import PropTypes from 'prop-types';
import React,{useState,useRef} from 'react';
import TestUseRefSubmitBtn from '../TestUseRefSubmitBtn';

const TestUseState = () => {
    // const [result,setResult] = useState("");
    // const upDateResult = (e) => {
    //     const {value} = e.target;
    //     setResult(value);
    // }
    // return(
    //     <Container>
    //         <h2 className="usetate-heading">
    //             useState Hook
    //         </h2>
    //         <div className="usestate-test-container">
    //             <Form.Group className="mb-3" >
    //                 <Form.Label>Name</Form.Label>
    //                 <Form.Control
    //                     type="text"
    //                     placeholder="Name"
    //                     name={"name_field"}
    //                  
    //                     onInput={upDateResult}
    //                 />
    //             </Form.Group>
    //             
    //             <p>
    //                  {result}
    //             </p>
    //         </div>
    //     </Container>
    // );
    const nameInputRef = useRef();
    const [result,setResult] = useState("");
    return(
        <Container>
            <h2 className="usetate-heading">
                useRef Hook
            </h2>
            <div className="usestate-test-container">
                <Form.Group className="mb-3" >
                    <Form.Label>Name person</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name person"
                        name={"name_field"}
                        ref={nameInputRef}
                    />
                </Form.Group>
                <TestUseRefSubmitBtn
                    setResult={setResult}
                    ref={nameInputRef}  
                    testProps={true}                  
                />
                <p>
                     {result}
                </p>
            </div>
        </Container>
    );
}

export default TestUseState;
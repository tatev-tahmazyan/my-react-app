import React from "react";
import {Form,InputGroup,FormControl} from 'react-bootstrap';
class Actions extends React.PureComponent{
    render(){
        return (
            <Form>
                <InputGroup className="mb-3 mt-5">
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      onInput={this.props.changeText}
                    />
                </InputGroup>
                
            </Form>
        );
    }
}

export default Actions;
import React from 'react';
import Result from './Result';
import Actions from './Actions';
import {Container} from 'react-bootstrap';
class TextClass extends React.Component{
    state = {
        text : ''
    }
    changeText = (e) => {
        this.setState({
            text : e.target.value
        })
    }
    render(){
        return(
            <Container>
                <Actions changeText={this.changeText} />
                <Result text={this.state.text} />
            </Container>
        );
    }
}

export default TextClass;
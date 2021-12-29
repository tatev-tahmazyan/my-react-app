import React from 'react';
import {Card,InputGroup,FormControl,Button,Form} from 'react-bootstrap';
import ButtonDelete from '../ButtonDelete';
import ButtonEdit from '../ButtonEdit';

class CardItem  extends React.Component{
    state={
        edit: false,
        members:{
            id: this.props.itemId,
            name: this.props.name,
            lastName: this.props.lastName,
            imgUrl:this.props.imageUrl,
        }
    }
    handleEdit = (e) =>{
        this.setState({edit:true});
        // console.log(e.target.parentElement.parentElement);
    }
    save = (e) => {
        // const m = {
        //     name:this.refs.fname.value,
        //     lastName:this.refs.lname.value,
        //     imgUrl:this.refs.url.value
        // }
        this.setState({edit:false});
    }

    handleDelete = (e) =>{
        let item = e.target.parentElement.parentElement;
        console.log(item);
        item.remove();
    }
    rendEdit = () =>{
        const {itemId,name,lastName,imgUrl} = this.state.members;
        
        return(
            <Card id={itemId} className="mb-5" style={{ width: '18rem' }}>
                    
                <Card.Body>
                    <Form.Control as="textarea" ref="url" rows="5" defaultValue={imgUrl} className="mb-3" placeholder="Image Url" />
                    <InputGroup className="pb-3">
                        <FormControl placeholder='Name' ref="fname" defaultValue={name}/>
                        <FormControl placeholder='Last Name' ref="lname" defaultValue={lastName}/>
                    </InputGroup>
                    <Button variant="success" onClick={this.save}>Save</Button>
                </Card.Body>
            </Card> 
        );
    }
    render(){
        if(this.state.edit){
            return this.rendEdit();
        }else{
            const {itemId,name,lastName,imgUrl} = this.state.members;
            return(
        
                <Card id={itemId} className="mb-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imgUrl}/>
                    <Card.Body>
                        <Card.Title className="pb-3">{name}</Card.Title>
                        <Card.Text>{lastName}</Card.Text>
                        <ButtonEdit handleEdit={this.handleEdit} />
                        <ButtonDelete handleDelete={this.handleDelete} />
                    </Card.Body>
                </Card>
                
            );
        }
    }
    
}
export default CardItem;

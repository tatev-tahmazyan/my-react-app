function Block(props,state){
    // function getInitialState(){
    //     return {checked:true}
    // }
    // function render(){
    //     let message;
    //     if(state.checked){
    //         message = 'On';
    //     }else{
    //         message = 'Off';
    //     }
        return ( 
            <div>
                <h3>{props.name}</h3>
                <h3>{props.age}</h3>
                {/* <div>
                    <input type="checkbox" />
                    <p>{message}</p>
                </div>     */}
            </div>
        );
    // }
}

export default Block;
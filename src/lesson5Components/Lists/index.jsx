import React from "react";
import {Button} from "react-bootstrap";
import {teamMembersData} from '../../helpers/lesson5/teamMembersData.js';
import TeamMembersList from '../TeamMembersList';


class Lists extends React.Component{
    state = {
        teamMembers : teamMembersData,
        isListOpen : true
    }
    render(){
        const {teamMembers,isListOpen} = this.state;
        return (
            <div>
                <h1>List</h1>
                <div>
                    <Button 
                        variant="warning"
                        onClick={() => 
                            this.setState({isListOpen : !isListOpen})
                        }>
                            {isListOpen ? 'Close' : 'Open'}
                    </Button>
                    {isListOpen ? <TeamMembersList teamMembers={teamMembers} /> : ""}
                </div>
            </div>
        );
    }
}

export default Lists;
import CardItem from '../CardItem';
import {defaultAvatarsData} from '../../helpers/lesson5/defaultAvatarsData';

const TeamMembersList = ({teamMembers}) => {
    return(
        <div className="team-member-list mt-5 d-flex flex-wrap justify-content-around">
            {teamMembers.map(member => {
                return (
                    
                        <CardItem 
                            itemId={member._id} 
                            name={member.name}
                            lastName={member.lastName}
                            imageUrl={
                                member.imageUrl ||
                                (member.gender='male' && defaultAvatarsData.male) ||
                                (member.gender='female' && defaultAvatarsData.female)
                            }
                            key={member._id} 
                        />
                    
                );
            })
            }
        </div>
    );
}
export default TeamMembersList;

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stars = () => {
    return(
        <div className='stars-cont'>
            <div className="mb-2 text-center"> 
                <FontAwesomeIcon icon={faStar} className="icon-star fs-7 mr-1" />
                <FontAwesomeIcon icon={faStar} className="icon-star fs-95 mr-1" />
                <FontAwesomeIcon icon={faStar} className="icon-star fs-12 mr-1" />
                <FontAwesomeIcon icon={faStar} className="icon-star fs-95 mr-1" />
                <FontAwesomeIcon icon={faStar} className="icon-star fs-7" />
            </div>
        </div>
    );
}

export default Stars;
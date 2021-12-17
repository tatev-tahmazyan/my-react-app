import './style.css';
import {Col} from 'react-bootstrap';

const OnlineShopCard = (props) => {
    const {text, imgUrl } = props;
    return(
        <Col md="4" className="text-center">
            <img className="online-shop-card-img" src={imgUrl} alt='online-shop' />
            <p className="online-shop-card-text ml-auto mr-auto mt-4 text-center">
                {text}
            </p>
        </Col>
    );
}

export default OnlineShopCard;
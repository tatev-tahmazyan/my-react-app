import './style.css';
import {Col} from 'react-bootstrap';

const ExportCard = (props) => {
    const {text, imgUrl } = props;
    return(
        <Col md="4" className="text-center export-card-item">
            <img className="export-card-img" src={imgUrl} alt='export' />
            <h5 className="export-card-text ml-auto mr-auto mt-4 text-center">
                {text}
            </h5>
        </Col>
    );
}

export default ExportCard;
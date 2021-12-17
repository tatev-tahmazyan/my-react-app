import './style.css';

const TitleH2 = (props) => {
    const {text} = props;
    return(
        <h2 className="text-center">
            <span className="text-uppercase font-weight-bold">
                {text}
            </span>
        </h2>
    );
}

export default TitleH2;
import './style.css';

const SubtitleP = (props) => {
    const {text} = props;
    return(
        <p className="text-center mb-5">
            <b>
                {text}
            </b>
        </p>
    );
}

export default SubtitleP;
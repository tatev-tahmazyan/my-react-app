import LiveChat from '../../Icons/LiveChat';
import Heart from '../../Icons/Heart';
import ShoppingCart from '../../Icons/ShoppingCart';
import './styles.css';

const HeaderTools = () => {
    return(
        <div className="tools-cont">
            <button className="icon-btn">
                <LiveChat className="icon" />
            </button>
            <button className="icon-btn">
                <Heart className="icon" />
            </button>
            <button className="icon-btn">
                <ShoppingCart className="icon" />
            </button>
            
        </div>
    );
}

export default HeaderTools;
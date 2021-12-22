import Search from '../../Icons/Search';
import './styles.css';


const HeaderSearch = () =>{
    return (
        <div>
            <form action="">
                    <button className = 'search-input button'>
                        <Search/>
                    </button>
                    <input type='text' placeholder='Search puma.com' className = 'search-input inp' />
            </form>
        </div>
    );
}

export default HeaderSearch;
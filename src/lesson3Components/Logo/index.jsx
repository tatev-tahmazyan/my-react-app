import logoUrl from './img/puma-logo.jpg';

const Logo = () =>{
    return (
        <div>
            <img src={logoUrl} alt="logo"
            style={{
                cursor: 'pointer',
                width : '75%'
            }} />
        </div>
    );
}

export default Logo;
import Logo from '../Logo';
import Nav from '../Nav';
import HeaderTools from '../HeaderTools';
import HeaderSearch from '../HeaderSearch';
import styled from "styled-components";

const GridCont = styled.div`
    display: grid;
    grid-template-columns: 1fr 7fr 2fr 1fr;
    padding: 0.5rem;
    background-color: #000;
    color: #fff;
`


const PumaHeader = () =>{
    return(
        <div>
            <header>
                <GridCont>
                    <Logo />
                    <Nav />
                    <HeaderSearch />
                    <HeaderTools />
                </GridCont>
            </header>
        </div>
    );
}

export default PumaHeader;
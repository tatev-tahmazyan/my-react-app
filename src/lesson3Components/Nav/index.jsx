import styled from "styled-components";

const FlexList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Nav = () => {
    return(
        <FlexList>
            <li>New Arrivals</li>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Collaborations</li>
            <li>Sport</li>
            <li>Outlet</li>
            <li>Gift Guide</li>
        </FlexList>
    );
}

export default Nav;
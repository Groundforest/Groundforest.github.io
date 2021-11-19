import styled from "styled-components";
import { Container} from "../../globalStyles";

export const Nav =  styled.div`
    display: flex;
    justify-content: center;
    height: 150px;
    width: 100%;
    background: transparent;
    overflow-y: clip;
    z-index: 150;
`;


export const NavContainer = styled(Container)`
    display: flex;
    flex-direction: Row;
    justify-content: flex-end;
    height: inherit;
`;

export const NavLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    cursor: pointer;

    @media screen and (max-width: 2560px) {
        margin-left: auto;
        margin-right: auto;
    }

    `;

export const LogoImg = styled.img`
    width: 300px;
    height: 280px;
    position:relative;
    bottom: 50px;
    right: 10px;
    z-index: 1;

    &.FooterLogo{
        width: 200px;
        height: 200px;
        right: 20px;
        bottom: 0px;

        @media screen and (max-width: 425px) {
        right: 0px;
    }
    }

    @media screen and (max-width: 960px) {
        width: 200px;
        height: 200px;
        width: 100%;
        height: 100%;
        bottom: 0px;
        
    }
    @media screen and (max-width: 425px) {
        width: 200px;
        height: 200px;
        bottom: 0px;
    }
    
`;

export const NavMenu = styled.div`
    display: flex;
    margin-top: 25px;
    justify-content: space-between;
    width: 20%;
    margin-right: 30px;
    height: fit-content;
    position: fixed;
    z-index: 60;

    @media screen and (max-width: 960px) {
        display: none;
    }

`;

export const NavItem = styled.div`
    display: flex;
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    font-size: 0.6rem;
    font-weight: lighter;

    @media screen and (max-width: 960px){
        margin-left: 20px;
        margin-right: 20px;
    }

`;

export const MenuIcon = styled.button`
    background-color: transparent;
    border: none;
    display:none;
    height:fit-content;
   

    @media screen and (max-width: 960px){
        display:flex;
        position: fixed;
        right: 15px;
        top: 15px;
        cursor:pointer;
        z-index: 50;
    }

  
`

export const SmallScreenMenu = styled.div`
    background-color: #e2e1e6;
    box-shadow: 0px 3px 3px darkgray;
    display: none;
    width: 100%;
    height: 50px;

    @media screen and (max-width: 960px){
        display:flex;
        justify-content:center;
        padding-top: 12px;
        position: fixed;
        z-index: 50;
    }
`


import styled from "styled-components";
import { Column, Row } from "../../globalStyles";




export const FooterContainer = styled(Row)`
    h1{
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
    }

    h2{
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
    }
    div{
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
    }

    @media screen and (max-width: 425px){
        flex-direction: column;
    }
`
export const BorderWrapper = styled(Row)`
    width: 40%;
    justify-content: end;
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6670869031206232) 50%, rgba(81,255,180,0) 100%);

    @media screen and (max-width: 425px){
        width: 100%;
        background: none;
    }
`
export const FooterColumn = styled(Column)`
    background: #292929;
    @media screen and (max-width: 425px){
        padding: 5px;
    }
`
export const ContentWrapper = styled(Row)`

  @media screen and (max-width: 425px){
        flex-direction: column;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (max-width: 425px){
        flex-direction: row;
        justify-content: space-between;
        row-gap: 20px;
        flex-wrap: wrap;
        padding: 20px;
    }
`

export const Heading = styled.h1`
    width: fit-content;
    font-size: 14pt;
    color: #fff;
    align-self: center;
`
export const SubHeading = styled.h2`
    width: fit-content;
    color: #fff;
    font-size: 14pt;
`

export const Sub = styled.div`
    width: fit-content; 
    color: #fff;
    font-size: 12pt;
    margin-bottom: 2%;
`


import { React, forwardRef } from 'react';
import { Content} from '../Content/Content';
import { FooterData } from '../../data/ContentData';
import { FooterColumn, FooterContainer, Heading, Sub, SubHeading, BorderWrapper, InfoContainer, ContentWrapper} from './FooterStyles';
import { NavLogo, LogoImg } from '../Navbar/NavbarStyles';

export const Footer = forwardRef((props, ref) => {

    return (
        <FooterContainer ref={ref} background='#292929' justify='end' width='100%'>
            <Content {...FooterData} Align='center' />
            <BorderWrapper>
            <FooterColumn padding='25px' width='99.8%' alignself='end'>
                <Heading>KONTAKT</Heading>
                <ContentWrapper width='100%'>
                    <InfoContainer>
                        <SubHeading>Adress
                            <Sub>Bergavägen 1<br/>184 31 Åkersberga</Sub>
                        </SubHeading> 
                        <SubHeading>Telefon
                            <Sub>076-303 82 81</Sub>
                        </SubHeading>
                        <SubHeading>Mail
                            <Sub>remesmaleri@hotmail.com</Sub>
                        </SubHeading>    
                    </InfoContainer>
                    <NavLogo>
                        <LogoImg className='FooterLogo' src="img/Logo.png" alt="Logo"/>
                    </NavLogo>
                </ContentWrapper>    
            </FooterColumn>
            </BorderWrapper>
        </FooterContainer>

    )
})

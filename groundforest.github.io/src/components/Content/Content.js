import { forwardRef, React } from 'react';
import { ContentContainer, ContentRow, Heading, Subtitle, TextWrap, Img, IconItem} from './ContentStyle';
import { PageButton } from '../../globalStyles'


export const Content = forwardRef(({ Align,Justify,classname,img,Headline,Description,reverse,inverse,icons, Link, button, scrollTo}, ref) => {
    
    
    return (
        <ContentContainer ref={ref} className={classname} justify={Justify} align={Align}>
            <ContentRow  className={classname} justify='center' Reverse={reverse} align='center' Inverse={inverse} width='100%' height='920px'>
                <TextWrap className={classname}>
                    <Heading className={classname} Inverse={inverse}>
                        {Headline ? Headline: ''}
                    </Heading>
                    <Subtitle className={classname}>
                        {Description ? Description: ''}
                        {icons ? icons.map((Ic, idx) =>
                        <IconItem href={Link[idx]} target="_blank" Inverse={inverse} key={idx}>{Ic}</IconItem>
                        ):''}
                    </Subtitle>
                    {button ?
                    <PageButton className='contact' onClick={() => scrollTo('Footer')}>
                        <span>Kontakta oss</span>
                    </PageButton>: ''}
                </TextWrap>
                    {img ? <Img className={classname} src={img}/>: ''}
            </ContentRow>
        </ContentContainer>
    )
})

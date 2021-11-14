import React, { useRef } from 'react'
import { Navbar } from '../components/Navbar/Navbar';
import { Carousel } from '../components/Carousel/Carousel'
import { Content } from '../components/Content/Content'
import { Footer } from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { infoOne, infoTwo} from '../data/ContentData'
import { Container, GlobalStyle } from '../globalStyles'
import { Presentation } from '../components/Presentation/Presentation';

export const Home = () => {
    const home = useRef(), services = useRef(), about = useRef(), footer = useRef()
    const currentPage = useRef(0)
    const scrolling = useRef(false)
    
    

   function scrollTo(page) {
        switch (page) {
            case 'Home':
            case 0:
                home.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
                currentPage.current = 0
                scrolling.current = false
                break
            case 'Services':
            case 1:
                services.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
                currentPage.current = 1
                scrolling.current = false
                break
            case 'About':
            case 2:
                about.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
                currentPage.current = 2
                scrolling.current = false
                break
            case 'Footer':
            case 3:
                footer.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
                currentPage.current = 3
                scrolling.current = false
                break
            default:
                return console.log(page);  
        }
    };
        
            const onScroll = (e) => {
                    if (!scrolling.current && e.deltaY > 0 && currentPage.current < 3) {
                    currentPage.current = currentPage.current + 1
                    } else if (!scrolling.current && e.deltaY < 0 && currentPage.current > 0) {
                    currentPage.current = currentPage.current - 1
                    }
                    
                    scrolling.current = true
                    scrollTo(currentPage.current)
                }
        
     

    return (
        <Container id='Container' height="fit-content" justify="center" align="center" width="100%" onWheel={(e) => onScroll(e)} overflow='hidden'>
            <GlobalStyle/>
            <Navbar scrollTo={scrollTo}/>
            <Hero ref={home} scrollTo={scrollTo}/>
            <Content ref={services} {...infoOne}/>
            <Carousel />
            <Content ref={about} {...infoTwo}/>
            <Presentation scrollTo={scrollTo}/>
            <Footer ref={footer}/>
        </Container>
    )
}

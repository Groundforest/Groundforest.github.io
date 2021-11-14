import React, { forwardRef } from 'react'
import { GradE, HeadingContainer, HeroContainer, Subtitle, Topline} from './HeroStyle'
import { PageButton } from '../../globalStyles'

export const Hero = forwardRef((props, ref) => {
    const { scrollTo } = props

    const handleClick = (page) => {
        scrollTo(page)
    }

    return (
        <>
            <HeroContainer ref={ref} justify='center' align='center' width='100%'>
                <HeadingContainer justify='center' align='center' maxWidth='inherit'>
                <Topline>
                    Sätt
                    <GradE margin='15px'>FÄRG</GradE>
                    på tillvaron.
                </Topline>
                <Subtitle>
                    Vi förverkligar din <GradE className="vision" margLeft='12px'>VISION</GradE>.
                </Subtitle>
                </HeadingContainer>
                <PageButton onClick={() => handleClick('Services')}> 
                    <span>TJÄNSTER</span>
                </PageButton>
            </HeroContainer>
        </>
    )
})

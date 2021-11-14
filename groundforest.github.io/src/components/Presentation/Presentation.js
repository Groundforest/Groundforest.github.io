import React from 'react'
import { Content } from '../Content/Content'
import { PresentationContainer } from './PresentationStyle'
import { AboutData } from '../../data/ContentData'

export const Presentation = ({scrollTo}) => {

    const handleClick = (page) => {
        scrollTo(page)
    }


    return (
        <PresentationContainer>
            <Content scrollTo={handleClick} {...AboutData} align='flex-end' width='100%' button={true}/>
        </PresentationContainer>
    )
}

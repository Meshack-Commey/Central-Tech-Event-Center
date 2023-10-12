import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CONTAINER, { ROW }  from './styledComponents/Container'

import Highlight from '../assets/available4.jpg'

const OurSpaceYourVision = () => {
    return (
        <CONTAINER>
            <ROW>
                <FLEXBOX>
                    <IMAGEBOX>
                        <IMG src={Highlight} alt="image" />
                    </IMAGEBOX>
                    <BOX>
                        <TEXTBOX>
                            <H1> CELEBRATE WITH YOUR COMMUNITY </H1> <br />
                            <TEXT>
                                We love getting to see locals of North Texas utilize our event center to connect with their
                                communities through special events and occassions. If you are looking for a place to celebrate
                                a special moment, Central Tech Event Center is the perfect event venue.      
                            </TEXT>
                            <LINK to={"gallery"}> SEE OUR GALLERY </LINK>
                        </TEXTBOX>
                    </BOX>
                </FLEXBOX>
            </ROW>
        </CONTAINER>
    )
}


// styled components

const FLEXBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    margin: 0 auto;
    gap: 100px;
`

const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const H1 = styled.h1`
    font-size: 48px;
    color: darkcyan;
`
const LINK = styled(Link)`
    font-size: 28px;
    font-weight: bolder;
    color: darkcyan;
    text-decoration: underline;
`
const P = styled.p`
    font-size: 18px;
    color: gray;
`
const TEXTBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    justify-content: left;
    align-content: left;
    text-align: left;
`
const TEXT = styled(P)`
    padding: 10px 0;
    max-width: 600px;
    border: 1px solid inherit;

`
const IMAGEBOX = styled.figure`
    border: 1px solid inherit;
    width: 500px;
    padding: 5rem 0 0 0;

`
const IMG = styled.img`
    width: 100%;
`



export default OurSpaceYourVision

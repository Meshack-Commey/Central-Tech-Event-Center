import { Link } from 'react-router-dom'
import styled from 'styled-components'


import Highlight from '../assets/available4.jpg'

const CelebrateWithYourCommunity = () => {
    return (
        <CONTAINER>
            <ROW>
                <FLEXBOX>
                    <BOX2>
                        <IMAGEBOX>
                            <IMG src={Highlight} alt="image" />
                        </IMAGEBOX>
                        <LINK2 to={"gallery"}> SEE OUR GALLERY </LINK2>
                    </BOX2>
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


export default CelebrateWithYourCommunity

// styled components
const CONTAINER = styled.div`
    border: 1px solid inherit;
    background: inherit; 
    padding: 50px 0;
`
const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    padding: 30px 0;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const FLEXBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
    gap: 90px;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        gap: 1rem;
    }
`
const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const BOX2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const H1 = styled.h1`
    font-size: 48px;
    color: darkcyan;

    @media only screen and (max-width: 1024px) {
        text-align: center;
    }
    @media only screen and (max-width: 745px) {
        font-size: 2.5rem;
    }
    @media only screen and (max-width: 654px) {
        font-size: 2rem;
    }
    @media only screen and (max-width: 480px) {
        font-size: 1.8rem;
    }
    @media only screen and (max-width: 384px) {
        font-size: 1.5rem;
        padding: 0 20px;
    }
`
const LINK = styled(Link)`
    font-size: 28px;
    font-weight: bolder;
    color: darkcyan;
    text-decoration: underline;

    @media (min-width: 1025px) {
        display: block;
    }
    @media (max-width: 1024px) {
        display: none;
    }
`
const LINK2 = styled(LINK)`
    @media (min-width: 1025px) {
        display: none;
    }
    @media (max-width: 1024px) {
        font-size: 1.4rem;
        display: block;
        text-align: center;
        margin-top: 2rem;
    }
`
const P = styled.p`
    font-size: 1rem;
    color: gray;
`
const TEXTBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    justify-content: left;
    align-items: left;

    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 2rem;
    }
`
const TEXT = styled(P)`
    padding: 0;
    max-width: 600px;
    border: 1px solid inherit;

`
const IMAGEBOX = styled.figure`
    border: 1px solid inherit;
    width: 500px;
    padding-top: 5rem;

    @media (max-width: 1024px) {
        width: 600px;
        padding-top: 0;
    }
    @media (max-width: 699px) {
        width: 400px;
        padding-top: 0;
    }
    @media (max-width: 480px) {
        width: 300px;
        padding-top: 0;
    }
    @media (max-width: 319px) {
        width: 200px;
        padding-top: 0;
    }
`
const IMG = styled.img`
    width: 100%;
`





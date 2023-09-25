import styled from 'styled-components'
import { H1, H5 } from '../styledComponents/Typography.styles'
import Available from '../../assets/available.jpg'

const BookingsHeroSection = () => {
    return (
        <>
        <NAVBAR_AREA_PADDING></NAVBAR_AREA_PADDING>
        <CONTAINER>
            <ROW>
                <BOX>
                    <H5>LET US HOST YOUR SPECIAL OCCASION:</H5>
                    <H1>BOOK OUR EVENT SPACE TODAY</H1>
                </BOX>
            </ROW>
        </CONTAINER>
        </>
    )
}


// STYLED COMPONENTS
const NAVBAR_AREA_PADDING = styled.div`
    padding: 52px;
`
const CONTAINER = styled.div`
    border: 1px solid inherit;
    padding: 20px 0;
    background: url(${Available});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: scroll;
    position: relative;
    z-index: 0;
    &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        content: "";
        z-index: -1;
        background: rgba(0, 139, 139, 0.5);
    }
`
const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 50px auto;
    padding: 40px 0;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1100px;
    justify-content: center;
    align-content: center;
    text-align: center;
    color: white;
`


export default BookingsHeroSection

import styled from 'styled-components'
import { H1, P } from '../styledComponents/Typography.styles'


const BookThePerfectVenue = () => {
    return (
        <CONTAINER>
            <ROW>
                <BOX>
                    <TEXT> BOOK THE PERFECT VENUE FOR YOUR SPECIAL OCCASION </TEXT>
                </BOX>
                <BOX>
                    <PARAGRAPH> Our space can host events of all kinds, ranging from weddings to corporate conferences, with a maximum capacity of 360 attendees. To secure your reservation, we ask for a deposit, which gives you assurance and guarantees that your event will be accommodated. </PARAGRAPH>
                </BOX>
            </ROW>
        </CONTAINER>
    )
}


// STYLED COMPONENTS
const CONTAINER = styled.div`
    border: 1px solid inherit;
`
const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 30px auto;
    padding: 50px 0;
    max-width: 1500px;
    justify-content: center;
    align-content: center;
    gap: 50px;
`
const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    max-width: 1200px;
    justify-content: left;
    align-content: left;
    text-align: left;
`
const TEXT = styled(H1)`
    color: black;
    font-size: 48px;
    border: 1px solid inherit;
    max-width: 700px;
    color: darkcyan;
`
const PARAGRAPH = styled(P)`
    color: gray;
    border: 1px solid inherit;
    max-width: 500px;
    text-align: center;
`


export default BookThePerfectVenue

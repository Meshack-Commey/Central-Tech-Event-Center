import styled from 'styled-components'
import CONTAINER, { ROW }  from '../styledComponents/Container'

// imported static state
import venueOpening from '../../assets/Start-Open-Event-Venue-Business-Planning-Pod.png'

const NeedAssistanceWithReservation = () => {
    return (
        <CONTAINER>
            <ROW>
                <FLEXBOX>
                    <BOX>
                        <TEXTBOX>
                            <H3> NEED ASSISTANCE WITH YOUR RESERVATION? </H3> <br />
                            <TEXT>
                                We're glad you're here! Let us know how can we help you and we'll be happy to contact you about your event inquiry.
                            </TEXT>
                        </TEXTBOX>
                    </BOX>
                    <IMAGEBOX>
                        <IMG src={venueOpening} alt="image" />
                    </IMAGEBOX>
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
    max-width: 1200px;
    margin: 0 auto;
    gap: 200px;
`

const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const H3 = styled.h3`
    font-size: 28px;
    color: darkcyan;
`
const P = styled.p`
    font-size: 18px;
    color: gray;
`
const TEXTBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    justify-content: left;
    align-content: left;
    text-align: left;
`
const TEXT = styled(P)`
    padding: 10px 0;
    max-width: 600px;
    border: 1px solid inherit;
`
const IMAGEBOX = styled.div`
    border: 1px solid inherit;
    width: 400px;
`
const IMG = styled.img`
    width: 100%;
`



export default NeedAssistanceWithReservation

import { Link } from 'react-router-dom'
import styled from 'styled-components'

// importing image state
import { Diversity1, Diversity2, Diversity3, Celebration, School, PersonAdd, LibraryMusic, JoinFull  } from '@mui/icons-material'

const OurSpaceYourVision = () => {

    const yourEvents = [
        { "icon": LibraryMusic, "text": "Concerts"},
        { "icon": Diversity1, "text": "Community Gatherings"},
        { "icon": Diversity2, "text": "Comferences & Workshops"},
        { "icon": School, "text": "Graduations"},
        { "icon": Diversity3, "text": "Family Reunion"},
        { "icon": Celebration, "text": "Birthdays"},
        { "icon": PersonAdd, "text": "Fundraisers"},
        { "icon": JoinFull, "text": "Weddings"},
    ]

    return (
        <CONTAINER>
            <ROW>
                <FLEXBOX>
                    <BOX>
                        <TEXTBOX> <br /><br /><br />
                            <H1> OUR SPACE, <br /> YOUR VISION. </H1> <br />
                            <TEXT>
                                Our space is versatile and can be easily transformed into the space that fits your vision.
                                If you're unsure about whether or not we can accommodate your event, please get in touch to
                                discuss the details.        
                            </TEXT>
                            <SIDE_LINK to={"bookings"}> BOOK YOUR NEXT EVENT </SIDE_LINK>
                        </TEXTBOX>
                    </BOX>
                    <GRID>
                        {
                            yourEvents.map((event) => {
                                return(
                                    <GRIDITEM>
                                        <ICONBOX>
                                            { <event.icon /> } 
                                        </ICONBOX> 
                                        <P> { event.text } </P>
                                    </GRIDITEM>
                                )
                            })
                        }
                    </GRID> 
                    <BOTTOM_LINK to={"bookings"}> BOOK YOUR NEXT EVENT </BOTTOM_LINK>
                </FLEXBOX>
            </ROW>
        </CONTAINER>
    )
}


// styled components
const CONTAINER = styled.div`
    border: 1px solid inherit;
    background: inherit; 
    padding: 60px;

    @media (max-width: 868px) {
        padding: 0;
    }
`
const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    padding: 30px 0;
    max-width: 1200px;
    justify-content: center;
    align-content: center;

    @media (max-width: 868px) {
        margin: 0;
    }
`
const FLEXBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    margin: 0 auto;
    gap: 100px;
    
    @media (max-width: 868px) {
        flex-direction: column;
        margin: 0;
        gap: 50px;
    }
`
const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    max-width: ;
    justify-content: center;
    align-content: center;

    @media (max-width: 868px) {
        margin: 0;
    }   
`
const TEXTBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    margin: 0 5rem 0 0;
    ${'' /* max-width: 400px; */}
    justify-content: left;
    align-content: left;
    text-align: left;

    @media (max-width: 868px) {
        margin: 0;
        ${'' /* max-width: 100%; */}
        justify-content: center;
        align-content: center;
        text-align: center;
    }
    @media (max-width: 353px) {
        padding: 0;
    }
`
const H1 = styled.span`
    font-size: 38px;
    color: darkcyan;

    @media only screen and (max-width: 745px) {
        font-size: 2.5rem;
    }
    @media only screen and (max-width: 654px) {
        font-size: 2rem;
    }
    @media only screen and (max-width: 480px) {
        font-size: 1.8rem;
    }
    @media only screen and (max-width: 328px) {
        font-size: 1.5rem;
    }
`
const LINK = styled(Link)`
    font-size: 22px;
    color: darkcyan;
    text-decoration: underline;
    font-weight: bolder;
`
const SIDE_LINK = styled(LINK)`
    @media (min-width: 869px) {
        display: block;
        font-size: 1.2rem;
        margin-top: 3rem;
    }
    @media (max-width: 868px) {
        display: none;
    }
`
const BOTTOM_LINK = styled(LINK)`
    @media (min-width: 869px) {
        display: none;
    }
    @media (max-width: 868px) {
        display: block;
        font-size: 1.2rem;
        text-align: center;
    }
`
const TEXT = styled.p`
    padding: 10px 1rem;
    border: 1px solid inherit;
    font-size: 18px;
    color: gray;

    @media (min-width: 869px) {
        width: ;
        max-width: 600px;
        padding: 0;
    }
    @media (max-width: 480px) {
        text-align: justify;
        font-size: 1rem;
    }
`
const P = styled.p`
    font-size: 1rem;
    border: 1px solid inherit;
    color: gray;

    @media (max-width: 868px) {
        font-size: .9rem;
    }
`
const GRID = styled.div`
    border: 1px solid inherit;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.5rem;
    margin: 0 auto;

    @media (max-width: 868px) {
        gap: 1rem;
    }
    @media (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 0;
        margin: 0 50px;
        padding: 0;
    }
`
const GRIDITEM = styled.div`
    border: 1px solid inherit;
    display: flex;
    border-radius: 5px;
    gap: .5rem;

    @media (max-width: 868px) {
        gap: .2rem;
    }
`
const ICONBOX = styled.div`
    width: 40px;
    padding: 18px 0 0 0;
    border: 1px solid inherit;
    color: darkcyan;
`




export default OurSpaceYourVision
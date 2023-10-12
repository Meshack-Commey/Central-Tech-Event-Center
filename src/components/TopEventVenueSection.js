import styled from "styled-components"


const TopEventVenueSection = () => {
    return (
        <CONTAINER>

            <ROW>
                <BOX>
                    <H3>TOP EVENT VENUE IN KAKRABA, KASOA</H3> <br />
                    <H1>THE IDEAL LOCATION FOR ALL YOUR SPECIAL EVENTS</H1> <br />
                    <PARAGRAPH>
                            Founded by Five-time All-Star and retired Major League Baseball player, Torii Hunter, and His wife Katrina Hunter, the Torii and 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rem dolorum officia ipsam unde ducimus distinctio, commodi, 
                            voluptate tempore quos quod nobis eaque labore assumenda ratione doloremque delectus facere? Quibusdam!
                    </PARAGRAPH>
                </BOX>
            </ROW>

        </CONTAINER>
    )
}




// styled components

const CONTAINER = styled.div`
    border: 1px solid inherit;
    padding: 40px;
`
const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    justify-content: center;
    align-content: center;
    text-align: center;
`
const PARAGRAPH = styled.p`
    font-size: 1rem;
    margin: 0 auto;
    max-width: 690px;
    border: 1px solid inherit;
    color: gray;

    @media (max-width: 480px) {
        text-align: justify;
    }
`
const H3 = styled.span` 
    font-size: 22px;
    color: gray;

    @media only screen and (max-width: 480px) {
        font-size: 1.1rem;
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



export default TopEventVenueSection

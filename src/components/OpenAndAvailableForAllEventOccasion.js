import styled from 'styled-components'
import Available from '../assets/available.jpg'


const OpenAndAvailableForAllEventOccasion = () => {
    return (
        <CONTAINER>
            <ROW>
                <BOX>
                    <H1>OPEN AND AVAILABLE FOR ALL EVENT OCCASIONS</H1>
                    <PARAGRAPH>
                        With a maximum capacity of 360 attendees, our space can accommodate events of all types,
                        from wedding to corporate conferences. We require a deposit to secure your reservation, giving
                        you peace of mind and ensuring that your event is guaranteed.
                    </PARAGRAPH>
                    
                    <FIELDSET>
                        <FIELD>
                            <FIELDTEXT> Mon - Sat </FIELDTEXT>
                            <FIELDTEXT> 8AM - 12AM </FIELDTEXT>
                        </FIELD>
                        <FIELD>
                            <FIELDTEXT> Sunday </FIELDTEXT>
                            <FIELDTEXT> 2PM - 12AM </FIELDTEXT>
                        </FIELD>
                    </FIELDSET>
                </BOX>
            </ROW>
        </CONTAINER>
    )
}


// STYLED COMPONENTS
const CONTAINER = styled.div`
    border: 1px solid inherit;
    padding: 30px 0;
    background: url(${Available});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: scroll;
    position: relative;
    z-index: 0;
    &::after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 139, 139, 0.5);
        z-index: -1;
        content: "";
    }
`
const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    padding: 20px 0;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
export const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
    text-align: center;
`
const H1 = styled.h1`
    font-size: 38px;
    color: white;
    padding: 1rem;

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
const PARAGRAPH = styled.p`
    font-size: 1.2rem;
    color: white;
    border: 1px solid inherit;
    max-width: 690px;
    margin: 0 auto;
    padding: 1rem;

    @media (max-width: 480px) {
        text-align: justify;
        padding: 2rem;
    }
`
const FIELDSET = styled.span`
    border: 0.2rem solid snow;
    display: flex;
    justify-content: center;
    align-content: center;

    @media (min-width: 1000px) {
        margin: 2rem auto;
        width: 600px;
        max-width: 600px;
    }
    @media (max-width: 999px) {
        margin: 1.8rem auto;
        width: 500px;
        max-width: 500px;
    }
    @media (max-width: 700px) {
        margin: 1.8rem auto;
        width: 400px;
        max-width: 400px;
    }
    @media (max-width: 480px) {
        margin: 1.8rem auto;
        width: 300px;
        max-width: 300px;
    }
    @media (max-width: 375px) {
        margin: 1.8rem auto;
        width: 250px;
        max-width: 250px;
    }
`
const FIELD = styled.span`
    border: 1px solid inherit;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`
const FIELDTEXT = styled.p`
    border: 1px solid inherit;
    font-size: 1.4rem;
    color: white;

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
    @media (max-width: 375px) {
        font-size: 1.1rem;
    }
`


export default OpenAndAvailableForAllEventOccasion

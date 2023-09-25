import styled from "styled-components"

const ChooseAppointment = () => {

    // static states
    const appointments = [
        {
            "id": 0,
            "title": "Small Room Rental",
            "seats": 123,
            "hours": 4,
            "weekdayPrice": 125,
            "weekendPrice": 175,
            "attendees": 123,
            "cleaningFee": [ 175, 300],
        },
        {
            "id": 1,
            "title": "Large Room Rental",
            "seats": 250,
            "hours": 4,
            "weekdayPrice": 2000,
            "weekendPrice": 3250,
            "attendees": 250,
            "cleaningFee": [ 175, 300],
        },
        {
            "id": 2,
            "title": "Entire Venue Rental",
            "seats": 500,
            "hours": 4,
            "weekdayPrice": 3250,
            "weekendPrice": 5750,
            "attendees": 500,
            "cleaningFee": [ 175, 300],
        }
    ]

    return (
        <CONTAINER>
            <ROW>
                <BOX>
                    
                        <p> We can't wait to have you host your event in our venue. </p>
                        <p> Please select the room that you would like to book for your event. </p>
                        <IMPORTANT> Important: Reservations requests are not considered offical bookings until our team confirms official rental times, collects your deposit, and receives event details. </IMPORTANT>
                    
                </BOX>
            </ROW>
            <APPOINTMENT_ROW>
                {
                    appointments.map((value) => {
                        return(
                            <>
                            <APPOINTMENT_BOX>
                                <TEXT_BOX>
                                    
                                    <TEXT>
                                        <P><b> {value.title} - Seats {value.seats} </b></P>
                                        <P> {value.hours} hours </P>
                                    </TEXT>
                                    <TEXT>
                                        <P> Weekday pricing starts at  GHS{value.weekdayPrice} per hour </P>
                                        <P> Weekday pricing starts at  GHS{value.weekendPrice} per hour </P>
                                        <P> **({value.hours} hour minimum)** </P>
                                    </TEXT>    
                                    <TEXT>
                                        <P> Addition fee may include, but not limited to: <br /> Cleaning fee - GHS34 (Single Room), GHS 12 (Entire Venue) </P>
                                    </TEXT>
                                    
                                </TEXT_BOX>
                                <BUTTON_BOX>
                                    <BUTTON> Book </BUTTON>
                                </BUTTON_BOX>
                            </APPOINTMENT_BOX>
                            </>
                        )
                    })
                }
            </APPOINTMENT_ROW>
        </CONTAINER>
    )
}

// STYLED COMPONENTS
const CONTAINER = styled.div`
    1px solid red;
`
const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    padding: 80px;
    max-width: 1200px;
    justify-content: ;
    align-content: ;
`
const BOX = styled.div`
    border: 1px solid inherit;
    padding: 50px 10px;
    margin: 0 60px;
    max-width: 1100px;
    font-size: 20px;
    color: gray;
`
const IMPORTANT = styled.p`
    font-size: 20px;
    font-weight: bolder;
    width: 900px;
`
const APPOINTMENT_ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const APPOINTMENT_BOX = styled.div`
    border: 1px solid lightgray;
    display: flex;
    margin: 10px auto;
    gap: 400px;
`
const TEXT_BOX = styled.div `
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-content: left;
`
const P = styled.p`
    font-size: 14px;
    color: gray;
`
const TEXT = styled.span`
    padding: 10px 50px;
`
const BUTTON_BOX = styled.div`
    display: flex;
    padding: 20px 50px;
    width: 100px;
    height: 50px;
    justify-content: right;
    align-content: right;
`
const BUTTON = styled.button`
    border: 1px solid darkcyan;
    border-radius: 5px;
    width: 100%;
    background: white;
    color: darkcyan;
    &:hover {
        background: darkcyan;
        color: white;
    }
`


export default ChooseAppointment

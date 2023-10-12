import styled from 'styled-components'


const ContactUsForm = () => {
    return (
        <CONTAINER>
            <ROW>
                <FORM>
                    <FLEX>
                        <FORMBOX>
                            <LABEL>First Name </LABEL> <br />
                            <INPUT_NAME type='text' placeholder='First Name' required/>
                        </FORMBOX>
                        <FORMBOX>
                            <LABEL>Last Name </LABEL> <br />
                            <INPUT_NAME type='text' placeholder='Last Name' required/>
                        </FORMBOX>
                    </FLEX>
                    <FORMBOX>
                        <LABEL>Phone</LABEL> <br />
                        <INPUT type='tel' placeholder='Phone' required/>
                    </FORMBOX>
                    <FORMBOX>
                        <LABEL>Email</LABEL> <br />
                        <INPUT type='email' placeholder='Email' required/>
                    </FORMBOX>
                    <FORMBOX>
                        <LABEL>Reservation Request</LABEL> <br />
                        <SELECT required>
                            <option> SMALL ROOM (185) </option>
                            <option> LARGER ROOM (360) </option>
                            <option> ENTIRE VENUE (660) </option>
                        </SELECT>
                    </FORMBOX>
                    <FORMBOX>
                        <LABEL>Date</LABEL> <br />
                        <INPUT_DATE type='date' placeholder='Phone' required/>
                    </FORMBOX>
                    <FORMBOX>
                        <LABEL>Time</LABEL> <br />
                        <INPUT_TIME type='time' placeholder='Phone' required/>
                    </FORMBOX>
                    <FORMBOX>
                        <LABEL>Message</LABEL> <br />
                        <TEXTAREA cols={90} rows={10} required></TEXTAREA>
                    </FORMBOX>
                    <FORMBOX>
                        <INPUT_SUBMIT type='submit' value='Submit' />
                    </FORMBOX>
                </FORM>
            </ROW>
        </CONTAINER>
    )
}


// styled components
export const CONTAINER = styled.div`
    border: 1px solid inherit;
    background: inherit; 
`
export const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    padding: 30px 0;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const FORM = styled.form`
    border: 1px solid inherit;
    padding: 20px;
`
const FORMBOX = styled.div`
    border: 1px dotted inherit;
    margin: 10px 0;
`
const FLEX = styled.span`
    display: flex;
    gap: 18px;
`
const LABEL = styled.label`
    border: 1px solid inherit;
    color: gray;
    font-size: 1rem;
    font-weight: bolder;
`
const INPUT_NAME = styled.input`
    border: 1px solid inherit;
    padding: 15px;
    width: 300px;
`
const INPUT = styled.input`
    padding: 15px;
    width: 650px;
`
const SELECT = styled.select`
    padding: 15px 0;
    width: 685px;
`
const INPUT_DATE = styled.input`
    padding: 12px 0;
    width: 200px;
`
const INPUT_TIME = styled(INPUT_DATE)``
const TEXTAREA = styled.textarea`
    
`
const INPUT_SUBMIT = styled.input`
    background: white;
    color: gray;
    font-weight: bolder;
    font-size: 16px;
    border: 1px solid darkcyan;
    border-radius: 5px;
    padding: 20px 50px;
    &:hover {
        background: darkcyan;
        color: white;
    }
`



export default ContactUsForm
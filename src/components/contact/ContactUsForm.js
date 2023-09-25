import styled from 'styled-components'


const ContactUsForm = () => {
    return (
        <CONTAINER>
            <ROW>
                <FORM>
                    <FLEX>
                        <FORMBOX>
                            <LABEL>First Name: </LABEL> <br />
                            <input type='text' placeholder='First Name' />
                        </FORMBOX>
                        <FORMBOX>
                            <LABEL>Last Name: </LABEL> <br />
                            <input type='text' placeholder='Last Name' />
                        </FORMBOX>
                    </FLEX>
                    <FORMBOX>
                        <LABEL>Phone</LABEL> <br />
                        <input type='tel' placeholder='Phone' />
                    </FORMBOX>
                    <FORMBOX>
                        <LABEL>Email</LABEL> <br />
                        <input type='email' placeholder='Email' />
                    </FORMBOX>
                    <FORMBOX>
                        <LABEL>Reservation Request</LABEL> <br />
                        <select>
                            <option> SMALL ROOM (185) </option>
                            <option> LARGER ROOM (360) </option>
                            <option> ENTIRE VENUE (660) </option>
                        </select>
                    </FORMBOX>
                    <FORMBOX>
                        <LABEL>Date</LABEL> <br />
                        <input type='date' placeholder='Phone' />
                    </FORMBOX>
                    <FORMBOX>
                        <LABEL>Time</LABEL> <br />
                        <input type='time' placeholder='Phone' />
                    </FORMBOX>
                    <FORMBOX>
                        <LABEL>Message</LABEL> <br />
                        <textarea></textarea>
                    </FORMBOX>
                    <FORMBOX>
                        <input type='submit' value='Submit' />
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
`
const FLEX = styled.span`
    display: flex;
`
const LABEL = styled.label`
    border: 1px solid inherit;
    color: gray;
    font-weight: bolder;
`




export default ContactUsForm

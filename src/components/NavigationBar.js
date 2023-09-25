import { Link } from 'react-router-dom'
import styled from "styled-components"

import logoShape from '../assets/logo-shape.png'
import logo from '../assets/logo.png' 


const NavigationBar = () => {
    return (
        <CONTAINER>
            <div>

                <LOGO_BOX>
                    <LOGO>
                        <IMAGE src={logo} alt='central tech event center ' />
                    </LOGO>
                </LOGO_BOX>

                <TOP_NAV>
                    <TOP_NAV_ROW>
                        <NAV_TEXT> CENTRAL TECH EVENT CENTER </NAV_TEXT>
                    </TOP_NAV_ROW>
                </TOP_NAV>

                <BOTTOM_NAV>
                    <BOTTOM_NAV_ROW>
                        <LIST>
                        <LIST_ITEMS>
                            <LIST_ITEM>
                                <LINK to="/">home</LINK>
                            </LIST_ITEM>
                            <LIST_ITEM>
                                <LINK to={"pricing"}>pricing</LINK>
                            </LIST_ITEM>
                            <LIST_ITEM>
                                <LINK to={"bookings"}>bookings</LINK>
                            </LIST_ITEM>
                            <LIST_ITEM>
                                <LINK target='_blank' to={"https://www.google.com/maps/place/Central+Tech+Hub/@5.498093,-0.4188474,17z/data=!4m18!1m9!3m8!1s0xfdf9b41fb7cd537:0x9640051a1f62d82f!2sCentral+Tech+Hub!8m2!3d5.4980877!4d-0.4162725!9m1!1b1!16s%2Fg%2F11q3cx6f0b!3m7!1s0xfdf9b41fb7cd537:0x9640051a1f62d82f!8m2!3d5.4980877!4d-0.4162725!9m1!1b1!16s%2Fg%2F11q3cx6f0b?entry=ttu"}>
                                    reviews
                                </LINK>
                            </LIST_ITEM>
                            <LIST_ITEM>
                                <LINK to={"gallery"}>gallery</LINK>
                            </LIST_ITEM>
                            <LIST_ITEM>
                                <LINK to={"contact"}>contact</LINK>
                            </LIST_ITEM>
                        </LIST_ITEMS>
                        </LIST>
                    </BOTTOM_NAV_ROW>
                </BOTTOM_NAV>

            </div>
        </CONTAINER>
    )
}

// styled components
const CONTAINER = styled.div`
    border: 1px solid inherit;
    width: 100%;
    position: fixed;
    z-index: 0;
    &::after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        content: "";
        
    }
`
const LOGO_BOX = styled.div`
    border: 1px solid inherit;
    width: 200px;
    background-image: url(${logoShape});  
    background-size: cover;
    background-repeat: no-repeat;
    float: left;
    display: flex;
    justify-content: left;
    align-content: left;
`
const LOGO = styled.div`
    width: 100px;
    
`
const IMAGE = styled.img`
    width: 100%;
`

// Top Nav Styles
const TOP_NAV = styled.nav`
    border: 1px solid inherit;
    background: white;
    width: 100%;
`
const TOP_NAV_ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    max-width: 1100px;
    justify-content: left;
    align-content: left;
`
const NAV_TEXT = styled.span`
    font-size: 40px;
    color: darkcyan;
`
// const NAVBUTTON = styled.div`
//     border: 1px solid inherit;
//     margin: 10px auto;
// `
// const LOGIN = styled(Link)`
//     border: 1px solid inherit;
//     text-decoration: none;
//     background: ;
//     color: gray;
//     width: 20px;
// `

// Bottom Nav Styles
const BOTTOM_NAV = styled.div`
    border: 1px solid inherit;
    width: 100%;
    background: darkcyan;
`
const BOTTOM_NAV_ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    max-width: 1100px;
    justify-content: left;
    align-content: left;
`
const LIST = styled.ul`
    list-style-type: none;
    border: 1px solid inherit;
`
const LIST_ITEMS = styled.div`
    border: 1px solid inherit;
    display: flex;
    gap: 110px;
`
const LIST_ITEM = styled.li`
    text-transform: uppercase;
    font-size: 15px;
`
const LINK = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
        text-decoration: underline;
    }
`


export default NavigationBar

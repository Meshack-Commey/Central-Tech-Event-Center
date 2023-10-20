import { Link } from 'react-router-dom'
import styled from "styled-components"

import logoShape from '../assets/logo-shape.png'
import logo from '../assets/logo.png' 


const NavigationBar = () => {

    const navlists = [
        {"id": 0, "list": "home", "target": "_self", "url": "/"},
        {"id": 1, "list": "pricing", "target": "_self", "url": "pricing"},
        {"id": 2, "list": "bookings", "target": "_self", "url": "bookings"},
        {"id": 3, "list": "reviews", "target": "_blank", "url": "https://www.google.com/maps/place/Central+Tech+Hub/@5.498093,-0.4188474,17z/data=!4m18!1m9!3m8!1s0xfdf9b41fb7cd537:0x9640051a1f62d82f!2sCentral+Tech+Hub!8m2!3d5.4980877!4d-0.4162725!9m1!1b1!16s%2Fg%2F11q3cx6f0b!3m7!1s0xfdf9b41fb7cd537:0x9640051a1f62d82f!8m2!3d5.4980877!4d-0.4162725!9m1!1b1!16s%2Fg%2F11q3cx6f0b?entry=ttu"},
        {"id": 4, "list": "gallery", "target": "_self", "url": "gallery"},
        {"id": 5, "list": "contact", "target": "_self", "url": "contact"}
    ];

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
                                {
                                    navlists.map((value) => {
                                        return(
                                            <LIST_ITEM key={ value.id }>
                                                <LINK to={ value.url } target={ value.target }> { value.list } </LINK>
                                            </LIST_ITEM>
                                        )
                                    })
                                }
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
    z-index: 9999;
    top: 0;
    
    ${'' /* @media only screen and (max-width: 1024px) {
        width: 100%;
    }
    @media only screen and (max-width: 988px) {
        width: 100%;
    } */}
`
const LOGO_BOX = styled.div`
    border: 1px solid inherit;
    background-image: url(${logoShape});  
    background-size: cover;
    background-repeat: no-repeat;
    float: left;
    display: flex;
    justify-content: left;
    align-content: left;

    // large screen sizes
    @media only screen and (min-width: 1366px) {
        width: 200px;
    }
    @media only screen and (max-width: 1365px) {
        width: 190px;
    }
    @media only screen and (max-width: 1199px) {
        width: 180px;
    }
    @media only screen and (max-width: 999px) {
        width: 140px;
    }
`
const LOGO = styled.div`

    // large screen sizes
    @media only screen and (min-width: 1366px) {
        width: 100px;
    }
    @media only screen and (max-width: 1365px) {
        width: 95px;
    }
    @media only screen and (max-width: 1199px) {
        width: 90px;
    }
`
const IMAGE = styled.img`
    
    @media only screen and (min-width: 1366px) {
        width: 100%;
    }
    @media only screen and (max-width: 1365px) {
        width: 95%;
    }
    @media only screen and (max-width: 1199px) {
        width: 90%;
    }
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
    color: darkcyan;

    // large screen sizes
    @media only screen and (min-width: 1366px) {
        font-size: 40px;
    }
    @media only screen and (max-width: 1365px) {
        font-size: 35px;
    }
    @media only screen and (max-width: 1199px) {
        font-size: 25px;
    }
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

    // large screen sizes
    @media only screen and (min-width: 1366px) {
        gap: 110px;
    }
    @media only screen and (max-width: 1365px) {
        gap: 90px;
    }
    @media only screen and (max-width: 1199px) {
        gap: 80px;
    }
`
const LIST_ITEM = styled.li`
    text-transform: uppercase;

    @media only screen and (min-width: 1366px) {
        font-size: 16px;
    }
    @media only screen and (max-width: 1365px) {
        font-size: 15px;
    }
`
const LINK = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
        text-decoration: underline;
    }
`


export default NavigationBar

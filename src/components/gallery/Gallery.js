import styled from 'styled-components'

// importing static states
import LayOut from '../../assets/Event-Center-Layout-Diagram.png'
import Eventblock from '../../assets/eventblock.jpg'
import Welcome from '../../assets/herobg.jpg'
import Welcome1 from '../../assets/available1.jpg'
import Welcome2 from '../../assets/affordablespace.jpg'
import Welcome3 from '../../assets/available4.jpg'
import SmallRoom from '../../assets/8.png'
import LargeRoom from '../../assets/7.png'
import Businesscenter from '../../assets/businesscenter.jpg'




const Gallery = () => {
    return (
        <CONTAINER>
            <ROW>
                <FLEXBOX>
                    <CARD>
                        <CARDIMAGE>
                            <IMG src={LayOut} alt='small room' />
                        </CARDIMAGE>
                    </CARD>
                    <CARD>
                        <CARDIMAGE>
                            <IMG src={Eventblock} alt='small room' />
                        </CARDIMAGE>
                    </CARD>
                    <CARD>
                        <CARDIMAGE>
                            <IMG src={Welcome} alt='small room' />
                        </CARDIMAGE>
                    </CARD>
                    <CARD>
                        <CARDIMAGE>
                            <IMG src={Welcome1} alt='small room' />
                        </CARDIMAGE>
                    </CARD>
                    <CARD>
                        <CARDIMAGE>
                            <IMG src={Welcome2} alt='entire venue' />
                        </CARDIMAGE> 
                    </CARD>
                    <CARD>
                        <CARDIMAGE>
                            <IMG src={Businesscenter} alt='entire venue' />
                        </CARDIMAGE> 
                    </CARD>
                    <CARD>
                        <CARDIMAGE>
                            <IMG src={Welcome3} alt='small room' />
                        </CARDIMAGE>
                    </CARD>
                    <CARD>
                        <CARDIMAGE>
                            <IMG src={LargeRoom} alt='small room' />
                        </CARDIMAGE>
                    </CARD>
                    <CARD>
                        <CARDIMAGE>
                            <IMG src={SmallRoom} alt='entire venue' />
                        </CARDIMAGE> 
                    </CARD>
                </FLEXBOX>
            </ROW>
        </CONTAINER>
    )
}


// STYLED COMPONENTS

const CONTAINER = styled.div`
    border: 1px solid inherit;
    padding: 30px;
`
const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
    padding: 30px;
`
const FLEXBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
    text-align: center;
    gap: 30px;
`
const CARD = styled.div`
    border: 1px solid inherit;
`
const CARDIMAGE = styled.div`
    border: 1px solid inherit;
    width: 350px;
    margin: 0 auto;
`
const IMG = styled.img`
    width: 100%;
`



export default Gallery

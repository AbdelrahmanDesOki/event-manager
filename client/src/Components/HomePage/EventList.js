import './homepageStyle.css'
import { Link } from 'react-router-dom'

const EventList = () => {
    return(
        <>
            <h2 style={{marginBottom: "40px"}}>EVENTS</h2>
            <p>
                <Link to="#" class="bold" >*Full Name of the event Ea adipisicing nulla pariatur voluptate sit ex eu ut.*</Link>  
                <br/>
                <span class="muted font-size-sm"> *Date and location of the event*</span>
                <hr style={{color: "white"}}/>
            </p>
            <p>
                <Link to="#" class="bold" >*Full Name of the event Ea adipisicing nulla pariatur voluptate sit ex eu ut.*</Link>  
                <br/>
                <span class="muted font-size-sm"> *Date and location of the event*</span>
                <hr style={{color: "white"}}/>
            </p>
            <p>
                <Link to="#" class="bold" >*Full Name of the event Ea adipisicing nulla pariatur voluptate sit ex eu ut.*</Link>  
                <br/>
                <span class="muted font-size-sm"> *Date and location of the event*</span>
                <hr style={{color: "white"}}/>
            </p>
            <p>
                <Link to="#" class="bold" >*Full Name of the event Ea adipisicing nulla pariatur voluptate sit ex eu ut.*</Link>  
                <br/>
                <span class="muted font-size-sm"> *Date and location of the event*</span>
                <hr style={{color: "white"}}/>
            </p>
        </>
    )
}
export default EventList
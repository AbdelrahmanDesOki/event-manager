import './homepageStyle.css'
import { Link } from 'react-router-dom'

const EventList = () => {
    return(
        <>
            <h2 style={{marginBottom: "40px"}}>EVENTS</h2>
            <p>
                <Link to="/elem" class="bold" >Santa Claus for next Month Soon!</Link>  
                <br/>
                <span class="muted font-size-sm"> *04-Dec-2022*</span>
                <hr style={{color: "white"}}/>
            </p>
            <p>
                <Link to="#" class="bold" >Tennis Event in München</Link>  
                <br/>
                <span class="muted font-size-sm"> *23-01-2023*</span>
                <hr style={{color: "white"}}/>
            </p>
            <p>
                <Link to="#" class="bold" >Boxing Champoinship</Link>  
                <br/>
                <span class="muted font-size-sm"> 02-12-2023</span>
                <hr style={{color: "white"}}/>
            </p>
            <p>
                <Link to="#" class="bold" >Swimming open Day in Spring</Link>  
                <br/>
                <span class="muted font-size-sm"> 04-03-2023</span>
                <hr style={{color: "white"}}/>
            </p>
        </>
    )
}
export default EventList
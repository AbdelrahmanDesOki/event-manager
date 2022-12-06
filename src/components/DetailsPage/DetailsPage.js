import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MapContainer from './MapContainer';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Custom.css'
import LiveStream from './LiveStream'

function  DetailsPage(){
    return(
        <><>
        <br></br>
        <br></br>
        {/* <div class="event-container">
              <h1>Photo+NameOfEvent(Link)</h1>
              <p>Date,Location of the event</p>
              <p>Countdown till the beginning of the event</p>
          </div> */}
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                    {/* <button class="btn info" type="button">Information</button>
                     <button class="btn Reg" type="button">Registeration</button>
                     <button class="btn Loc" type="button">Location</button> */}
                        <Nav.Link href="#Inf">Information</Nav.Link>
                        <Nav.Link href="#LiveStream">LiveStream</Nav.Link>
                        <Nav.Link href="#Loc">Location</Nav.Link>
                        <Nav.Link href="#Cal">Calendar</Nav.Link>
                        <Nav.Link href="#Reg">Registeration</Nav.Link>
                        <Nav.Link href="#Contact">Contact us</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
            <br>
            </br>
            <br>
            </br>
        </><><Container>
                    <Row>
                        <div class="col-sm-8">
                            <div class="cms-menu margin-bottom-xs-32"></div>

                            <h1>SANTA CLAUS CUP 2022</h1>
                            <div class="information">
                                
                                <p>&nbsp;__________________________________________________________________________</p>
                                <p id="Inf"><h3 class="panel-title"><span class="icon icon-info"></span> Information</h3></p>
                                
                                <p>Santa Claus Cup (informally called in Hungarian: Mikulás Kupa) had initially been a weekend competition 
                                    <br></br>for the youngest categories, but throughout the years it has expanded into a one-week event featuring 
                                    <br></br>the figure skaters and ice dancers of each age group, considered one of the biggest youth competitions
                                    <br></br> in Europe today.</p>
                                <p>In the recent years, more than 400 skaters have come to the event, representing 40 or even more countries
                                    <br></br>from South America to Asia. Many top-tier champions of the world competed at the Santa Claus Cup, 
                                    <br></br>including ice dancers Gabriella Papadakis and Guillaume Cizeron who have since become Olympic silver
                                    <br></br>medalists,four-time World champions and five-time consecutive European champions, as well as the 
                                    <br></br>Latvian Deniss Vasiljevs(ranked 6th in the world and 4th in the European Championships) and the Belgian 
                                    <br></br>Loena Hendrickx (ranked 5th in the European Championships).</p>
                                <br></br>
                                <br></br>
                                <p id="LiveStream"><h3 class="panel-title"><span class="icon icon-info"></span> Live Stream</h3></p>
                                <LiveStream />
                                <br></br>
                                <br></br>
                                <p id="Loc"><h3 class="panel-title"><span class="icon icon-info"></span> Location</h3></p>
                                {/* <MapContainer /> */}
                                <br></br>
                                <br></br>   
                            </div>
                        </div>

                        <div class="col-sm-4 col-sm-offset-1">
                            <div class="panel location panel-inverted">
                                <div class="panel-heading">
                                    <h3 class="panel-title"><span class="icon icon-pin"></span> Location</h3>
                                </div>
                                <div class="panel-body lineheight-sm">
                                    <div class="location">
                                        <p class="margin-xs-0">
                                            <span class="muted">
                                               Budapest, Hungary, at the Gyakorló Jégcsarnok. {'\n'}
                                            </span>
                                        </p><br></br><br></br>
                                        <div class="schedule-container">
                                            <div class="item date ordinary">
                                                <div class="icon icon-form"></div>
                                                <p id="Reg"><h3 class="panel-title"><span class="icon icon-info"></span> Registeration</h3></p>
                                                <div class="text">
                                                    <div class="title">Normal registration </div>
                                                    <strong>01 Feb-30 Sep</strong><small>23:59</small>
                                                </div>
                                            </div>
                                            <div class="item date late">
                                                <span class="icon icon-form-time"></span>
                                                <div class="text">
                                                    <div class="title">Late registrations </div><div><small>Deadline</small><strong>01 Nov</strong><small>23:59</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item date event hidden-xs">
                                                <span class="icon icon-fighters"></span>
                                                <div class="text">
                                                    <div class="title">Event duration </div><strong>13 Nov- 14 Nov</strong></div>
                                            </div>
                                        </div><br></br><br></br><br></br><br></br>
                                        <p id="Cal"><h3 class="panel-title"><span class="icon icon-info"></span> Calendar</h3></p>
                                        <p _msthash="786734" _msttexthash="1073293">To enter the Google calendar,<a title="Hozzáadás a google naptárhoz" target="_blank" href="http://www.google.com/calendar/event?action=TEMPLATE&amp;text=16th+Santa+Claus+Cup+-+FS%2FID&amp;details=%3Ca+href%3D%22http%3A%2F%2Fhunskate.hu%2Fwp-content%2Fuploads%2F2022%2F10%2FAnnouncement_Santa_Claus_Cup_International_2022_final.pdf%22%3E%3Cstrong%3EANNOUNCEMENT+INTERNATIONAL%3C%2Fstrong%3E%3C%2Fa%3E%0D%0A%0D%0A%3Ca+href%3D%22http%3A%2F%2Fhunskate.hu%2Fwp-content%2Fuploads%2F2022%2F10%2FAnnouncement_Santa_Claus_Cup_Interclub_2022.pdf%22%3E%3Cstrong%3EANNOUNCEMENT+INTERCLUB%3C%2Fstrong%3E%3C%2Fa%3E%0D%0A%0D%0A%3Ca+href%3D%22http%3A%2F%2Fhunskate.hu%2Fwp-content%2Fuploads%2F2022%2F11%2FList_of_entries_nov18.pdf%22%3E%3Cstrong%3ELIST+OF+ENTRIES%3C%2Fstrong%3E%3C%2Fa%3E%0D%0A%0D%0A%3Ca+href%3D%22https%3A%2F%2Fskatesantaclauscup.hu%2Fwp-content%2Fuploads%2F2022%2F11%2FALL-ver2.2_2022.pdf%22%3E%3Cstrong%3ETIMETABLE%3C%2Fstrong%3E%3C%2Fa%3E%0D%0A%0D%0A%3Ca+href%3D%22http%3A%2F%2Fhunskate.hu%2Fwp-content%2Fuploads%2F2022%2F10%2F02-Entry-Form-for-Skaters_SCC2022.doc%22%3E%3Cstrong%3EENTRY+FORM%3C%2Fstrong%3E%3C%2Fa%3E%0D%0A%0D%0A%3Ca+href%3D%22http%3A%2F%2Fhunskate.hu%2Fwp-content%2Fuploads%2F2022%2F10%2F01-Composition-of-Delegation_SCC2022.doc%22%3E%3Cstrong%3ECOMPOSITION+OF+DELEGATION%3C%2Fstrong%3E%3C%2Fa%3E%0D%0A%0D%0A%3Ca+href%3D%22http%3A%2F%2Fhunskate.hu%2Fwp-content%2Fuploads%2F2022%2F10%2F05-Invoice-Request-Form_SCC2022.doc%22%3E%3Cstrong%3EINVOICE+REQUEST+FORM%3C%2Fstrong%3E%3C%2Fa%3E%0D%0A%0D%0A%3Ca+href%3D%22http%3A%2F%2Fhunskate.hu%2Fwp-content%2Fuploads%2F2022%2F10%2F03-Hotel-Sheet_SCC2022.doc%22%3E%3Cstrong%3EHOTEL+SHEET%3C%2Fstrong%3E%3C%2Fa%3E&amp;dates=20221128T000001Z%2F20221128T000001Z&amp;location=" _istranslated="1">click here</a>!</p>
                                        
                                        <br></br><br></br><br></br>
                                        <div class="panel panel-inverted">
                                            <div class="panel-heading">
                                            <p id="Contact"><h3 class="panel-title"><span class="icon icon-info"></span> Contact us</h3></p>
                                            </div>
                                            <ul class="list-group">
                                                <li class="list-group-item">
                                                    <a href="mailto:registrations@ajptour.com" target="_blank">
                                                        <span class="icon icon-envelope">
                                                        </span> E-mail »
                                                    </a>
                                                </li>
                                                <li class="list-group-item">
                                                    <a href="https://www.facebook.com/SantaClausCupskating/" target="_blank">
                                                        <span class="icon icon-facebook">
                                                        </span> Facebook »
                                                    </a>
                                                </li>
                                                <li class="list-group-item">
                                                    <a href="https://www.instagram.com/hunskate/" target="_blank">
                                                        <span class="icon icon-instagram">
                                                        </span> Instagram »
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Row>
                    <Container>
                        <Row>
                        </Row>
                        
                    </Container>
                </Container></></>

    )
    }

 
export default DetailsPage ;


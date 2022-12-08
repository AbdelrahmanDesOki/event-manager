import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MapContainer from './MapContainer2.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Custom.css'
import LiveStream from './LiveStream2.js'

function EventPage2() {
    return (
        <><>
            <br></br>
            <br></br>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">

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

                    <h1>Special Olympics World Games Berlin 2023</h1>
                    <div class="information">

                        <p>&nbsp;__________________________________________________________________________</p>
                        <p id="Inf"><h3 class="panel-title"><span class="icon icon-info"></span> Information</h3></p>

                        <p>With 13 international delegations travelling to Berlin, the National Games became an occasion to compete </p>
                        <br></br>socialize and prepare for the most keenly awaited Special Olympics event of the
                        <br></br> last few years: Special Olympics World Games Berlin 2023.

                        <p>From 19 to 24 June 2022, 4,000 athletes and Unified partners from across Germany and beyond </p>
                        <br></br>competed in 20 different sports disciplines varying from the most established ones like athletics,
                        <br></br>football, and basketball to those still in development such as judo and triathlon.

                        <br></br>
                        <br></br>
                        <p id="LiveStream"><h3 class="panel-title"><span class="icon icon-info"></span> Live Stream</h3></p>
                        <LiveStream />
                        <br></br>
                        <br></br>
                        <p id="Loc"><h3 class="panel-title"><span class="icon icon-info"></span> Location</h3></p>
                        <MapContainer />
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
                                        Germany, Berlin. {'\n'}
                                    </span>
                                </p><br></br><br></br>
                                <div class="schedule-container">
                                    <div class="item date ordinary">
                                        <div class="icon icon-form"></div>
                                        <p id="Reg"><h3 class="panel-title"><span class="icon icon-info"></span> Registeration</h3></p>
                                        <div class="text">
                                            <div class="title">Date </div>
                                            <strong>From 1 to 30 June 2022</strong>
                                        </div>
                                    </div>

                                    <div class="item date event hidden-xs">
                                        <span class="icon icon-fighters"></span>
                                        <div class="text">
                                            <div class="title">Event duration </div><strong>From 19 to 24 June 2022</strong></div>
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
                                            <a href="https://www.facebook.com/SpecialOlympics" target="_blank">
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


export default EventPage2;


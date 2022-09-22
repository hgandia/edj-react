import { Container, Row } from 'reactstrap';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

const Calendar = () => {
    return (
         <Container>
             <Row>
             <ReactEmbeddedGoogleCalendar publicUrl = "https://calendar.google.com/calendar/embed?height=700&wkst=1&bgcolor=%23E4C441&ctz=America%2FNew_York&hl=es&showPrint=0&showTitle=1&showNav=1&showDate=1&showTabs=1&showCalendars=1&title=Eventos%20del%20Mes&src=bGExcmFlc3RyZWxsYWRlamFjb2JAZ21haWwuY29t&color=%237CB342" style={{ border:'solid', size: '10', color: 'darkblue' }} width="1440" height="800" frameborder="0" scrolling="no" />
             <br/>
             </Row>
         </Container>
    );
}
export default Calendar;
import bible from '../app/assets/img/bibleClipArt.png';
import { Link } from 'react-router-dom';

const BiblePortal = () => {
    return(
        <>
            <br />
            <br />
            <h1 style={{ fontSize: '5rem'}}>Biblia Interactiva</h1>
            <Link to='/escueladominical/bible'>
                <img src={bible} alt='bible' height='50%' width='100%' />
            </Link>
            
        </>
            
       
    )
}
export default BiblePortal;
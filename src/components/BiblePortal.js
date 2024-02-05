import bible from '../app/assets/img/bibleClipArt.png';
import { Link } from 'react-router-dom';

const BiblePortal = () => {
    return(
        <>
            <br />
            <div style={{
                    background:'white',
                    border:'solid 1rem darkblue',
                    borderRadius: '120rem',
                    marginBottom:'5rem'

        }}>
                <h1 style={{ margin: '1rem', fontSize: '5rem', textAlign: 'center'}}>Biblia Interactiva</h1>
                <Link to='/escueladominical/bible' style={{ display:'flex', justifyContent:'center'}}>
                    <img src={bible} alt='bible' width='35%' />
                </Link>
            </div>
            
        </>
            
       
    )
}
export default BiblePortal;
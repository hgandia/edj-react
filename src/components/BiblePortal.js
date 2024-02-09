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
                <h1 id='biLink'>Biblia Interactiva</h1>
                <Link to='/escueladominical/bible' preventScrollReset={true} style={{ display:'flex', justifyContent:'center'}}>
                    <img id='bibleIcon'src={bible} alt='bible' />
                </Link>
            </div>
        </>
    )
}
export default BiblePortal;
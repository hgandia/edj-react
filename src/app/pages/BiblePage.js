import { Container, Row, Col, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBible } from '../../features/bible/bibleSlice';
import { useEffect, useState } from 'react';

const BiblePage = () => {
    const dispatch = useDispatch();
    const bibleArray = useSelector(state => state.bible.bibleArray);
    //const isLoading = useSelector(state => state.bible.loading);
    const [clickedOT, setClickedOT] = useState(false);
    const [clickedNT, setClickedNT] = useState(false);
    const [otBooks, setOTBooks] = useState([]);
    const [ntBooks, setNTBooks] = useState([]);

    useEffect(() => {
        dispatch(fetchBible());
    }, [dispatch]);

    useEffect(() => {
        setOTBooks(bibleArray.filter(book => book.testament === 'OT'))
    }, [ bibleArray, clickedOT]);

    useEffect(() => {
        setNTBooks(bibleArray.filter(book => book.testament === 'NT'))
    }, [ bibleArray, clickedNT]);  

    return(
        <Container>
            <Row>
                <Col style={{textAlign: 'center'}}>
                    <h1>Biblia Interactiva</h1>
                    <Button color='warning' size='lg' onClick={() => setClickedOT(true)}>
                        Antiguo Testamento
                    </Button>{' '}
                    <Button color='warning' size='lg' onClick={() => setClickedNT(true)}>
                        Nuevo Testamento
                    </Button>
                </Col>
            </Row>
            <Row style={{marginTop:'3rem'}}>
                <Col style={{textAlign:'left', marginLeft:''}}>
                    {
                         clickedOT && otBooks.map(book => (
                                <Button color='primary' key={book.id} style={{ margin: '4px' }}>
                                    {book.name}
                                </Button> 
                        ))
                    }
                </Col>
                <Col>
                    {
                        clickedNT && ntBooks.map(book => (
                            <Button color='primary' key={book.id} style={{ margin: '4px' }}>
                                {book.name}
                            </Button>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default BiblePage;
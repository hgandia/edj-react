import { Container, Row, Col, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBible } from '../../features/bible/bibleSlice';
import { useEffect } from 'react';

const BiblePage = () => {
    const dispatch = useDispatch();
    const bibleArray = useSelector(state => state.bible.bibleArray);
    const isLoading = useSelector(state => state.bible.loading);

    useEffect(() => {
        dispatch(fetchBible());
    }, [dispatch]);

    const getOTBibleBooks = () => {
        const otBooks = bibleArray.filter(book => book.testament === 'OT');
        return(
            otBooks.map(book => (
                <>
                    <Button color='primary'key={book.id} style={{margin:'4px'}}>
                        {book.name}
                    </Button>{' '}
                </>
            ))
        );        
    }

    const getNTBibleBooks = () => {
        const ntBooks = bibleArray.filter(book => book.testament === 'NT');
        return(
            ntBooks.map(book => (
            <>
                <Button color='primary'key={book.id} style={{margin:'4px'}}>
                    {book.name}
                </Button>{' '}
            </>
            ))
        );         
    }

    return(
        <Container>
            <Row>
                <Col style={{textAlign: 'center'}}>
                    <h1>Biblia Interactiva</h1>
                    <Button color='warning' size='lg' onClick={getOTBibleBooks} >
                        Antiguo Testamento
                    </Button>{' '}
                    <Button color='warning' size='lg' onClick={getNTBibleBooks}>
                        Nuevo Testamento
                    </Button>
                </Col>
            </Row>
            <Row style={{marginTop:'3rem'}}>
                <Col style={{textAlign:'left', marginLeft:''}}>
                    <h2>Libros del Antiguo Testamento</h2>
                    {
                        isLoading ? <p>Loading...</p> : getOTBibleBooks()
                    }
                </Col>
                <Col>
                    <h2>Libros del Nuevo Testamento</h2>
                    {
                        isLoading ? <p>Loading...</p> : getNTBibleBooks()
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default BiblePage;
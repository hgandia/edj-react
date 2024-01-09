import { Container, Row, Col, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBible } from '../../features/bible/bibleSlice';

const BiblePage = () => {
    const dispatch = useDispatch();
    const bibleArray = useSelector(state => state.bible.bibleArray);

    const getBibleBooks = () => {
        const booksReturned = dispatch(fetchBible());
        console.log('Data returned is: ', booksReturned);
        
    }

    return(
        <Container>
            <Row>
                <Col style={{textAlign: 'center'}}>
                    <h1>This is the Bible Page!!</h1>
                    <Button color='warning' size='lg' onClick={getBibleBooks}>
                        Get Bible Books
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Bible Books:</h2>
                    {bibleArray.map((book) => (
                        <p key={book.id}>{book.name}</p>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default BiblePage;
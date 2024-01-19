import { Container, Row, Col, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBibleBooks, fetchBibleBookChapter } from '../../features/bible/bibleSlice';
import { useEffect, useState } from 'react';

const BiblePage = () => {
    const dispatch = useDispatch();
    const bibleArray = useSelector(state => state.bible.bibleArray);
    //const isLoading = useSelector(state => state.bible.loading);
    const [clickedOT, setClickedOT] = useState(false);
    const [clickedNT, setClickedNT] = useState(false);
    const [otBooks, setOTBooks] = useState([]);
    const [ntBooks, setNTBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState('');
    const [bookChapters, setBookChapters] = useState([]);
    const [chapter, setChapter] = useState(null);
    const [chapterText, setChapterText] = useState([]);

    useEffect(() => {
        dispatch(fetchBibleBooks());
    }, [dispatch]);

    useEffect(() => {
        if(selectedBook && chapter){
            dispatch(fetchBibleBookChapter( {selectedBook, chapter} ));
        }
        
    }, [dispatch, selectedBook, chapter]);


    useEffect(() => {
        setOTBooks(bibleArray.filter(book => book.testament === 'OT'));
    }, [ bibleArray, clickedOT]);

    useEffect(() => {
        setNTBooks(bibleArray.filter(book => book.testament === 'NT'));
    }, [ bibleArray, clickedNT]);  

    useEffect(() => {
        setBookChapters(bibleArray.find(book => book.id === selectedBook)?.chapters || []);
    }, [bibleArray, selectedBook]);

    useEffect(() => {
       setChapterText(bibleArray.filter(chapter => chapter.cleanText));
       //console.log('chapterText Array is: ', chapterText);
    }, [bibleArray, chapter]);

    return(
        <Container>
            <Row>
                <Col style={{textAlign: 'center'}}>
                    <h1 style={{ color: 'darkblue'}}>Biblia Interactiva</h1>
                    <Button color='warning' size='lg' onClick={() => setClickedOT(true)}>
                        Antiguo Testamento
                    </Button>{' '}
                    <Button color='warning' size='lg' onClick={() => setClickedNT(true)}>
                        Nuevo Testamento
                    </Button>
                </Col>
            </Row>
            <Row style={{marginTop:'4rem'}}>
                <Col style={{textAlign:'left', marginLeft:'-18rem'}}>
                    {
                         clickedOT && otBooks.map(book => (
                                <Button color='primary' key={book.id} style={{ margin: '4px' }} onClick={() => setSelectedBook(book.id)}>
                                    {book.name}
                                </Button> 
                        ))
                    }
                </Col>
                <Col>
                    {
                        clickedNT && ntBooks.map(book => (
                            <Button color='primary' key={book.id} style={{ margin: '4px' }} onClick={() => setSelectedBook(book.id)}>
                                {book.name}
                            </Button>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:'center', marginLeft:'', marginTop: '6rem'}}>
                        {
                            selectedBook && bookChapters.map(chapter => (
                                    <Button color='success' key={chapter.id} style={{ margin: '4px' }} onClick={() => setChapter(chapter.chapter)}>
                                        {chapter.chapter}
                                    </Button>
                                )
                            )
                        }
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:'left', marginLeft:'', marginTop: '6rem'}}>
                        {
                             chapter && chapterText.map((text, idx) => (
                                    <p color='success' key={idx}>
                                        {text.cleanText}
                                    </p>
                                )
                            )
                        }
                </Col>
            </Row>
        </Container>
    )
}

export default BiblePage;
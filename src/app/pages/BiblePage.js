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
        console.log('otBooks: ', otBooks);
        
    }, [ bibleArray, clickedOT]);

    useEffect(() => {
        setNTBooks(bibleArray.filter(book => book.testament === 'NT'));
        console.log('ntBooks: ', ntBooks);
        
    }, [ bibleArray, clickedNT]);  

    useEffect(() => {
        setBookChapters(bibleArray.find(book => book.id === selectedBook)?.chapters || []);
    }, [bibleArray, selectedBook]);

    useEffect(() => { 
       bibleArray.filter(chapter => chapter);
       const subsetBibleArray = bibleArray.map( text => text.cleanText );
        
        console.log('bibleArray is: ', bibleArray);
        console.log('subseBibleArray is: ', subsetBibleArray);
       setChapterText(subsetBibleArray);
       console.log('chapterText is: ', chapterText);
       return(
        () => {
            setChapterText([]);
        }
    );
       
    }, [bibleArray, chapter]);

    return(
        <Container>
            <Row>
                <Col style={{textAlign: 'center'}}>
                    <h1 style={{ color: 'darkblue'}}>Biblia Interactiva</h1>
                    <Button style={{margin: '2rem'}} color='warning' size='lg' onClick={() => setClickedOT(true)}>
                        Antiguo Testamento
                    </Button>{' '}
                    <Button style={{margin: '2rem'}} color='warning' size='lg' onClick={() => setClickedNT(true)}>
                        Nuevo Testamento
                    </Button>
                </Col>
            </Row>
            <Row style={{marginTop:'4rem'}}>
                <Col style={{textAlign:'left', marginLeft:'-18rem'}}>
                    {
                         clickedOT && otBooks.sort((b1, b2) => {
                                    if (b1.order < b2.order) return -1;
                                    if (b1.order > b2.order) return 1;
                                    return 0;
                                }).map(book => (
                                    <Button color='primary' key={book.order} style={{ margin: '4px' }} onClick={() => setSelectedBook(book.id)}>
                                        {book.name}
                                    </Button> 
                            ))
                        }
                </Col>
                <Col style={{textAlign:'left', marginRight:'-18rem'}}>
                    {
                        clickedNT && ntBooks.sort((b1, b2) => {
                                    if (b1.order < b2.order) return -1;
                                    if (b1.order > b2.order) return 1;
                                    return 0;
                                }).map(book => (
                                    <Button color='primary' key={book.order} style={{ margin: '4px' }} onClick={() => setSelectedBook(book.id)}>
                                        {book.name}
                                    </Button>
                            ))}
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:'center', marginLeft:'', marginTop: '6rem'}}>
                        {
                            bookChapters.map(ch => (
                                    <Button color='success' key={ch.id} style={{ margin: '4px' }} onClick={() => setChapter(ch.chapter)}>
                                        {ch.chapter}
                                    </Button>
                                )
                            )
                        }
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:'left', marginLeft:'', marginTop: '6rem'}}>
                        {
                              chapterText.map((text, idx) => (
                                    <p key={idx}>
                                        {text}
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
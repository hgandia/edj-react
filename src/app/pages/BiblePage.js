import { fetchBibleBooks, fetchBibleBookChapter } from '../../features/bible/bibleSlice';
import { Container, Row, Col, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const BiblePage = () => {
    const dispatch = useDispatch();
    const bibleArray = useSelector(state => state.bible.bibleArray);
    const newBibleArray = useSelector(state => state.bible.newBibleArray);
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
    }, [ clickedOT ]);

    useEffect(() => {
        setNTBooks(bibleArray.filter(book => book.testament === 'NT')); 
    }, [ clickedNT ]);  

    useEffect(() => {
        setBookChapters(bibleArray.find(book => book.id === selectedBook)?.chapters || []);   
        return( () => {
            setChapter(null);
        });

    }, [ selectedBook ]);

    useEffect(() => { 
       newBibleArray.filter(chapter => chapter);
       setChapterText(newBibleArray.map( text => text.text ));  
    }, [ newBibleArray, chapter ]);

    console.log('newBibleArray: ', newBibleArray);
    console.log('chapterText: ', chapterText);

    return(
        <Container>
            <Row>
                <Col style={{textAlign: 'center', marginTop: '3.5rem'}}>
                    <h1 style={{ color: 'darkblue', fontWeight: "bold", fontSize: '8rem'}}>Biblia Interactiva</h1>
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
                            selectedBook && bookChapters.map(ch => (
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
                            chapter && chapterText.map((text, idx) => (  
                                    <div key={idx} dangerouslySetInnerHTML={{__html: text}}/>
                                )
                            )
                        }
                </Col>
            </Row>
        </Container>
    )
}

export default BiblePage;
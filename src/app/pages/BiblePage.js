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
    const [selectedBookName, setSelectedBookName] = useState('');
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
    }, [ bibleArray, clickedOT ]);

    useEffect(() => {
        setNTBooks(bibleArray.filter(book => book.testament === 'NT')); 
    }, [ bibleArray, clickedNT ]);  

    useEffect(() => {
        setBookChapters(bibleArray.find(book => book.id === selectedBook)?.chapters || []);   
        return( () => {
            setChapter(null);
        });

    }, [ bibleArray, selectedBook ]);

    useEffect(() => { 
       newBibleArray.filter(chapter => chapter);
       setChapterText(newBibleArray.map( text => text.text ));  
    }, [ newBibleArray, chapter ]);

    return(
        <Container>
            <Row>
                <Col style={{textAlign: 'center', marginTop: '3.5rem'}}>
                    <h1 className='bibleTitle'>Biblia Interactiva</h1>
                    <h6>RVA 1960</h6>
                    <Button
                            className='testamentButton' 
                            size='lg' 
                            color='info'
                            onClick={() => setClickedOT(true)}>
                        Antiguo Testamento
                    </Button>{' '}
                    <Button 
                            className='testamentButton'
                            size='lg'
                            color='info' 
                            onClick={() => setClickedNT(true)}>
                        Nuevo Testamento
                    </Button>
                </Col>
            </Row>
            <Row style={{marginTop:'4rem'}}>
                <Col xs='12' md='6' id='otBookLayout'>
                    {
                        clickedOT && otBooks.sort((b1, b2) => {
                                    if (b1.order < b2.order) return -1;
                                    if (b1.order > b2.order) return 1;
                                    return 0;
                                }).map(book => (
                                    <Button 
                                            color='info' 
                                            key={book.order}
                                            onClick={() => {setSelectedBookName(book.name); setSelectedBook(book.id)}}
                                            style={{
                                                    margin: '1px',  
                                                    padding: '10px',
                                                    color: '#00008B', 
                                                    fontFamily:'papyrus, sans-serif',
                                                    fontWeight: 'bold',
                                                    border: '3px solid #00008B'
                                    }}>
                                        {book.name}
                                    </Button> 
                            ))
                    }
                </Col>
                <Col id='ntBookLayout'>
                    {
                        clickedNT && ntBooks.sort((b1, b2) => {
                                    if (b1.order < b2.order) return -1;
                                    if (b1.order > b2.order) return 1;
                                    return 0;
                                }).map(book => (
                                    <Button
                                            color='info'
                                            key={book.order} 
                                            onClick={() => {setSelectedBookName(book.name); setSelectedBook(book.id)}}
                                            style={{ 
                                                    margin: '1px',  
                                                    padding: '10px',
                                                    color: '#00008B', 
                                                    fontFamily:'papyrus, sans-serif',
                                                    fontWeight: 'bold',
                                                    border: '3px solid #00008B'
                                }}>
                                        {book.name}
                                    </Button>
                            ))}
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:'center', marginLeft:'', marginTop: '6rem'}}>
                        {
                            selectedBook && bookChapters.map(ch => (
                                    <Button 
                                            key={ch.id} 
                                            onClick={() => setChapter(ch.chapter)}
                                            style={{ 
                                                    margin: '2px',  
                                                    padding: '5px 10px',
                                                    backgroundColor: '#00008B',
                                                    color: '#FAEED7', 
                                                    fontFamily:'papyrus, sans-serif',
                                                    fontWeight: 'bold',
                                                    border: '3px solid #FAEED7'
                                }}>
                                        {ch.chapter}
                                    </Button>
                                )
                            )
                        }
                </Col>
            </Row>
            <Row>
                <Col style={{ marginTop: '8rem', color: '#00008B'}}>
                    <h1 style={{fontWeight: 'bold'}}>{selectedBookName}{' '}{chapter}</h1>
                </Col>
            </Row>
            <Row>
                <Col style={{
                            textAlign:'left', 
                            marginLeft:'', 
                            paddingLeft: '3rem',
                            paddingTop: '1rem',
                            marginTop: '1rem',
                            color: '#00008B',
                            backgroundColor: chapter ? '#F5F5F5' : '',
                            fontSize: '20px',
                            border: chapter ? '10px double #00008B' : '',
                           
                }}><br />
                        {
                            chapter && chapterText.map((text, idx) => (  
                                    <div key={idx} dangerouslySetInnerHTML={{__html: text}} />
                                )
                            )
                        } 
                </Col>
            </Row>
        </Container>
    )
}

export default BiblePage;
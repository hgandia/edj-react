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

    return(
        <Container>
            <Row>
                <Col md='12' style={{textAlign: 'center', marginTop: '3.5rem'}}>
                    <h1 style={{ color: 'darkblue', fontWeight: "bold", fontSize: '8rem'}}>Biblia Interactiva</h1>
                    <h6 style={{ 
                                color: 'darkblue', 
                                fontWeight: "bold", 
                                fontSize: '1rem', 
                                fontFamily: 'papyrus, sans-serif',
                                textAlign: 'center',
                                marginTop: '-1rem'
                    }}>RVA 1960</h6>
                    <Button 
                            size='lg' 
                            onClick={() => setClickedOT(true)}
                            style={{ 
                                    margin: '4rem', 
                                    color: '#FFCA2C',
                                    backgroundColor: '#00008B', 
                                    fontFamily: 'papyrus, sans-serif',
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    padding: '2rem',
                                    border: '3px solid #FFCA2C',
                                    //borderRadius: '5rem'
                    }}>
                        Antiguo Testamento
                    </Button>{' '}
                    <Button 
                            size='lg' 
                            onClick={() => setClickedNT(true)}
                            style={{ 
                                margin: '4rem',
                                color: '#FFCA2C', 
                                backgroundColor: '#00008B', 
                                fontFamily: 'papyrus, sans-serif',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                padding: '2rem',
                                border: '3px solid #FFCA2C',
                               // borderRadius: '5rem'
                    }}>
                        Nuevo Testamento
                    </Button>
                </Col>
            </Row>
            <Row style={{marginTop:'4rem'}}>
                <Col xs='12' md='6' style={{ textAlign: 'left'}}>
                    {
                        clickedOT && otBooks.sort((b1, b2) => {
                                    if (b1.order < b2.order) return -1;
                                    if (b1.order > b2.order) return 1;
                                    return 0;
                                }).map(book => (
                                    <Button 
                                            color='warning' 
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
                <Col style={{ textAlign: 'right'}}>
                    {
                        clickedNT && ntBooks.sort((b1, b2) => {
                                    if (b1.order < b2.order) return -1;
                                    if (b1.order > b2.order) return 1;
                                    return 0;
                                }).map(book => (
                                    <Button
                                            color='warning'
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
                                                    color: '#FFCA2C', 
                                                    fontFamily:'papyrus, sans-serif',
                                                    fontWeight: 'bold',
                                                    border: '3px solid #FFCA2C'
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
                            marginTop: '1rem',
                            color: '#00008B',
                            backgroundColor: chapter ? '#FAEED7' : '',
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
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
                <Col style={{textAlign: 'center', marginTop: '3.5rem'}}>
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
                                    backgroundColor: '#00008B', 
                                    fontFamily: 'papyrus, sans-serif',
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    padding: '2rem',
                                    border: '1rem double white',
                                    borderRadius: '5rem'
                    }}>
                        Antiguo Testamento
                    </Button>{' '}
                    <Button 
                            size='lg' 
                            onClick={() => setClickedNT(true)}
                            style={{ 
                                margin: '4rem', 
                                backgroundColor: '#00008B', 
                                fontFamily: 'papyrus, sans-serif',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                padding: '2rem',
                                border: '1rem double white',
                                borderRadius: '5rem'
                    }}>
                        Nuevo Testamento
                    </Button>
                </Col>
            </Row>
            <Row style={{marginTop:'4rem'}}>
                <Col style={{textAlign:'left', marginLeft:'-10rem'}}>
                    {
                        clickedOT && otBooks.sort((b1, b2) => {
                                    if (b1.order < b2.order) return -1;
                                    if (b1.order > b2.order) return 1;
                                    return 0;
                                }).map(book => (
                                    <Button 
                                            size='lg' 
                                            key={book.order}
                                            onClick={() => {setSelectedBookName(book.name); setSelectedBook(book.id)}}
                                            style={{ 
                                                    margin: '4px', 
                                                    backgroundColor:'#9400D3', 
                                                    fontFamily:'papyrus',
                                                    fontSize: '25px',
                                                    fontWeight: 'bold',
                                                    border: '1rem double white',
                                                    borderRadius: '5rem' 
                                    }}>
                                        {book.name}
                                    </Button> 
                            ))
                    }
                </Col>
                <Col style={{textAlign:'left', marginRight:'-10rem'}}>
                    {
                        clickedNT && ntBooks.sort((b1, b2) => {
                                    if (b1.order < b2.order) return -1;
                                    if (b1.order > b2.order) return 1;
                                    return 0;
                                }).map(book => (
                                    <Button 
                                            size='lg'
                                            key={book.order} 
                                            onClick={() => {setSelectedBookName(book.name); setSelectedBook(book.id)}}
                                            style={{ 
                                                margin: '4px', 
                                                backgroundColor:'#9400D3', 
                                                fontFamily:'papyrus',
                                                fontSize: '25px',
                                                fontWeight: 'bold',
                                                border: '1rem double white',
                                                borderRadius: '5rem' 
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
                                            size='lg'
                                            key={ch.id} 
                                            onClick={() => setChapter(ch.chapter)}
                                            style={{ 
                                                margin: '4px', 
                                                backgroundColor:'#8B0000', 
                                                fontFamily:'papyrus',
                                                fontSize: '25px',
                                                fontWeight: 'bold',
                                                border: '1rem double white',
                                                borderRadius: '3rem' 
                                }}>
                                        {ch.chapter}
                                    </Button>
                                )
                            )
                        }
                </Col>
            </Row>
            <Row>
                <Col style={{ marginTop: '8rem'}}>
                        <h1>{selectedBookName}{' '}{chapter}</h1>
                </Col>
            </Row>
            <Row>
                <Col style={{
                            textAlign:'left', 
                            marginLeft:'', 
                            marginTop: '1rem',
                            backgroundColor: '#FFFFFF',
                            fontSize: '20px',
                            border: chapter ? '10px double #00008B' : ''
                           
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
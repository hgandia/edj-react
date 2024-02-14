import { fetchBibleBooks, fetchBibleBookChapter } from '../features/bible/bibleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { formatDate } from '../utils/formatDate';
import { useEffect, useState } from 'react';

const DailyBibleVerse = () => {
    const dispatch = useDispatch();
    const dateToday = Date();
    const dateTodayFormatted = formatDate(dateToday);
    const isLoading = useSelector(state => state.bible.isLoading);
    const bibleArray = useSelector(state => state.bible.bibleArray);
    const newBibleArray = useSelector(state => state.bible.newBibleArray);
    const [randomBibleObj, setRandomBibleObj] = useState({});
    const [randomBibleChapter, setRandomBibleChapter] = useState(null);
    const [randomBibleVerse, setRandomBibleVerse] = useState('');

    useEffect(() => {
        dispatch(fetchBibleBooks());
    }, [dispatch]);

    useEffect(() => {
        if(bibleArray.length > 0){
            setRandomBibleObj(bibleArray[Math.floor(Math.random() * bibleArray.length)]);
        }
    }, [dateTodayFormatted, bibleArray]);

    useEffect(() => {
        setTimeout(() => {
            setRandomBibleChapter(randomBibleObj?.chapters[Math.floor(Math.random() * randomBibleObj.chapters.length)]?.chapter);
        }, 500);
        
    }, [randomBibleObj]);
          
    const selectedBook = randomBibleObj?.id || '';
    const chapter = randomBibleChapter;

    useEffect(() => {
        if(selectedBook && chapter){
            dispatch(fetchBibleBookChapter( {selectedBook, chapter} ));
        }
    }, [dispatch, selectedBook, chapter]);

    console.log('newBibleArray: ', newBibleArray);

    useEffect(() => { 
        if(newBibleArray.length > 0){
            setRandomBibleVerse(newBibleArray[Math.floor(Math.random() * newBibleArray.length)]);
        }
     }, [ newBibleArray, chapter ]);

    return(
        <Container>
            <hr className='mt-5' style={{ justifyContent: 'center', border: 'solid 2px darkblue', width: '100%' }} />
            <br />
            <Row>
                <Col style={{ backgroundColor: '#F5F5F5', border: '2px solid #00008B'}}>
                    <p><em><u>Versiculo Bíblico del Día</u></em></p>
                    {
                        isLoading ? <p>Loading...</p> :
                        <>
                            <p>{randomBibleVerse.reference}</p>
                            <div dangerouslySetInnerHTML={{__html: randomBibleVerse.text}} />
                            <h6 style={{textAlign:'right'}}><em>~ RVA 1960</em></h6>
                        </>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default DailyBibleVerse;
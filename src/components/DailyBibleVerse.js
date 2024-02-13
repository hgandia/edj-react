import { fetchBibleBooks, fetchBibleBookChapter } from '../features/bible/bibleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { formatDate } from '../utils/formatDate';
import { useEffect, useState } from 'react';

const DailyBibleVerse = () => {
    const dispatch = useDispatch();
    const dateToday = Date();
    const dateTodayFormatted = formatDate(dateToday);
    const bibleArray = useSelector(state => state.bible.bibleArray);
    const newBibleArray = useSelector(state => state.bible.newBibleArray);
    const [randomBibleObj, setRandomBibleObj] = useState([]);

    useEffect( () => {
        setRandomBibleObj(bibleArray[Math.floor(Math.random() * bibleArray.length)]);
    }, [dateTodayFormatted]);

  //  const randomBibleObj = bibleArray[Math.floor(Math.random() * bibleArray.length)];
    const randomBibleBook = randomBibleObj?.name || '';
    const randomBibleChapter = randomBibleObj?.chapters[Math.floor(Math.random() * randomBibleObj.chapters.length)]?.chapter || 0;
   
    const selectedBook = randomBibleObj?.id || '';
    const chapter = randomBibleChapter;

    console.log('randomBibleObj: ', randomBibleObj);
    console.log('randomBibleBook: ', randomBibleBook);
    console.log('randomBibleChapter: ', randomBibleChapter);
    console.log('selectedBook: ', selectedBook);
    console.log('chapter: ', chapter);

    useEffect(() => {
        dispatch(fetchBibleBooks());
    }, [dispatch]);

    useEffect(() => {
        if(selectedBook && chapter){
            dispatch(fetchBibleBookChapter( {selectedBook, chapter} ));
        }

    }, [dispatch, selectedBook, chapter]);

    console.log('newBibleArray: ', newBibleArray);

    return(
        <Container>
            <Row>
                <Col>
                    <p></p>
                </Col>
            </Row>
        </Container>
    );
}

export default DailyBibleVerse;
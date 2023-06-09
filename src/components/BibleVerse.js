import { Container, Row, Col } from 'reactstrap';
import { BIBLE } from "../app/shared/BIBLE";
import { useState, useEffect } from 'react';

const BibleVerse = () => {
    const randomBibleVerseIndex = () => {
        return (Math.floor(Math.random() * BIBLE.length) + 1);
    };

    const [bibleVerseIndex, setBibleVerseIndex] = useState(randomBibleVerseIndex());

    useEffect(() => {
        const oncePerDay = setInterval(() => {
        setBibleVerseIndex(randomBibleVerseIndex());
        }, 86400000);

        return () => {
        clearInterval(oncePerDay);
        };
  }, []);  

    const bibleVerseOfTheDay = BIBLE[bibleVerseIndex];

    return(
        <Container>
            <hr className='mt-5' style={{ justifyContent: 'center', border: 'solid 2px darkblue', width: '100%' }} />
            <br />
            <Row>
                <Col>    
                    <p><em><u>Versiculo Bíblico del Día</u></em></p>                    
                    <p>{bibleVerseOfTheDay.text}</p>
                    <p>
                        <em>
                            ~ {bibleVerseOfTheDay.book_name} {bibleVerseOfTheDay.chapter}:{bibleVerseOfTheDay.verse}
                        </em>
                    </p>
                    <p>RVA 1909</p> 
                </Col>
            </Row>
        </Container>
    );
};

export default BibleVerse;
  
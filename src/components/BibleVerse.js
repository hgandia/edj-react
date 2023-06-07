import { getVerseOfTheDay } from "@glowstudent/youversion";

const BibleVerse = () => {
    (async () => {
        const verse = await fetch(getVerseOfTheDay());
        console.log('The verse of the day is: ', verse);
    })();
};

export default BibleVerse;
  
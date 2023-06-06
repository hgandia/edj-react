const YouVersion = require("@glowstudent/youversion");

(async () => {
    const verse = await fetch(YouVersion.getVerseOfTheDay());
    console.log('The verse of the day is: ', verse);
})();
  
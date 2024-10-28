const palindromes = function (phrase) {
    phrase = phrase.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    phraseArr = phrase.split('');
    reversedPhraseArr = phrase.split('').reverse();

    console.log(phraseArr);
    console.log(reversedPhraseArr);

    for (let index = 0; index < phraseArr.length; index++) {
        if (phraseArr[index] === reversedPhraseArr[index]) continue;
        return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;

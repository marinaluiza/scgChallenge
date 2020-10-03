// This function return true or false accornding the words inserted
// The input is a list of words separated by comma to be transformed in an array of strings
// The function uses the some javascript method, which return true if any element iterated pass in the callback function test
// In this case, the callback test is to check if the word is prefix of the other words.
// If some word is a prefix, then the list is not consistent!
export const isConsistent = (listOfWords: string): boolean => {
    const words = listOfWords.split(',');
    const isConsistent = words.some((word, index) => filterIsPrefix(words, word, index));
    return !isConsistent;
}


//This method will remove the word itself to not compare with it, 
// and then will check if its a prefix of the other words using the startsWith method
const filterIsPrefix = (words: string[], word: string, index: number): boolean => {
    const otherWords = words;
    otherWords.splice(index, 1);
    return otherWords.findIndex(item => item.startsWith(word)) >= 0;
}
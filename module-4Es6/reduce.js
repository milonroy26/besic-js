// array number gula sum korbo
const nums = [1, 3, 4, 5, 6, 7, 8];

const TotalNums = nums.reduce((preNum, currentNum) => {
    return preNum + currentNum;
})

console.log(TotalNums);

// next
const myArray = ['i', 'love', 'you', 'M'];
const fullSentence = myArray.reduce((previousElement, currentEle, currentIndex, array) => {
    return previousElement + currentEle;
})
console.log(fullSentence);
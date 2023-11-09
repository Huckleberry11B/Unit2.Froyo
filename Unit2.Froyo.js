const userInputString = prompt("Please enter some Froyo flavors separated by commas:");

const stringArray = userInputString.trim().split(",");

console.log(stringArray);


// let elementCnt = stringArray.reduce((accVal, val) => {
//   accVal[val] = (accVal[val] || 0) + 1;
//   return accVal;
//  }, {});
const flavorCount = {}
 for (let i = 0; i < stringArray.length; i++) {
  const flavor = stringArray[i].trim()
  if (!flavorCount[flavor]) {
    flavorCount[flavor] = 0
  }
  flavorCount[flavor] += 1
  console.log(flavor);
 }
 
 console.table(flavorCount)
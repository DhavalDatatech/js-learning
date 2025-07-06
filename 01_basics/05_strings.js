const reponame = "dhaval"
const repoCount = 50

// console.log(reponame + repoCount + " Value");
// console.log(`Hello my repo name ${reponame} is and count is ${repoCount}`);


const gameName = new String('dhaval-s-sheth')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   dhaval    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/dhaval%20sheth"

// console.log(url)
console.log(url.replace('%20', '-'))
console.log(url.includes('sudhir'))

console.log(gameName.split('-'));
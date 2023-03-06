const p = "456s4";
let regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9_-]+$/g;
console.log(p);
console.log(p.replace(regex, "***"));
console.log("\n");

// ************************************************************************************************************
const paragraph = "dfRgd9 8fg";
regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9_-]+$\b/g;
const found = paragraph.match(regex);
console.log(paragraph);
console.log(regex.test(paragraph));
console.log(found);
console.log("\n");

// ************************************************************************************************************
const sentence = "I have an apple, he has an apple, she has an apple too.";
regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9_-]+$/g;
const newSentence = sentence.replace(regex, "***");
console.log(sentence);
console.log(newSentence);

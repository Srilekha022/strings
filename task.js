//1.
var str1 = "    hi";
var str2 = "hello    ";
var concat = str1.concat("", str2);
var trimStr = concat.trim();
var result = trimStr.toUpperCase();
console.log(result);   

//2.
var a = "hi Hello Sirlekha" ;
var middleStr = slice(3,8);
var charLastIndex =   middleStr.lastIndexOf("0");
var lowerCase = middleStr.toLowerCase();
 console.log(charLastIndex); 
console.log(lowerCase);

// //3.
var Singlechar = "M";
var str = "Srilekha";
var concatStr = Singlecha/r.concat(str);
var upperStr = concatStr.toUpperCase();
var result = upperStr.charAt(upperStr.length-2);
console.log(result);

// //4.
var a = "Srilekha";
var b = "Masam";
var c =a. slice(0,3);
var d = b.slice(-3);
var result = a.charAt(0).toUpperCase+a.slice(1,3).concat(b.slice(-3,-1))+b.charAt(b.length-1).toUpperCase();
console.log(result);

// //5.
var str = "    hello world!   "
var trimmedStr = str.trim();
var firstCharUpper = trimmedStr.charAt(0).toUpperCase();
var lastCharUpper = trimmedStr.charAt(trimmedStr.length - 1).toUpperCase();
var middlePart = trimmedStr.slice(1, trimmedStr.length - 1);
var updatedStr = firstCharUpper + middlePart + lastCharUpper;
console.log(updatedStr);
var extractedPart = updatedStr.slice(0, 5);
var anotherStr = " Everyone";
var finalStr = extractedPart + anotherStr;
console.log( finalStr);

// //6.
var a = "hello there, how are you";
var words = a.split(" ");
var wordIndex = words.indexOf("are");
console.log(wordIndex);


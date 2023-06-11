// JavaScript String charAt() Method Example
const str="Milon";  
const atChar = str.charAt(4); //charAt kno value na dile print kre first character.  
// console.log(atChar); //string-a index hisabe count kre return kre akta string er cahracter.  

// JavaScript String concat() Method Example
const x="Javatpoint";  
const y=".com";  
const z=" Tutorials"; 
const fullLink = x.concat(y, z);
// console.log(fullLink); //onek gula string ke aksate add kre.

// JavaScript String indexof() method
const web= "Learn JavaScript on Javatpoint"; 
const webIndex = web.indexOf('n');
// console.log(webIndex); //index number return kre.
// next 
// console.log(
//     web.indexOf('a', 3) //😇 akne 3 je dilam ai bisoi ta bujlam na?
// )

//JavaScript String lastIndexOf() method
const lastIndex = web.lastIndexOf('o'); //😇 akane position ta bujlam na?
// console.log(lastIndex); //return kre index number.

//JavaScript String replace() Method
const lang="Javatpoint";
const  stri = lang.replace("point","script"); //😇 Replace ki sudu string last value hte hoi?  
// console.log(stri);

// JavaScript String substring() Method Example
const strings = 'Javapoint';
const subS = strings.substring(0, 4); //akta stringer nirdisto kno cahracter ke tule nia return kre.
// console.log(subS);
// console.log(strings); //kintu main string ke change kre na.

// JavaScript String substr() Method Example
const subStrs = strings.substr(0, 4);
console.log(subStrs); //😇 substring and substr different bujte parlam na ?

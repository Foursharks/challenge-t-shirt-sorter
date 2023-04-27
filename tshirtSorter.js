// Write your solution below:

// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// // sml

// >>> tshirtSorter('smllms')
// // ssmmll

function tshirtSorter(str) {
// let arr=str.split(``); 
// let countS=0; 
// let countM=0; 
// let countL=0; 
// arr.forEach(element => {
//     if(element === `s`){
//         countS++;
//     }
//     else if(element === `m`){
//         countM++; 
//     }
//     else if(element == `l`){
//         countL++; 
//     }
//     else{
//         console.log(`Not a size`)
//     }
// });
// console.log(addString(countS, `s`)+addString(countM, `m`)+addString(countL, `l`))
// }

// function addString(count, letter){
//     let string =``; 
//     for(i=0;i<count; i++){
//         // letter.toString();  
//         string+=letter;
//     }
//     return(string); 
// }
let ss = ``; 
let ms = ``; 
let ls = ``; 
for(i=0; i<str.length; i++){
    if(str[i] ===`s`){
        ss+=`s`
    }
    else if(str[i]=== `m`){
        ms+=`m`
    }
    else if (str[i]=== `l`){
        ls+=`l`
    }
    else {
        console.log(`not a size`); 
    }
}
console.log(ss.concat(ms).concat(ls)); 
}

tshirtSorter(`mlsmslslsss`); 



// ES5
// global scope
/* memory leak
tumpang tindih
*/

// var a = 12;

// /** const nilainya tetap namun kita dapat mendeklarasikan dibeda scope  */
// const c = 13;
// var a = 13;

// /*block scope artinya bisa diubah dimana mana walau beda scope tapi 
// kalau di deklarasikan ulang beda scope dibaca oleh memory beda variable */
// let d = "Halo";

// {
//     var a = 13;
//     let d = "Halojuga";
//     const c = 14;
//     console.log(`lokal` + c);
    
// }
// // d = "cinn....";
// console.log(a);
// console.log(c);
// console.log(d);

for (var index = 0; index < 5; index++) {
    console.log(index);
    
}
console.log(index);
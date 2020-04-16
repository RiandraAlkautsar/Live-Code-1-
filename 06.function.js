/*
penggunaan function
*/

// const upperizedNames = ["Dimas", "Widy", "Buchori"]
//     .map(function(name){
//         return name.toUpperCase();
//     });

//     console.log(upperizedNames);


    // const upperizedNames = ["Dimas", "widy", "Buchori"]
    // .map(name => name.toUpperCase());

    // console.log(...upperizedNames);

    //Reguler VS Arrow
    // function declaration
    // function sayHello(greet){
    //     console.log(`${greet}!`);
    // }

    // //function expression
    // const sayName = function (name){
    //     console.log(`Nama saya ${nama}`);
    // }

    // const sayHello = greet => console.log(`${greet}`);
    // const sayName = name => console.log(`Nama saya ${name}`);

    ["Dimas", "Widdy", "Buchory"]
    .forEach(name => console.log(`Nama saya ${name}`));
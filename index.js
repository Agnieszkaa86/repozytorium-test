// // const personName = "Agnieszka";
// // let age;
// // let favMeal = "tomato";
// // age = 36;

// // console.log(`Mam na imię ${personName}, max ${age} lat i bardzo lubie ${favMeal}` )

// /*
//     Metody do wykorzystania:
//     charAt()
//     includes()
//     replace()* podchwytliwe 🙂
//     slice()
//     split()
//     toLowerCase()
//     toUpperCase()
// */
// const text1 = 'powiększ mnie';
// console.log(text1.toUpperCase());
// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
// console.log(text2.toLowerCase());
// const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
// console.log(text3.slice(6));
// const text4 = 'sprawdź, czy zawieram słowo "czy"'
// console.log(text4.includes("czy"));

// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
// console.log(text5.charAt(2));
// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// console.log(text6.replaceAll('pies', 'kot'));
// const text7 = 'podziel, ten, string, od, przecinków'
// console.log(text7.split(","));
//const color = 'blue'

// if (color == 'blue') {
//     if (10 < 0) {
//         console.log('true')
//         // } else {
//         //     console.log('okokoko')
//         // }
//     } else {
//         console.log('false')
//     }
// }
 
// const pass = '212256544665'

// console.log(pass.length)
// if (pass.length > 10 && pass.includes('!')) {
//     console.log('Masz dobre hasło')
// } else if (pass.length < 5) {
//     console.log('Masz średnie hasło')
//      }else{
//         console.log('Masz krótkie hasło')
//         }
//
// const x = 100

// if (x > 20) {
//     console.log(`${x} > 20`)
// } else {
//     console.log(`${x} < 20`)
// }

// //wartość ? TRUE : FALSE
// const newX = x > 20 ? `${x} > 20` : `${x} < 20`

// console.log(newX)

// const x = 50;
// const y = 30;

// if (x > y) {
//     console.log(`${x} jest większe niż ${y}`)
// }

// const color = 'blue';
// const newColor = 'green';

// if (color === newColor) {
//     console.log('Kolory sie zgadzaja')
// } else {
//     console.log('Kolory sie nie zgadzają')
// }

// const x = 100
// const y = 50
// if (x > y) {
//     console.log('x > y')
// } else if (x === y) {
//     console.log( 'x === y')
// } else4
//     console.log('x < y')

// const promo = '40 %'
//  switch(promo) {
//      case '20 %':
//          console.log('DZiś mamy 20% zniżki')
//          break
//      case '10 %':
//          console.log('Dziś mamy 10 % zniżki')
//          break
//      case '30 %':
//          console.log('Dziś mamy 30% zniżki')
//          break
//      default:
//          console.log(`Dziś promocja ${promo} zniżki`)
//  }

// const x = 10
//  //const newX = x > 20 ? `${x} > 20` : `${x} < 20`;
// const x1 = (x % 2 === 0) ? 'x jest parzyste' : 'x jest nieparzyste'
// console.log(x1)
// // if (x % 2 === 0) {
// //     console.log('x jest parzyste')
// // } else {
// //     console.log('x jest nieparzyste')
// // }

const x = 450
let text
if (x >= 100) {
    console.log('x>=100')
} else if (x < 100 && x > 30) {
    console.log('x jest średniiem')
} else {
    console.log('x jest mały')
} 

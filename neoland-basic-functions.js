

//*Iteración 1
function biggerNumber(numberOne , numberTwo) {
    if(numberOne > numberTwo) {
        return numberOne
    } 
    return numberTwo
} 
 

//*Iteración 2
const array7 = []
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(array) {
    let longestWord = ""
    array.forEach(word => {
        if(word.length > longestWord.length) {
            longestWord = word
        }
    
    })
  return longestWord
}

console.log(findLongestWord(array7))


//*Iteración 3
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(array) {
    let suma = 0
  array.forEach(numero => {
    suma = suma + numero
    //*suma += numero
  })
  return suma
}
console.log(sumAll(numbers))


//Iteración 4
const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
    let suma = 0
    array.forEach(numero => {suma = numero + suma})
    let promedio = suma / array.length 
    return promedio
} 
console.log(average(numbers2))


//Iteración 5
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
  let number1 = 0
  array.forEach(valor => {
    if(typeof valor === "number") {
        number1 = number1 + valor}
    else if(typeof valor === "string") {
        number1 = valor.length + number1
    }
  })
  return number1
}

console.log(averageWord(mixedElements))


//Iteración 6
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(array) {
    let arraySinRepetidos = [];
    array.forEach(valor => {
        if(!arraySinRepetidos.includes(valor)){
            arraySinRepetidos.push(valor)
        }else {
            console.log("Valor repetido")
        }
    });
    return arraySinRepetidos
}
console.log(removeDuplicates(duplicates))


//Iteración 7
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

function nameFinder1(array, name) {
    const indice = array.indexOf(name);

    if(indice !== -1) {
    return {existe: true, index: indice}
    }else{
    return {existe: false, index: indice}
    }
}
// //1
// function missingWords (sentence, word) {
//   let index = 0;
//   let newSentence = '';
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] === '_') {
//       newSentence += word[index];
//       index++
//     } else { newSentence += sentence[i]}
//   } return newSentence
// }
// console.log(missingWords("_, we have a _.",
// ['Houston', 'problem']))

// //2
// function array (arr) {
//   let onlyNumbers = [];
//  for (let i = 0; i < arr.length; i++) {
//    if (typeof(arr[i]) === 'number') {
//       onlyNumbers.push(arr[i])
//    }
//  }
//  const oddNumbers = [];
//  const evenNumbers = [];
//  for (let j = 0; j < onlyNumbers.length; j++) {
//    const num = onlyNumbers[j];
//    if (num % 2 === 0) {
//    evenNumbers.push(num)
//  } else {oddNumbers.push(num)}
//  } 
//  oddNumbers.sort();
//  evenNumbers.sort();
//  const allarr = oddNumbers+','+evenNumbers;
//  return allarr
//  }
//  console.log(array([8, 0, 1, 'hey', 12, 5 , true, '2', null, 7, 3]))

//3
// function numstr (arr) {
//   let str = 0;
//   let num = 0;
// for (let i = 0; i < arr.length; i++) {
//   if ( typeof(arr[i]) === 'number') {
//     num++;
//   } else {str++;}
// }
// console.log(`number: ${num}`)
// console.log(`string: ${str}`)
// }
// numstr([1, '10', 'hi', 2, 3])

// //4
// function arr (array) {
//     let min = array[0].length;
//     let max = array[0].length;
//   for (let i = 0; i <array.lenght; i++) {
//     if (i === 0) {continue}
//     if(array[i].length < min) 
//         min = array[i].length
//      else if (array[i].length > max)
//         {max = array[i].length}
//   }return max+min
//   }
// console.log(arr(['anymore', 'raven', 'me', 'communicate']))

// //5
//   function numEqual (arr, num) {
//     let min = Infinity;
//     let absdif = 0;
//     let indexOfClosest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if  (arr[i] === num) {
//       return i;
//     }
//     absdif = Math.abs( arr[i] - num );
//     if (absdif < min) { 
//       min = absdif;
//       indexOfClosest = i;
//      }
//   } 
//   return indexOfClosest
// }
// console.log(numEqual([5, 46, 17, -2, 89, 0, 26 ], 36))

// //6
// function split (sentence) {
//   let word = '';
//   let arr = [];
//   for (let i = 0; i < sentence.length; i++) {
//     if ( sentence[i] !== ' ' && sentence[i] !== '!' && sentence[i] !== '.') {
//       word += sentence[i];
//     } else {
//       arr.push(word);
//       word = "";
//     }
//   }
//   return arr
// }
// console.log(split('May the force be with you.'))

// //7
// function genArrayWithIndexes(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++ ) {
//     newArr[arr[i]] = arr[i];
//   }
//   for (let i = 0; i < newArr.length; i++ ) {
//     if(newArr[i] === undefined) {
//       newArr[i] = undefined
//     }
//   }
//   return newArr;
// }
// console.log(genArrayWithIndexes([4,3,0,9]))

// //8
// function genNewArr (arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++ ) {
//     let sum = 0;
//     for (let j = 0; j < arr[i].length; j++ ) {
//       sum += arr[i][j];
//     }
//     newArr.push(sum);
//   }
//   return newArr;
// }
// console.log(genNewArr([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));


// //9
// let size = 9;
// let brush = '*';
// let result = '';
// for (let i = 0; i < size; i++) {
//   let row = '';
//   for (let j = 0; j < size; j++) {
//     if (i == j || i+j == size+1) {row += brush}
//     else { row += ''}
//   } result += row + '\n'
// } console.log(result)

// //9
// function drawStar(size) {
//   let rowsLength = size*2-1;
//   for (let i = 1; i <= rowsLength; i++) {
//     let row = '';
//     for (let j = 1; j <= rowsLength; j++) {
//       if (i === j || i + j === rowsLength + 1) {
//         row += '*';
//       } else {
//         row += ' ';
//       }
//     }
//     console.log(row)
//   }
// }
// drawStar(5);
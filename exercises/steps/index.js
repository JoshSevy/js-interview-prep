// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// Recursive solution
function steps(n, row = 0, stair = '') {
  if (row === n) return; //base case

  if (n === stair.length) { // stair complete
    console.log(stair);
    return steps(n, row + 1);
  } 

  // check for adding char # || ' '
  if (stair.length <= row) { 
    stair += '#';
  } else {
    stair += ' ';
  }
  // recall steps with current n, row , and stair
  steps (n, row, stair);
}

module.exports = steps;


// Iterative solution
// function steps(n) {
  
//   for (let row = 0; row < n; row++) {
//     let stair = ''; 
    
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }
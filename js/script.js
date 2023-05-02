
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
// let users = [
//   ['a', 'b', 'c', 'd'],
//   ['e', 'f', 'g', 'h'],
//   ['i', 'j', 'k', 'l'],
//   ['m', 'n', 'o', 'p'],
//   ['q', 'r', 's', 't'],
//   ['u', 'v', 'w', 'x']
// ];

// let value = prompt('Enter a value:');
// let found = false;

// for (let i = 0; i < users.length; i++) {
//   for (let j = 0; j < users[i].length; j++) {
//     if (value === users[i][j]) {
//       let diagonalValues = [];
//       for (let k = i, l = j; k < users.length && l < users[k].length; k++, l++) {
//         diagonalValues.push(users[k][l]);
//       }
//       console.log(diagonalValues.join(','));
//       found = true;
//       break;
//     }
//   }
//   if (found) {
//     break;
//   }
// }

// if (!found) {
//   console.log('Value not found');
// }

// import './01DataType'
// import './02enum'
// import './03interface'
import './04interface';

let hello: string = 'hello world'
document.querySelectorAll('.app')[0].innerHTML = hello


// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });

// document.querySelectorAll('.app')[0].innerHTML = mySquare.color;

// console.log(mySquare)
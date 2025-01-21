// arrays are not lists. Arrrays are fixed size and fixed type.
// as i have studied, 
//aprendi isso em MIPS32!!

import { lin_search } from "../algos/1linearSearch";

// This creates a new ArrayBuffer with a size of 16 bytes. An ArrayBuffer is a generic, fixed-length raw binary data buffer.
// console.log(arr); // 16
const arr = new ArrayBuffer(6);
console.log(arr); // 16

// both arr and a8 are views of the same underlying memory buffer.
const a8 = new Uint8Array(arr); // number from 0 to 255
a8[0] = 2;
console.log(arr); // ArrayBuffer { byteLength: 16 }

// this sets the steps that i will 'walk' in the array

const a16 = new Uint16Array(arr); // number from 0 to 65535

a16[2] = 500;

console.log(arr); // ArrayBuffer { byteLength: 16 }
console.log(a8); // Uint8Array [ 2, 0, 0, 0, 0, 0, 0, 0 ]
console.log(a16); // Uint16Array [ 0, 0, 500, 0, 0, 0 ]
// since this is just a view of the same memory buffer, it will write into arr, but not o the same format. Notice the len of the array
// arrays are not magic they overwrite and do not insert, you cant grow an array.

console.log(lin_search(a16, 500));
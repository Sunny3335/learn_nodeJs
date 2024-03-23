// const lib = require('./lib.js'); // this is require for common js
// console.log(lib.sum(5, 40), lib.diff(8, 5)); // here we have lib that is object and we got the lib only so to access their function we use the . operator.
// console.log(typeof lib); // object
// module is the object in which our function and varibale are available that can be accessed to other files.

// ES-6
import { sum, diff } from "./lib.js";
console.log(sum(4, 5), diff(8, 6));
// for this we have to set type of the ES module in the package.json like "type":"module",

// import fs from 'node:fs'; // it was written earlier
import fs from "fs";
// const txt=fs.readFileSync('demo.txt'); // this is run synchronously so it take a lot of time whenever our file is too large.

// console.log(txt);

const t1 = performance.now(); // to calculate the time required
// by default readfile is asynchronous function.
const txt = fs.readFile("demo.txt", "utf-8", (err, txt) => {
  console.log(txt);
});
// 'utf-8' // this is used to tell the server to read the file in utf-8 manner.
// in case of Sync we got more time difference to execute the readFile.
// in node js mostly all the things are asynchronously.

// console.log(txt);
const t2 = performance.now();

console.log(t2 - t1);
console.log("sunny kumar");

import { resolve } from 'path'

export const entry = './src/index.js'
export const output = {
  filename: 'main.js',
  path: resolve(__dirname, 'dist'),
}


// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };

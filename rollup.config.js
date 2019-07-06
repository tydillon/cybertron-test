import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'public/cybertron-test.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}

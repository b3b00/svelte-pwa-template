import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";

module.exports = {
  input: 'index.js',
  output: {
    sourcemap:true,
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'app'
  },
  plugins: [
    terser(),
    svelte({
      emitCss: true
    }),
    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    commonjs(),    
    postcss({
      extract: true,
      minimize: true,
      use: [
        ['sass', {
          includePaths: [
            './theme',
            './node_modules'
          ]
        }]
      ]
    })
  ],
  watch: {
    clearScreen: false
  }
};

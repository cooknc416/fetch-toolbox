import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

export default [{
  input: 'src/index.ts',
  output: {
    file: 'build/index.js',
    format: 'esm'
  },
  plugins: [
    esbuild()
  ]
}, {
  input: 'src/index.ts',
  output: {
    file: 'build/index.d.ts',
    format: 'esm'
  },
  plugins: [
    dts()
  ]
}];

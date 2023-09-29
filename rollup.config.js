import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

export default [
  {
    input: 'src/index.ts',
    plugins: [esbuild()],
    external: id => /node_modules/.test(id),
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: 'dist/index.js',
        format: 'es',
        sourcemap: false,
      },
    ],
  },
  {
    input: 'src/index.ts',
    external: id => /node_modules/.test(id),
    plugins: [dts()],
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
  },
]

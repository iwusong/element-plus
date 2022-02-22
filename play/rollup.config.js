// rollup.config.js
import css from 'rollup-plugin-css-only'
import DefineOptions from 'unplugin-vue-define-options/rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import esbuild from 'rollup-plugin-esbuild'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default {
  input: ['../packages/element-plus'],
  output: {
    format: 'esm',
    dir: './lib',
    preserveModules: true,
    preserveModulesRoot: '../packages',
    sourcemap: true,
    entryFileNames: `[name].mjs`,
  },

  treeshake: false,
  plugins: [
    css(),
    DefineOptions(),
    vue({
      isProduction: false,
    }),
    vueJsx(),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts'],
    }),
    commonjs(),

    esbuild({
      sourceMap: true,
      target: 'es2018',
      loaders: {
        '.vue': 'ts',
      },
    }),

    filesize(),
  ],
}

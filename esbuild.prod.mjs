import * as esbuild from 'esbuild';

// import { browserslist } from 'browserslist';
// import { esbuildPluginBrowserslist, resolveToEsbuildTarget } from 'esbuild-plugin-browserslist';

// const htmlModulesPlugin = require('esbuild-plugin-html-modules');
// const { htmlPlugin } = require('@craftamap/esbuild-plugin-html');
import fs from 'node:fs';
import { readFile } from 'fs/promises';

// import { glob } from 'glob';

// import * as pkg from './package.json';
// const pkg = JSON.parse(await readFile(new URL('./package.json', import.meta.url)));

// console.log(['pkg'], json);
// let external = Object.keys(pkg.dependencies);

// let header = `(() => {
//     window.__esbuild_vendors__ = window.__esbuild_vendors__ || {};
//     function require(key) { return window.__esbuild_vendors__[key] };`;

// let footer = `})();`;

// let vendor = `window.__esbuild_vendors__ = window.__esbuild_vendors__ || {};
// ${external
//   .map((key) => {
//     return `window.__esbuild_vendors__['${key}'] = require('${key}');`;
//   })
//   .join('\n')}
// `;

let result = await esbuild.build({
  entryPoints: ['app.tsx'],
  bundle: true,
  minify: false,
  // packages: 'external',
  // entryNames: '[dir]/[name]-[hash]',
  // chunkNames: 'chunks/[name]-[hash]',
  drop: ['console'],
  treeShaking: true,
  // outbase: 'components',
  sourcemap: true,
  // target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  // outfile: 'dist/index.js',
  metafile: true, // needs to be set
  outdir: 'prod', // needs to be set
  splitting: true,
  format: 'esm',
  // packages: 'external',
  // external: ['react', 'react-dom'],
  // color: true,
  // plugins: [
  //   htmlPlugin({
  //     files: [
  //       {
  //         entryPoints: ['app.tsx'],
  //         filename: 'index.html',
  //       },
  //     ],
  //   }),
  // ],
});

// esbuild
//   .build({
//     stdin: {
//       contents: vendor,
//       resolveDir: __dirname,
//     },
//     bundle: true,
//     minify: true,
//     outfile: 'prod/vendor.js',
//     logLevel: 'info',
//     sourcemap: true,
//   })
//   .catch(() => process.exit(1));

fs.writeFileSync('prod/meta.json', JSON.stringify(result.metafile));
console.log(
  await esbuild.analyzeMetafile(result.metafile, {
    verbose: true,
    color: true,
  })
);

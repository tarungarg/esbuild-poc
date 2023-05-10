import * as esbuild from 'esbuild';
import babel from 'esbuild-plugin-babel';
// import { browserslist } from 'browserslist';
// import { esbuildPluginBrowserslist, resolveToEsbuildTarget } from 'esbuild-plugin-browserslist';

// const htmlModulesPlugin = require('esbuild-plugin-html-modules');
// const { htmlPlugin } = require('@craftamap/esbuild-plugin-html');
import fs from 'node:fs';
import glob from 'resolve-glob';

const options = { ignore: ['**/*.test.js', '**/*.spec.js', '**/*.stories.js'] };

const entryPoints = glob.sync(['./components/**/*.tsx'], options);

console.log(entryPoints);

let result = await esbuild
  .build({
    // entryPoints: ['components/addToCart/addToCart.tsx', 'components/pdpCard/pdpCard.tsx'],
    entryPoints: entryPoints,
    bundle: true,
    minify: false,
    keepNames: true,
    packages: 'external',
    // entryNames: '[dir]/[name]-[hash]',
    // chunkNames: 'chunks/[name]-[hash]',
    drop: ['console'],
    treeShaking: true,
    outbase: 'components',
    sourcemap: true,
    // target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    // outfile: 'dist/index.js',
    metafile: true, // needs to be set
    outdir: 'dist', // needs to be set
    splitting: true,
    format: 'esm',
    // plugins: [babel()],
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
  })
  .catch(() => process.exit(1));

fs.writeFileSync('dist/meta.json', JSON.stringify(result.metafile));
console.log(
  await esbuild.analyzeMetafile(result.metafile, {
    verbose: true,
    color: true,
  })
);

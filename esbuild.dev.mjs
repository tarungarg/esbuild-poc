import * as esbuild from 'esbuild';

// const { htmlPlugin } = require('@craftamap/esbuild-plugin-html');

let ctx = await esbuild.context({
  entryPoints: ['app.tsx'],
  bundle: true,
  outdir: 'www',
  define: {
    'process.env.NODE_ENV': `\"${true ? 'production' : 'development'}\"`,
    is_Production: 'false',
  },
  // metafile: true, // needs to be set
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

await ctx.watch();

let { host, port } = await ctx.serve({
  servedir: 'www',
});

console.log('Application running on port ' + host + ':' + port);
// ctx.dispose();

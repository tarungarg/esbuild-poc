# esbuild-poc
esbuild react, lazy load, prod, dev, hmr


$ npm run build
$ npm run build:prd
Add index.html if required
$ cd prod && npx lite-server

# Start dev server
$ npm run dev


It supports lazy load but vendor split is not an easy job with esbuild.

ESBUILD
# Pros
1. Fast bundling
2. Not much setup required for react code
3. Can create packages from esbuild, support chunks
4. Lazy load and dynamic import creates chunks
5. Supports HMR (Hot-module reloading) and it is very fast
6. ESM support
7. Tree shaking

# Cons
1. We can not split 3rd party dependencies. Vendor split is also not possible. There are alternates but looking for solution from esbuild.
2. Due to not vendor split in picture, lighthouse score goes bad.

# nnode - a nicer node
So nice, you'd introduce it to your parents.

`nnode` executes .js files with node + babel.

It works just like `node`, only `n`icer.

For using the `nnode` cli, install the package globally:
```
npm install -g nnode
```

When using the `nnode` package as `require('nnode')`, install the package as a dependency:
```
npm install nnode --save
```

`run-me.js`
```
import path from 'path';
const x = { this: 'this', very: 'really' };
const { very } = x;
console.log(`Awww, this is ${very} nice.`);
```

If you try running `node run-me.js`, you'll see:

-- `SyntaxError: Unexpected token import`

That's not very nice, try something nicer, like `nnode run-me.js`:

-- `Awww, this is really nice.`

You can also `require('nnode')` which works just like [require('babel-register')](https://babeljs.io/docs/usage/babel-register) without needing to setup .babelrc and installing babel presets, plugins and other non-niceties.
Useful when running stuff with `pm2` or `nodemon`.

#### The `Why not babel-node` section:
- babel-node requires babel presets, plugins and .babelrc file to be present in the local project
- you don't want to keep finding and installing them one by one every time you want to run something
- sometimes, a combination of plugins and presets or their versions just doesn't work
- this is why nnode depends on them by the exact patch version

#### Included with `nnode` are:
- babel-preset-env
- babel-preset-flow
- babel-plugin-transform-object-rest-spread
- babel-plugin-transform-decorators-legacy
- babel-plugin-flow-runtime (Only if environmental variable ENABLE_FLOW_RUNTIME is true)

#### The `Transpilation` section:
When `nnode` is called with `--transpile` flag, it goes into transpilation mode.

This allows us to transpile a directory for older node (v.4.0) which is useful for npm publish.

So, this call:
```
nnode --transpile
```
will transpile every .js file within the `src` directory into the `build` directory.
Build directory and all the subdirectories will be created if necessary.
Generated code will be targeted for node version 4.0.

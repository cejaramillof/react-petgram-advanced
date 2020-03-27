## React Advanced
- `git init && npm init`
- `npm i -D webpack webpack-cli`
- `./node_modules/.bin/webpack src/index.js`
- `node dist/main.js`
- `npm i -D html-webpack-plugin` and create webpack.config.js
- `npm i -D webpack-dev-server`
- `npm i react react-dom`

To start using jsx need install loader or transpiler.
- `npm install @babel/core @babel/preset-env @babel/preset-react babel-loader` with preset-env transform code in the lastest version of js accepted by ecma committee, and can select browsers to support
- `npm i -D standard` js and react linter
- `npm i styled-components`
- `npm i -D babel-plugin-styled-components` and add to webpack.config.js
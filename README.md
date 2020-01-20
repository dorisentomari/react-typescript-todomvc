# react-typescript-todomvc

使用 react + typescript 做一个 todomvc 的项目，主要目的是学习使用 react + typescript 做一个前端项目。

Use react and typescript to make a todomvc project, the main purpose is to learn to use react + typescript to make a front-end project.


[后端服务仓库 express-typescript-todomvc ](https://github.com/dawnight/express-typescript-todomvc) 

[backend server repo express-typescript-todomvc ](https://github.com/dawnight/express-typescript-todomvc) 


# 技术栈(Technology stack)
+ typescript
+ webpack
+ react
+ react-router-dom
+ redux
+ redux-thunk
+ sass

# Project Start

```
npm run start

// open your browser and visit http://localhost:3000
```

# 文件目录(File Directory)

```
.
├── config
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── modules.js
│   ├── paths.js
│   ├── pnpTs.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── jest.config.js
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── assets
│   │   ├── images
│   │   │   └── logo.png
│   │   └── style
│   │       ├── base.scss
│   │       └── global.scss
│   ├── components
│   │   ├── Header
│   │   │   └── index.tsx
│   │   └── Todo
│   │       └── index.tsx
│   ├── config
│   │   └── constant.config.tsx
│   ├── forms
│   │   └── account.forms.tsx
│   ├── helpers
│   │   ├── auth.route.helper.tsx
│   │   ├── check.login.helper.tsx
│   │   ├── error.helper.tsx
│   │   └── utils.tsx
│   ├── http
│   │   ├── authorization.http.tsx
│   │   ├── axios.http.tsx
│   │   ├── index.tsx
│   │   └── todos.http.tsx
│   ├── index.tsx
│   ├── interfaces
│   │   ├── commom
│   │   │   ├── index.tsx
│   │   │   └── pagination.interface.tsx
│   │   ├── http
│   │   │   ├── authorization.interface.tsx
│   │   │   ├── index.tsx
│   │   │   └── todos.interface.tsx
│   │   └── store
│   │       ├── account.interface.tsx
│   │       ├── common.interface.tsx
│   │       ├── home.interface.tsx
│   │       └── index.tsx
│   ├── pages
│   │   ├── home
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── login
│   │   │   └── index.tsx
│   │   └── register
│   │       └── index.tsx
│   ├── react-app-env.d.ts
│   ├── setupTests.ts
│   └── store
│       ├── actions
│       │   ├── account.action.tsx
│       │   └── home.action.tsx
│       ├── action.types.ts
│       ├── history.tsx
│       ├── index.tsx
│       └── reducers
│           ├── account.reducer.tsx
│           ├── home.reducer.tsx
│           └── index.tsx
├── tsconfig.json
└── yarn.lock
```

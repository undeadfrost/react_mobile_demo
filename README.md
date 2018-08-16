# react移动端快速开发模板

## 项目简介
##### 1.在create-react-app脚手架的基础上增加对移动端vm,vh的支持,通过postcss中的插件将px直接转换为vw(750px设计稿)
##### 2.集成redux,react-router.内有简单的路由拦截,实现简单的登录拦截功能.

## 项目运行
```
$ git clone https://gitee.com/udfrost/react_mobile_demo.git
$ npm install or yarn install
$ npm start or yarn start
```

```
│  .gitignore
│  package.json
│  README.md
│  yarn-error.log
│  yarn.lock
│
├─config
│  │  env.js
│  │  paths.js
│  │  polyfills.js
│  │  webpack.config.dev.js   // 调试环境配置文件
│  │  webpack.config.prod.js  // 打包环境配置文件
│  │  webpackDevServer.config.js
│  │
│  └─jest
│          cssTransform.js
│          fileTransform.js
│
├─public
│      favicon.ico
│      index.html
│      manifest.json
│
├─scripts
│      build.js
│      start.js
│      test.js
│
└─src
    │  index.css
    │  index.js
    │  registerServiceWorker.js
    │
    ├─api
    │      http.js  // axios封装
    │      index.js // http请求
    │
    ├─auth
    │      index.js // 权限拦截route
    │
    ├─components
    │  ├─loading
    │  ├─skeleton  // 移动端骨架屏组件
    │  │      EntranceSkeleton.js
    │  │      index.less
    │  │      RowSkeleton.js
    │  │
    │  └─skeleton_screen  // 移动端骨架屏组合
    │          index.js
    │          index.less
    │
    ├─config
    │      index.js // webApp配置
    │
    ├─pages
    │  │  index.js // 入口页面
    │  │
    │  ├─home
    │  │      index.js // 示例主页
    │  │
    │  ├─login
    │  │      index.js  // 示例登录页
    │  │
    │  └─user
    │          index.js // 示例用户详情页
    │
    └─redux
        │  index.js // redux 
        │
        └─user
                actions.js
                reducer.js

```

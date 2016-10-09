<p align="center">
    <a href="https://www.iviewui.com">
        <img width="200" src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
    </a>
</p>

# iView  [![](https://img.shields.io/travis/iview/iview.svg?style=flat-square)](https://travis-ci.org/iview/iview) [![iView](https://img.shields.io/npm/v/iview.svg?style=flat-square)](https://www.npmjs.org/package/iview) [![NPM downloads](http://img.shields.io/npm/dm/iview.svg?style=flat-square)](https://npmjs.org/package/iview)

### A high quality  UI Components Library with Vue.js

## Docs

### [中文文档](https://www.iviewui.com)

## Overview

### [组件概览（Component Overview）](https://www.iviewui.com/overview)

## Features

- Using .vue file development mode
- Based on npm + webpack + babel, support ES2015
- High quality and rich functions
- Friendly APIs,free and flexible

## Programming 

![iView](https://raw.githubusercontent.com/iview/iview/master/assets/iview.png)

## Install

### Install vue-webpack project in the first place 

Use [vue-vueRouter-webpack](https://github.com/icarusion/vue-vueRouter-webpack)(Recommended) Or [vue-cli](https://github.com/vuejs/vue-cli)

### Install iView

```bash
npm install iview --save
```

### Babel support for iView in webpack
```js
module: {
    loaders: [
        { test: /iview\/.*?js$/, loader: 'babel' },// for Mac
        { test: /iview\\.*?js$/, loader: 'babel' },// for Windows
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
}
```

## Usage

Use component as required

```html
<template>
    <Page :current="1" :total="100"></Page>
</template>
<script>
    import { Page } from 'iview';
    export default {
        components: { Page }
    }
</script>
```
Use css
```js
import 'iview/dist/styles/iview.css';
```

## Browser Support

Normal browsers and Internet Explorer 9+.

## Links

- [Vue](https://github.com/vuejs/vue)
- [Webpack](https://github.com/webpack/webpack)
- [ionicons](https://github.com/driftyco/ionicons)
- [Ant Design](https://github.com/ant-design/ant-design)

# We have been in developing, please pay attention to the iView.

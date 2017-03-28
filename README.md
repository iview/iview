<p align="center">
    <a href="https://www.iviewui.com">
        <img width="200" src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
    </a>
</p>

# iView  [![](https://img.shields.io/travis/iview/iview.svg?style=flat-square)](https://travis-ci.org/iview/iview) [![iView](https://img.shields.io/npm/v/iview.svg?style=flat-square)](https://www.npmjs.org/package/iview) [![NPM downloads](http://img.shields.io/npm/dm/iview.svg?style=flat-square)](https://npmjs.org/package/iview) [![Join the chat at https://gitter.im/iview/iview](https://badges.gitter.im/iview/iview.svg)](https://gitter.im/iview/iview?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### A high quality  UI Toolkit built on Vue.js.

> This branch is for Vue.js 2.x
>
> [HERE](https://github.com/iview/iview/tree/master) is for Vue.js 1.x

## Docs

### [中文文档 (2.0)](https://www.iviewui.com)
### [中文文档 (1.0)](http://v1.iviewui.com)
### [English (2.0)](https://www.iviewui.com)(Working)

## Overview

### [组件概览（Component Overview）](https://www.iviewui.com/overview)

## Features

- High quality and rich functions
- Friendly APIs,free and flexible
- Great Documentation
- It is quite beautiful
- Support Vue.js 2 and Vue.js 1
- Based on npm + webpack + babel, using ES2015

## Programming
![iView](https://raw.githubusercontent.com/iview/iview/2.0/assets/iview2.png)

## Install

### Install vue-webpack project in the first place

Use [iview-project](https://github.com/iview/iview-project)(Recommended) Or [vue-cli](https://github.com/vuejs/vue-cli)

### Install iView

using npm
```
npm install iview --save
```
Or using script tag for global use
```html
<script type="text/javascript" src="iview.min.js"></script>
```

## Usage

```html
<template>
    <Slider v-model="value" range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
```
Use css
```js
import 'iview/dist/styles/iview.css';
```

## Browser Support

Normal browsers and Internet Explorer 9+.

## Major Contributors
|Name   |Avatar   |
|---|---|
|  [Aresn](https://github.com/icarusion) |  ![](https://avatars3.githubusercontent.com/u/5370542?v=3&s=60)  |
|  [jingsam](https://github.com/jingsam) |  ![](https://avatars3.githubusercontent.com/u/1522494?v=3&s=60)  |  
|  [rijn](https://github.com/rijn)       |  ![](https://avatars2.githubusercontent.com/u/6976367?v=3&s=60)  |
|  [GITleonine1989](https://github.com/GITleonine1989) |  ![](https://avatars1.githubusercontent.com/u/7582490?v=3&s=60)  |
|  [huixisheng](https://github.com/huixisheng) |  ![](https://avatars1.githubusercontent.com/u/1518967?v=3&s=60)  |


## Links

- [TalkingData](https://github.com/TalkingData)
- [Vue](https://github.com/vuejs/vue)
- [Webpack](https://github.com/webpack/webpack)
- [ionicons](https://github.com/driftyco/ionicons)
- [Ant Design](https://github.com/ant-design/ant-design)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, iView
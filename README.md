<p align="center">
    <a href="https://www.iviewui.com">
        <img width="200" src="https://file.iviewui.com/logo-new.svg">
    </a>
</p>

<h1>
piView
    <h3>基于iview修改.</h3>
</h1>

[![](https://img.shields.io/travis/iview/iview.svg?style=flat-square)](https://travis-ci.org/iview/iview)
[![iView](https://img.shields.io/npm/v/iview.svg?style=flat-square)](https://www.npmjs.org/package/iview)
[![NPM downloads](http://img.shields.io/npm/dm/iview.svg?style=flat-square)](https://npmjs.org/package/iview)
[![NPM downloads](https://img.shields.io/npm/dt/iview.svg?style=flat-square)](https://npmjs.org/package/iview)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/iview/dist/iview.min.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/iview/dist/styles/iview.css?compression=gzip&label=gzip%20size:%20CSS&style=flat-square)
[![Join the chat at https://gitter.im/iview/iview](https://img.shields.io/badge/chat-on_gitter-30b392.svg?style=flat-square)](https://gitter.im/iview/iview?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Backers on Open Collective](https://opencollective.com/iview/tiers/backer/badge.svg?label=backer&color=brightgreen)](#backers)
[![Sponers on Open Collective](https://opencollective.com/iview/tiers/sponsor/badge.svg?label=sponsor&color=brightgreen)](#sponers)


<h2 align="center">Special Sponsors</h2>
<table>
      <tbody>
        <tr>
          <td align="center" valign="middle">
            <a href="https://segmentfault.com/ls/1650000016424063" target="_blank">
              <img width="300" src="https://file.iviewui.com/asd/asd-i-2.png">
            </a>
          </td>
          <td align="center" valign="middle">
            <a href="https://e.coding.net/?utm_source=iview" target="_blank">
              <img width="300" src="https://file.iviewui.com/asd/asd-coding4.png">
            </a>
          </td>
            <td align="center" valign="middle">
            <a href="https://cn.udacity.com/fend/?utm_source=iviewui&utm_medium=banner&utm_campaign=fend" target="_blank">
              <img width="300" src="https://file.iviewui.com/asd/asd-u-new-2.png">
            </a>
          </td>
        </tr>
        <tr>
            </td>
            <td align="center" valign="middle">
            <a href="https://file.iviewui.com/asd/asd-uniapp.png" target="_blank">
              <img width="300" src="https://file.iviewui.com/asd/asd-uniapp.png">
            </a>
          </td>
        </tr>
      </tbody>
</table>

> If you'd like be a sponsor, to show your ads in GitHub and iView doc, please email admin@aresn.com to get more infomation.

## Docs

**[3.x](https://www.iviewui.com)** | [2.x](http://v2.iviewui.com) | [1.x](http://v1.iviewui.com)



> If your company or products use iView, welcome to click [here](https://github.com/iview/iview/issues/2143) to leave a message.

## Install

We provide an [iView plugin](https://github.com/iview/vue-cli-plugin-iview) for Vue CLI 3, which you can use to quickly build an iView-based project.

We also provide a starter kit [iview-project](https://github.com/iview/iview-project) for you.

### Install iView

Using npm:
```
npm install piview --save
```

Using a script tag for global use:

```html
<script type="text/javascript" src="iview.min.js"></script>
<link rel="stylesheet" href="dist/styles/iview.css">
```

You can find more info [on the website](https://www.iviewui.com/docs/guide/install-en).

## Usage

```vue
<template>
    <Slider v-model="value" range />
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

Using css via `import`:

```js
import 'piview/dist/styles/iview.css';
```

## Changed
- Input textarea add props:isCharNum  Input clearable changed true
- Select clearable changed true
- Switch add props beforeChange,去掉 true-value false-value 类型强校验
- Tree add methods getIndeterminateNodes,getAllNodes,add props clicks & @click 
- InputNumber add slot append,pread
- Radio add props beforeChange
- uploader add formates and onPreview add types
- uploader list add listItemDel props
- Modal change style center
- badge add props color
- datapicker add on-clear methods

## Community

If you want to contribute or have questions or bugs to report:

**Questions:** Find other users at the [Gitter chat](https://gitter.im/iview/iview) or post on [StackOverflow using `[iview-ui]` tag](https://stackoverflow.com/questions/tagged/iview-ui)  
**Bugs:** [File a issue here](https://github.com/iview/iview/issues) - please provide a example so we can help you better  
**Contribute:** Contact us in [Gitter chat](https://gitter.im/iview/iview), WeChat or via mail to `admin@aresn.com`. PRs welcome!

## Major Contributors


## Ecosystem Links

- [iView Developer](https://dev.iviewui.com)
- [iView Run](https://run.iviewui.com)
- [iView-Admin](https://github.com/iview/iview-admin)
- [iView-Loader](https://github.com/iview/iview-loader)
- [iView-Plugin](https://github.com/iview/vue-cli-plugin-iview)
- [iView-Area](https://github.com/iview/iview-area)
- [iView-Editor](https://github.com/iview/iview-editor)

## Sponsors
![](https://opencollective.com/iview/tiers/sponsor.svg?avatarHeight=36)

## Backers
![](https://opencollective.com/iview/tiers/backer.svg?avatarHeight=36)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, iView

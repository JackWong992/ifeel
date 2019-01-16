# ifeel -  一个Vue UI组件
[![npm version](https://badge.fury.io/js/ifeel.svg)](https://badge.fury.io/js/ifeel)
[![GitHub version](https://badge.fury.io/gh/JackWong992%2Fifeel.svg)](https://badge.fury.io/gh/JackWong992%2Fifeel)
[![Build Status](https://travis-ci.org/JackWong992/ifeel.svg?branch=master)](https://travis-ci.org/JackWong992/ifeel)
# 介绍
> 在过去的半年中，我曾经使用过iview,element-ui,mint-ui等非常优秀的UI库。这些优秀的库可能满足大部分开发者的工作场景，但是一旦遇到这些库停止更新（例如：mint-ui）或者满足不了你的工作场景需求的时候你就不得不手动修改他们的源代码，
长时间的被动修改的过程中使我想系统的学习如何造一个「轮子」,那造一个轮子绝不仅限于代码写出来那么简单，它包括你可能要进行的单元测试、持续集成、以及发布npm包。从另一种角度来说，我在造轮子的过程中可能不仅在满足我工作的过程中处理组件能够得心应手，对于我个人的成长也有一定的帮助
# 开始使用
1. 添加css样式
> 使用这个UI库之前我已经默认你当前的浏览器环境支持IE盒子模型，如果没有请你手动添加<br>
    * example:
    ```
     *,*::before,*::after { box-sizing: border-box;}
    ```
    你还需要设置默认颜色等变量(后续改为SCSS变量)
    ```
        :root {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #666;
            --border-color-hover: #999;
        }
    ```
    IE15以上浏览器都支持使用
2. 安装`ifeel`
```
    npm i --save ifeel
```
3. 局部引入`ifeel`
```
    import {Button, ButtonGroup, Icon} from 'ifeel'
    import 'ifeel/dist/index.css'
    
    export default {
        components: {
            'g-button': Button,
            'g-icon': Icon
        }
        
    }
```
4. 引入svg symbol
```
    <script></script>
```
# 问答
# 变更记录
# 联系方式
# 贡献代码
> 黄飞龙(Wallen Huang)


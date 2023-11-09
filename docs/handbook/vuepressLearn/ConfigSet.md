---
title: Name
author: Author
date: '2021-12-12'
---
## 1.基礎目錄
```js
.
├─ docs
│  ├─ README.md // 說明文檔
│  └─ .vuepress
│     └─ config.js // 入口文件，也是配置文件
└─ package.json
```

## 2.在 .vuepress 文件夹下添加 config.js，配置网站的标题和描述，方便 SEO：
```js
module.exports = {
  title: '网站的标题',
  description: '网站的描述'
}
```

## 3.修改入口文件
在項目初始化時，默認的入口文件是`index.js`，所以要改成`config.js`

在`package.json`中修改`main`路徑
```js
"main": "docs/.vuepress/config.js",
```

## 4.添加導航欄
我们现在在页首的右上角添加导航栏，修改 config.js:
```js
module.exports = {
    title: '...',
    description: '...',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '博客',
                items: [
                    { text: 'Github', link: '' },
                    { text: '掘金', link: '' }
                ]
            }
        ]
    }
}
```

## 5.添加侧边栏
现在我们添加一些 md 文档，目前文档的目录如下：

```js
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
|  └─ handbook
|  	  └─ ConditionalTypes.md
|	    └─ Generics.md
└─ package.json
```

`config.js` 配置如下：
```js
module.exports = {
    themeConfig: {
        nav: [...],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" }
              ],
            }
          ]
    }
}
```

## 6.更換主題
::: warning
如果不成功，嘗試重啟項目
:::
安装 vuepress-theme-reco：
```js
yarn add vuepress-theme-reco
```

在 config.js 里引用该主题:
```js
module.exports = {
  // ...
  theme: 'reco'
  // ...
}
```

## 7.添加文章信息
::: tip
添加到md文檔最頂部
:::
```js
---
title: Name
author: Author
date: '2021-12-12'
---
```

## 8.设置语言
第7步後發現時間顯示不太一樣，設置語言後可更改
修改`config.js`
```js
module.exports = {
  // ...
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // ...
}
```

## 9.开启目录结构
修改`config.js`
```js
module.exports = {
  //...
  themeConfig: {
    subSidebar: 'auto'
  }
  //...
}
```

## 10.修改樣式
::: tip
 添加`index.styl`文件，內部可以寫css樣式；
 根據標籤、class來修改樣式，若不成功，重啟項目
 :::
```js
.
├─ docs
│  ├─ README.md // 說明文檔
│  └─ .vuepress
│     └─ config.js // 入口文件，也是配置文件
|     └─ styles
|      └─index.styl // 全局樣式文件
└─ package.json
```

## 11.修改主題色
创建一个 `.vuepress/styles/palette.styl` 文件
添加樣式
```js
$accentColor = #3178c6
```

## 12.文章更新時間顯示
```js
themeConfig{
  lastUpdated: '上次更新',
}
```
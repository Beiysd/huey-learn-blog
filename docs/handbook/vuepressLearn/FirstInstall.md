## 1.創建文件並進入文件目錄
```js
mkdir vuepress-start && cd vuepress-start
```

## 2.初始化項目
```js
// 一路回車鍵
yarn init
```

## 3.將VuePress安裝為本地依賴
```js
yarn add -D vuepress
```

## 4.創建README 作為項目說明文檔
```js
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

## 5.配置啟動命令
```js
  // 進入package.json文件中，添加如下命令
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
```

## 6.此時啟動後看到的頁面是404，接下來進行基礎配置
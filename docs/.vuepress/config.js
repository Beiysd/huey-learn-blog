module.exports = {
  title: 'Huey’s Learn Blog',
  description: 'Learn Blog',
  base: '/huey-learn-blog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // 主題
  theme: 'reco',
  // 插件
  plugins: [
    ['vuepress-plugin-code-copy', true],
  ],
  themeConfig: {
    // 文章更新時間
    lastUpdated: '上次更新',
    // 開啟目錄結構
    subSidebar: 'auto',
    // 導航欄
    nav: [
      { text: '首頁', link: '/' },
      {
        text: 'Huey‘s Blog', items: [
          {
            text: 'Github', link: '',
          },
          {
            text: 'Gitee', link: '',
          },
        ]
      },
    ],
    // 側邊欄
    sidebar: [
      {
        title: '歡迎學習',
        path: '/',
        collapsable: false, // 不折疊
        children: [
          { title: '學前必讀', path: '/' }
        ]
      },
      {
        title: '使用Vuepress搭建博客',
        path: '/handbook/vuepressLearn/About',
        collapsable: false,
        children: [
          { title: '關於本係列', path: '/handbook/vuepressLearn/About' },
          { title: '本地搭建', path: '/handbook/vuepressLearn/FirstInstall' },
          { title: '基本設置', path: '/handbook/vuepressLearn/ConfigSet' },
          { title: '部署', path: '/handbook/vuepressLearn/Arrang' }
        ]
      },
      {
        title: '基礎學習',
        path: '/handbook/ConditionalTypes',
        collapsable: false,
        children: [
          { title: '條件類型', path: '/handbook/ConditionalTypes' },
          { title: '泛型', path: '/handbook/Generics' }
        ]
      }
    ]
  }
}
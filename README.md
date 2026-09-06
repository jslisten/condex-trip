# 北京旅行攻略

一个基于 Vue 3 + Vite 的旅行景点展示应用。

## 功能特性

- 🏛️ **景点列表** - 展示北京热门景点，支持分类筛选
- 🔍 **搜索功能** - 按景点名称快速搜索
- 📍 **景点详情** - 查看景点图片、评分、开放时间、门票价格等
- ❤️ **收藏功能** - 收藏喜欢的景点，数据本地持久化
- 📱 **移动端适配** - 响应式设计，适配各种屏幕尺寸

## 技术栈

- Vue 3 (Composition API)
- Vite
- Vue Router
- Pinia
- CSS3

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
codex-trip/
├── src/
│   ├── assets/          # 静态资源与全局样式
│   ├── components/     # 可复用组件
│   │   ├── AttractionCard.vue    # 景点卡片组件
│   │   ├── SkeletonLoading.vue   # 骨架屏组件
│   │   └── TabBar.vue           # 底部导航栏
│   ├── mock/           # 模拟数据
│   ├── router/         # 路由配置
│   ├── stores/         # Pinia 状态管理
│   ├── views/          # 页面组件
│   │   ├── HomePage.vue        # 首页
│   │   ├── DetailPage.vue      # 详情页
│   │   └── FavoritesPage.vue   # 收藏页
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
├── index.html
├── package.json
└── vite.config.js
```

## 景点数据

应用包含以下北京热门景点：

- 故宫博物馆
- 天坛公园
- 颐和园
- 八达岭长城
- 国家博物馆
- 南锣鼓巷

## 预览

访问 http://localhost:5173 查看应用

![预览](https://picsum.photos/seed/preview/800/600)
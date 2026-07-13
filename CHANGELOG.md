# 修改记录 (CHANGELOG)

## V1 - 2026-07-10 16:00 — 离散滚轮滚动

### 需求
进入首页后，鼠标滚轮每次滑动跳转一个完整区块（首页 → 智能软件 → 交付方式 → 项目案例 → 联系我们 → 页脚），而非连续滚动。

### 修改文件清单

| # | 文件 | 操作 | 说明 |
|---|------|------|------|
| 1 | `src/hooks/useSnapScroll.js` | **新建** | 离散滚轮滚动 Hook |
| 2 | `src/App.jsx` | 修改 | 引入 useSnapScroll，Footer 添加 `id="footer"` |
| 3 | `src/index.css` | 修改 | 移除 `html { scroll-behavior: smooth }` |

### 回滚方法

```bash
# 回到修改前状态
git checkout HEAD -- src/App.jsx src/index.css
rm src/hooks/useSnapScroll.js

# 或者 revert 整个 V1 提交
git revert <V1-commit-hash>
```

### 技术细节

**useSnapScroll Hook:**
- 拦截 `wheel` 事件（passive: false），累积 delta 超过 50px 阈值后触发一次区块跳转
- 拦截所有 `a[href^="#"]` 锚点点击，统一用自定义动画接管
- 使用 `requestAnimationFrame` + easeInOutCubic 实现 700ms 平滑滚动
- 自动补偿 76px 固定导航栏高度
- 在首尾边界自动放开滚轮，不影响浏览器默认行为

**区块顺序:**
1. #hero (首页)
2. #services (智能软件)
3. #process (交付方式)
4. #portfolio (项目案例)
5. #contact (联系我们)
6. #footer (页脚)

---

## V2 - 2026-07-10 16:15 — Hero 区块：删除标签行 + 优化排版

### 需求
删除 Hero 左半部分标题上方的能力标签行（招投标智能化 / 销售获客 / 知识管理 / 流程自动化），并重新优化左半部分的排版。

### 修改文件清单

| # | 文件 | 操作 | 说明 |
|---|------|------|------|
| 1 | `src/components/Hero.jsx` | 修改 | 删除 `capabilities` 数组和 `hero-capabilities` div |
| 2 | `src/index.css` | 修改 | 删除 `.hero-capabilities` 全部样式；副标题字号从 1.06rem → 1.15rem；调整间距 |

### 排版变化

| 属性 | 旧值 | 新值 | 原因 |
|------|------|------|------|
| `.hero-subtitle` font-size | 1.06rem | 1.15rem | 副标题承担更多视觉重量 |
| `.hero-subtitle` margin-top | 28px | 32px | 增加呼吸感 |
| `.hero-actions` margin-top | 38px | 44px | CTA 与副标题拉开层次 |
| `.hero-capabilities` | 存在 | 删除 | 标签行已移除 |

### 回滚方法

```bash
git checkout HEAD -- src/components/Hero.jsx src/index.css
```

---

## V3 - 2026-07-10 17:00 — 标题改写 + Logo 1.2倍放大

### 需求
1. 首页大标题改为"为企业量身打造懂业务的智能软件"
2. 导航栏"清云智矩"字号放大到 1.2 倍

### 修改文件清单

| # | 文件 | 操作 | 说明 |
|---|------|------|------|
| 1 | `src/components/Hero.jsx` | 修改 | h1 标题替换 |
| 2 | `src/index.css` | 修改 | `.nav-logo` 字号 1.18rem → 1.42rem；响应式 1.03rem → 1.24rem；`.footer-logo` 保持 1.18rem |

### 回滚方法

```bash
git checkout HEAD -- src/components/Hero.jsx src/index.css
```

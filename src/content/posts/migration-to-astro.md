---
title: 关于从 Hexo 转到 Astro
published: 2026-06-15
category: 杂谈
---

是的，我也换到 Astro 了。

以前放的 Hexo 网站我就放在了 <https://outdated-blog.ymbit.cn>，~~甚至防着有人闲着没事真去开我还开了个 JS 挑战~~

# 关于换到 Astro（Firefly）
首先很明显的就是性能提升，虽然对我来说没什么用，倒是支持了很多功能。

但是没有等效于 `hexo new post` 类似的 CLI，Front-matter得自己写了

而且就是朋友都是因 Hexo 的臃肿才转到的 Astro 的，但是我怎么感觉 Astro 更大呢（

![](/assets/migration-to-astro/file.png)

倒是性能提示倒是很舒服就是了。

# 怎么换？
我不知道其他人是怎么做的，我自己本身是用的 Giscus 做评论系统，图片放在 `/public/images` 下的。

本身迁移就是件麻烦事，然后就用 OpenCode 做个 Skill 让 AI 了解 Astro 和项目文件就让他自己去做。

所以我基本没花多少时间就完成了，感谢DeepSeek（

![](/assets/memes/2A8815D2CF9A4BB8EE4677936DEB62AF.jpg)

# 关于迁移到 Astro
## Markdown
Hexo 和 Astro 的 Frontmatter 映射规则不一样。Hexo 对 Frontmatter 相当宽松，甚至允许只有结尾的 ---；而 Astro 的 Content Collections 要求标准的 YAML Frontmatter，两头都必须有 ---。

字段名也不一样，比如 Hexo 的 date 在 Astro 里通常要映射成 pubDatetime。如果不小心，date 写错位置还可能导致字段解析失败。

如果你也打算用 AI 辅助迁移（？）的话，可以试试这个 Skill：

<https://blog.ymbit.cn/assets/file/hexo-to-astro/SKILL.md>
## SEO
以前我的站用 /archive 来放文章，但很多 Astro 主题默认用 /post。这就面临两个选择：

- 直接在源代码里改路由配置
- 用 301 重定向把旧链接永久指向新地址

我选择了后者。Astro 可以在 `astro.config.ts` 里配置 `redirects`，或者在 `src/pages/` 下用 [...slug].astro 这样的 catchall 路由来兼容旧链接。

## JavaScript / 字体
Astro 默认零 JavaScript 输出，性能优势就来自这里。

但如果旧站有一些 JS 交互（比如黑幕、主题切换这些），就需要用 Astro 的 `client:*` 指令来按需加载。比如`client:load`会在页面加载时激活组件，`client:idle` 会在浏览器空闲时才加载。这样既保留了交互，又不会拖慢首屏速度。

但是要说一点就是字体。

中文字体差不多要1MB以上，如果你是境外服务器，建议找个境内服务器做静态要么用系统自带的。

如果一定要用自定义字体，记得做字体子集化和 Lazyload

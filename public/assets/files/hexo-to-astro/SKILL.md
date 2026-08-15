---
name: hexo-to-astro
description: Use when migrating blog posts from Hexo to an Astro blog theme (Firefly/Fuwari). Covers Hexo front-matter to Astro front-matter field mapping, date/permalink/draft conversions, Hexo tag plugin ({% %}) to Markdown conversions, `<!-- more -->` excerpt handling, asset image path migration, and post files relocation from `source/_posts/` to `src/content/posts/`. Trigger on keywords like hexo migration, hexo to astro, Hexo 转 Astro, convert hexo post, hexo front-matter, migrate source/_posts, {% asset_img %}, {% codeblock %}, <!-- more -->, permalink to slug, comments to comment, categories to category.
---

# Hexo → Astro 迁移 Skill

本 Skill 用于把 Hexo 博客文章迁移到 Astro 博客主题（默认为 **Firefly**，基于 Fuwari）。

参考文档：
- Hexo Front-matter: https://hexo.io/zh-cn/docs/front-matter
- Firefly 编写文章: https://docs-firefly.cuteleaf.cn/zh/guide/writing.html

## 迁移总览

| Hexo                         | Astro/Firefly                | 说明                 |
|------------------------------|------------------------------|----------------------|
| `source/_posts/**`           | `src/content/posts/**`       | 文章存放目录         |
| `.md` + `<!-- more -->`      | `.md`/`.mdx` + `description` | 摘要改用 frontmatter |
| `{% asset_img %}` 等标签插件 | 原生 Markdown / iframe       | 见下方转换表         |
| Hexo 主题 frontmatter        | Firefly frontmatter          | 见字段映射表         |

## 字段映射表（Front-matter）

| Hexo 字段          | Astro/Firefly 字段 | 转换规则                                                                                                                                                                   |
|--------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`            | `title`            | 直接复制（必填）                                                                                                                                                           |
| `date`             | `published`        | 必填。格式 `2013/7/13 20:46:25` → `2013-07-13`（清掉时分秒或保留完整 ISO 均可）。缺失时回退到文件 mtime / git 首次提交时间                                                 |
| `updated`          | `updated`          | 同上格式转换。若与 `date` 相同可省略（Firefly 默认用 `published`）                                                                                                         |
| `comments`         | `comment`          | 语义相同，但字段名不同。Hexo 默认 `true`、Firefly 默认 `true` 开启；只在 `comments: false` 时写 `comment: false`，其余情况可省略                                           |
| `tags`             | `tags`             | 直接复制数组                                                                                                                                                               |
| `categories`       | `category`         | 数组取**最深层子分类**（最后一项）作为单值字符串。例：`[Sports, Baseball]` → `category: Baseball`；多个独立分类时取数组最后一个。嵌套关系丢失（Firefly 只支持单一 string） |
| `published: false` | `draft: true`      | 语义取反。`_draft/` 下的文章默认视为 `draft: true`                                                                                                                         |
| `permalink`        | `slug`             | 提取 slug：去开头结尾的 `/`、去掉 `.html`/`.md`/`.html` 后缀、URL 解码。如 `/posts/2013/07/my-post.html` → `my-post`                                                       |
| `excerpt`          | `description`      | 直接复制                                                                                                                                                                   |
| `lang`             | `lang`             | 直接复制                                                                                                                                                                   |
| `layout`           | —                  | 丢弃。`layout: false` 的文章按普通 markdown 处理                                                                                                                           |
| `disableNunjucks`  | —                  | 丢弃（迁移时已展开剩余标签）                                                                                                                                               |

### Hexo 主题常见扩展字段 → Firefly

这些不在 Hexo 核心文档里，但常见于 Next/Ayer 等主题，视情况映射或丢弃：

| Hexo 主题字段                             | 映射                                                                  |
|-------------------------------------------|-----------------------------------------------------------------------|
| `cover` / `thumbnail` / `banner`          | → `image`（路径规则：相对文章目录 `./x.jpg`、`/public` 路径、或 URL） |
| `toc: false`                              | 丢弃（Firefly 侧边栏 TOC 由 `sidebarToc` 组件控制）                   |
| `repost` / `copyright` / `reward` / `top` | `top` → `pinned: true`；其余丢弃或手动处理                            |
| `abbrlink` / `swiper` / `noindex` 等      | 丢弃                                                                  |

## 目标 Frontmatter 模板

```yaml
---
title: 文章标题          # 必填
published: 2025-01-01  # 必填，来自 Hexo date
updated: 2025-02-01    # 可选
description: 简短描述   # 来自 excerpt / <!-- more --> 前文
image: ./cover.jpg     # 可选，来自 cover/thumbnail
tags: [标签1, 标签2]
category: 分类
draft: false           # published:false → 这里 true
pinned: true           # 可选，来自主题 top
slug: custom-url       # 可选，来自 permalink
comment: false         # 仅 comments:false 时写
lang: zh-CN            # 可选
author: 作者           # 可选，如原主题有
licenseName: CC BY-NC-SA 4.0   # 可选
licenseUrl: https://...          # 可选
sourceLink: https://...          # 可选
---
```

## 正文标签插件转换表

把 Hexo 标签插件（`{% %}`）展开成 Astro/Firefly 原生语法：

| Hexo 标签插件                                                             | 转换结果                                                                                                                                                                                        |
|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{% asset_img cover.png [alt] %}`                                         | `![alt](cover.png)`（相对路径，配合子目录资源自动生效）                                                                                                                                         |
| `{% asset_link file.pdf [标题] %}`                                        | `[标题](file.pdf)` 或 `[file.pdf](file.pdf)`                                                                                                                                                    |
| `{% asset_path cover.png %}`                                              | `cover.png`（裸路径）                                                                                                                                                                           |
| `{% img [类] url [title] %}` / `{% image %}`                              | `![title](url)`                                                                                                                                                                                 |
| `{% link 标题 url [external] %}`                                          | `[标题](url)`                                                                                                                                                                                   |
| `{% codeblock [标题] [lang] %}…{% endcodeblock %}`                        | ```` ```lang```` + 内容 + ```` ``` ````（标题可作注释）                                                                                                                                         |
| `{% blockquote [来源] [作者] %}…{% endblockquote %}`                      | `> …` + 署名 `> — 作者《来源》`                                                                                                                                                                 |
| `{% youtube ID %}`                                                        | `<iframe width="100%" height="468" src="https://www.youtube.com/embed/ID" frameborder="0" allowfullscreen></iframe>`                                                                            |
| `{% bilibili BV [page] %}`                                                | `<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>` |
| `{% vimeo ID %}`                                                          | YouTube 风格 iframe（`https://player.vimeo.com/video/ID`）                                                                                                                                      |
| `{% raw %}…{% endraw %}`                                                  | 去掉包裹，保留内部 HTML 原文                                                                                                                                                                    |
| `{% note [title] %}…{% endnote %}` / `{% tip %}` / `{% warning %}`        | → Firefly 提醒框。`note`→`> [!NOTE]`、`tip`→`> [!TIP]`、`warning`→`> [!WARNING]`、`danger`→`> [!CAUTION]`                                                                                       |
| `{% centerquote %}…{% endcenterquote %}` / `{% cq %}` / `{% pullquote %}` | `> …`                                                                                                                                                                                           |
| `{% post_link 标题 %}` / `{% post_path slug %}`                           | 删除或在确认目标链接后改普通链接                                                                                                                                                                |
| `{% tabs %}` / `{% subtab %}`                                             | 需人工处理（建议转为小标题 `###` + 内容）                                                                                                                                                       |
| 残留的 `{{ }}` / `{% %}`（Nunjucks）                                      | 若 `disableNunjucks` 未开启会被 Hexo 渲染，迁移时移除或转义                                                                                                                                     |

### 其他正文处理

- `<!-- more -->`：截取之前的文字作为 `description`（若 frontmatter 无 `excerpt`），并删除该标记。
- `<!-- toc -->`、`<!-- 为了记录的文章主题、排行之类 -->` 等模板注释：删除。
- 末尾的 `<!-- endmarker -->` 之类插件标记：删除。
- Hexo 特有链接后 `/`：保留即可。

## 文件与资源迁移

1. 遍历 `source/_posts/`（含子目录）与 `source/_draft/`，逐篇转换。
2. 文章同名资源文件夹（`post-name/cover.png` + `post-name/index.md`）→ 整体复制到 `../../../../src/content/posts` 对应子目录，保留相对路径。
3. `{% asset_img x.png %}` → 保持相对路径 `./x.png`，资源随文件夹复制后自动生效。
4. 文件 `image` 有一张封面图时建议下沉为同名子目录：
   ```
   src/content/posts/
   ├── post-1.md
   └── post-2/
       ├── cover.png
       └── index.md
   ```
5. `_draft/` → `draft: true`，可保留原文件名。

## 执行流程

1. 定位 Hexo 项目：确认 `_config.yml`、`source/_posts/`。确认目标 Astro 主题（Firefly/Fuwari/其他），不同主题字段可能不同，先读目标主题写作文档。
2. 读取每篇文章 frontmatter + 正文。
3. 按「字段映射表」生成目标 frontmatter（必填 `title`、`published`）。
4. 按「标签插件转换表」改写正文；用 `<!-- more -->` 生成 `description`。
5. 复制资源文件，写入转换后的文章到 `../../../../src/content/posts`。
6. 验证：`pnpm dev` 预览；有 mermaid/KaTeX/提醒框的用 `pnpm build` 确认渲染无误。
7. 迁移后检查 `siteConfig` 是否启用对应页面、导航、`coverImageConfig` 等。

## 注意事项

- `categories` 的层级会丢失，迁移前向用户确认取分类策略（最深子类 or 父类）。
- `permalink` 是 SEO 敏感项，改动前提示用户。
- 预览图带 API 随机图需求的用 `image: api`（需 `coverImageConfig.ts` 配置）。
- 若源文章含 MDX 特需（组件/变量），转成 `.mdx`。
- 中文/特殊字符文件名：Firefly 会以文件名做 URL，建议迁移时由用户确认是否加 `slug`。
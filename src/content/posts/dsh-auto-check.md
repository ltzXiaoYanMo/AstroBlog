---
title: dsh-auto-check - 让模型该干自己正确的事
description: dsh-auto-check - 让模型该干自己正确的事
published: 2026-11-08
category: 技术分享
tags:
  - 技术分享
slug:
zhihu-title: dsh-auto-check - 让模型该干自己正确的事
zhihu-topics: []
zhihu-link: https://zhuanlan.zhihu.com/p/2104887300173869880
---
# 这是什么插件？它能做什么？

顾名思义，这是一个自动审查的 DSH 增强插件

![](https://static.ymbit.cn/images/2026/11/9e3a5baf82d31ec35f8aef3405725b59.png)

不替换、不修改自带的 `dsh-experimental-auto-review` 插件；审查策略本身保持原样。插件只在其外层包一层 `tools/pre-execute` 监听，把「审查拒绝 / 审查失败」交给用户选择

DeepSeek Harness 的自动审查模型主要是跟随主模型

假如说你选的 DeepSeek V4.1 Flash，则它的审查模型也将会是 DeepSeek V4.1 Flash

不是说不好，而是因为主要是有专门的审查模型，列如说
- Qwen3Guard
- LiamaGuard3
- WlidGuard
- ShieldGemma
等等……

还有就是，如果你选的是 Claude Fable 或者 ChatGPT Astra，不做权威认证，我自己专门拿它审查命令甚至能多指数级的 Token（

# 怎么安装它？

目前还没上传至 dsh-market，目前只能选择手动安装。
![](https://static.ymbit.cn/images/2026/11/2195a195817ee33f969b7050e70d4fe8.png)

# 对 Qwen3Guard 做兼容

正常来说 LLM 会给一大堆废话，列如说官方的 dsh-experimental-auto-review，前文提到它会拿主模型再开 Agent 审查命令申请。 某种意义上他会比较慢，至少我换到 Qwen3Guard 会是这样。

LLM 返回会提示原因，但 Qwen3Guard 不会。但在 DSH 经常中英混血（指有时中文有时英文）

如果看不懂英文甚至还是累赘，甚至不如全开

Qwen3Guard 只会回复两行
```output
Safety: Safe | Controversial | Unsafe
Categories: <分类列表 | None>
```
插件主要依赖 Safety 栏目，Safe 放行 Controversial 和 Unsafe 按照插件设置是否拒绝或让用户自己看要不要放行

Categories 的话，对我来说用处不大（
因为它的列表是主要应用UGC评论为多，在代码只有 JailBreak（越狱）其他的几乎不怎么出现。

## 关于兼容模式
这个时候我就得说到我~~Vibe Coding~~写完之后要来测试的时候，本来想去找 阿里云百炼平台 找找有没有模型，结果发现只有 PAI 人工智能平台有，而且还得租用服务器。一看价格
![](https://static.ymbit.cn/images/2026/11/2d669c713ebb581f9d7df9f4a57dd557.png)
我立刻选择放弃。

### 换到 LM Studio
但是我还是高估了我电脑的实力，但凡上下文拉满，我的电脑必定会死的透透的。

![](https://static.ymbit.cn/images/2026/11/7a37bcdd7e5bda1275fe0ea3689514a0.png)

依旧得动用互联网的力量。

### Superlinked
我不知道从哪个野鸡论坛找到这个提供商，看样子还挺高大上的，那我就用你了。

结果发现，它的 OpenAI 格式几乎是残废，或者说是上下文和我电脑一样残废
![上下文过长](https://static.ymbit.cn/images/2026/11/d418b478c0b2a73d65338c87cf8aa2f8.png)
![500喂到饱](https://static.ymbit.cn/images/2026/11/42c83f6dd902d98b615819ca691b84a2.png)
这些一切都好，我都能找办法解决。

但是你告诉我你还有预热？
![](https://static.ymbit.cn/images/2026/11/0aa15cbcce6aec8cf8fd9eba09a9b505.png)
我真没绷住。

然后预热完了，我寻思终于可以使了吧？

结果我一眼审核全部报错，我寻思不可能吧？就这么简单两个分级怎么可能会错？

![](https://static.ymbit.cn/images/2026/11/c878c215dbc7a2880df08dd3d04a8b7e.png)

哦兄弟你怎么不早点说你这还是个残废啊？

![](https://static.ymbit.cn/images/2026/11/c0dc35245b734e5c0ebe04e4887a2453.png)

所以这个兼容模式就是这么来的。

# 运行的咋样？
![](https://static.ymbit.cn/images/2026/11/47f1621a0823dc1509c0dc0df16bbe1a.png)

![](https://static.ymbit.cn/images/2026/11/3c234f5f33f3d2afb874aa214caef313.png)

主要就这么两样。

但是实测下来，如果用 Claude 和 ChatGPT 类模型确实能省下些 Token，且速度确实变快了。~~可能是我的感觉吧~~

总之，项目仍在积极开发与迭代，欢迎试用与 Issue，**希望能帮你省一些花费。**


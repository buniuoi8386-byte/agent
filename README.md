# Nguyệt Băng — 多源新闻简报 Agent

公开展示页：https://buniuoi8386-byte.github.io/agent/  
GitHub 仓库：https://github.com/buniuoi8386-byte/agent

本项目按 AgentFactory 使用说明的章节结构展示 Nguyệt Băng 的定位、工作方式、输入输出、触发方式与能力边界。页面是静态只读展示，不含聊天入口、API、Lark 权限、Hermes Profile 或私人消息。

## 文件

- `index.html`：中文说明内容。
- `styles.css`、`layout.css`：页面样式与响应式排版，优先使用本机 CJK 字体。
- GitHub Pages 从 `main` 分支根目录发布，提交后会自动部署。

## 安全边界

- Content Security Policy 将 `connect-src` 设为 `none`，页面不向外发起数据连接。
- 展示内容不包含密钥、环境变量、个人 Lark 消息或 Agent 调用接口。
- 页面所述的自动定时任务、Lark 私聊接收等状态明确标记为尚未完成配置/复测。

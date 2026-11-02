# 两位 Hermes AI 助理

公开展示页：https://buniuoi8386-byte.github.io/agent/  
GitHub 仓库：https://github.com/buniuoi8386-byte/agent

本页按 AgentFactory 说明页的结构展示两位独立 Hermes Profile：

- **Nguyệt Băng** (`news-brief`)：多源新闻整理与核验助理。
- **Tuần An** (`weekly-report`)：课程任务和学习进度周报助理。

两者都是 Hermes 中供用户使用的 AI 助理，不是面向公众开放调用的机器人。Lark 若使用，只是需要另行授权、配置和验证的可选渠道。定时发送、Lark 自动收发等状态均按实际验证情况标注。

## 文件

- `index.html`：中文助理说明和流程。
- `styles.css`、`layout.css`：响应式样式。
- `nguyet-bang-avatar.jpg`：Nguyệt Băng 展示头像。
- GitHub Pages 从 `main` 分支根目录发布。

## 安全边界

- 内容安全策略将 `connect-src` 设为 `none`，页面不向外发起数据连接。
- 页面不包含密钥、环境变量、私人 Lark 消息或助理调用接口。
- 访客只能查看说明页，不能调用 Hermes Profile。

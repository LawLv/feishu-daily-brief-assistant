# 飞书简报信息助手

每日简报信息助手：从飞书群聊、邮件和关联资料中提炼技术支持重点，并生成便于快速浏览的图文网页。

本仓库备份**如何生成报告的SOP、通用提示词、版式规范和渲染模板**。示例全部为占位内容；不存放实际报告、聊天记录、邮件、客户案例、现场图片、个人账号配置或登录凭据。

## 从这里开始

1. 按 [生成流程 SOP](SOP.md) 配置数据读取、整理与发布流程。
2. 将 [每日任务提示词模板](prompts/daily-brief.md) 中的占位变量替换为自己的私有配置，保存到已有每日任务。
3. 按 [运行能力要求](docs/runtime-requirements.md) 验证云端读取、图片获取和网页保存是否真正可用。
4. 发布时复用 [版式规范](format/style-guide.md) 和 `templates/` 中的固定渲染模板。

## 目标效果

- 2—5分钟阅读；结论在前，详情和原始来源跟在后面。
- BG1、CC1、MT1、ET1、平台与软件、政策资料提醒六模块。
- 宽屏三列、中屏两列、手机一列；全部内容平铺浏览。
- 淡暖灰背景、淡米色模块、轻色块标题。
- 主标题醒目显示完整统计时间范围。
- 文楷屏幕阅读字体，正文18px，标题与结论加粗，舒适行距。
- 原图可读时放在相应条目下，附说明、日期和来源。
- 每次发布一个本期固定链接，并更新 `/reports/latest` 固定收藏入口。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| `SOP.md` | 从读取到发布、核对的完整步骤 |
| `prompts/daily-brief.md` | 可复制到每日任务的通用指令 |
| `format/style-guide.md` | 当前确认的视觉与内容排版规范 |
| `templates/report-reading.css` | 可维护的CSS样式源 |
| `templates/report-template.ts` | 独立网页渲染函数，带同版CSS |
| `templates/types.ts` | 报告数据类型 |
| `examples/report.placeholder.json` | 仅用于演示结构的六模块占位数据 |
| `scripts/render-example.mjs` | 在本地生成占位预览，不读取飞书 |
| `docs/runtime-requirements.md` | 工具、授权、运行位置和失败处理 |
| `docs/font-notice.md` | 字体来源、版本、校验和与许可说明 |
| `third-party/OFL.txt` | 第三方字体的原始许可文本 |
| `backup-manifest.json` | 备份内容的SHA-256清单 |

## 可选：预览占位版式

需要支持TypeScript类型擦除的Node.js（本项目使用Node.js 24）。

```sh
npm run preview:render
```

生成 `preview/index.html`。如需复现文楷效果，先按字体说明下载原字体，再运行：

```sh
node scripts/render-example.mjs /path/to/LXGWWenKaiScreen-v1.530.ttf
```

脚本会把提供的字体内嵌到**仅含占位内容**的预览；不传字体时使用系统字体回退。`preview/`不纳入仓库。

本仓库是一次SOP快照备份，不配置本地远程同步、定时上传或持续集成。

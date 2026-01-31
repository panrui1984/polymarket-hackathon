🔮 Polymarket AI Indexer & Intelligence Terminal
![alt text](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)

![alt text](https://img.shields.io/badge/Prisma-7.3-2D3748?style=for-the-badge&logo=prisma)

![alt text](https://img.shields.io/badge/Gemini_AI-2.0-blue?style=for-the-badge&logo=googlegemini)

![alt text](https://img.shields.io/badge/Viem-2.x-black?style=for-the-badge&logo=ethereum)

![alt text](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
Polymarket AI Indexer & Intelligence Terminal 是一个全栈预测市场数据分析平台。它不仅能实时索引 Polygon 链上的原始交易数据，还深度集成了 Google Gemini 2.0，将冰冷的十六进制链上日志转化为极具投资参考价值的智能情报。
本项目的核心目标是解决预测市场信息不对称问题，通过 AI 解码复杂的“负风险 (Negative Risk)”架构，识别巨鲸动向，并为每一个市场提供“情绪诊断”。
✨ 核心特性
1. 链上全量事件索引 (Blockchain Indexing)
多版本兼容：无缝解码标准二元市场及负风险（NegRisk）多结果市场的 OrderFilled 日志（自动适配 128/160 字节数据）。
全生命周期追踪：索引市场创建（ConditionPreparation）、头寸拆分（Split）、合并（Merge）及最终赔付（Redeem）。
幂等性保障：基于事务的断点续传机制，确保在高并发扫描下数据不漏、不重。
2. Gemini 2.0 智能中枢 (AI Insights)
叙事性解析：AI 自动回溯成交历史，为每个市场生成通俗易懂的“实时局势摘要”。
量化预测：AI 根据链上筹码分布推算“AI 胜率”与“风险指数”。
对话式搜索：支持自然语言查询（Function Calling），如：“谁在大量卖出美联储市场的头寸？”
3. Smart Money 行为画像 (Trader Profiling)
巨鲸监测：实时捕获单笔 > 5000 USDC 的异动。
身份建模：Gemini 自动为大额交易地址打标签，识别“先知交易者”、“套利专家”或“趋势跟随者”。
4. 专业级可视化看板 (Data Viz)
市场情绪雷达：24 小时买卖比（Bullish vs Bearish）量化展示。
巨鲸哨兵卡片：实时滚动展示最近的链上大额异动。
金融级终端 UI：基于 Shadcn UI 与 Tailwind CSS 打造的高级感、圆角化 SaaS 风格。
🛠 技术栈
模块	技术选型
前端框架	Next.js 15 (App Router, Server Components)
数据库/ORM	Prisma 7.3, PostgreSQL, Prisma Adapter Pg
人工智能	Google Gemini 2.0 (Flash/Exp), Function Calling
链上交互	Viem (Fallback RPC, Multi-ABI Decoding)
API 文档	Swagger / OpenAPI 3.0
样式库	Tailwind CSS, Lucide React, Shadcn UI
🚀 快速开始
1. 克隆项目
code
Bash
git clone https://github.com/panrui1984/polymarket-hackathon.git
cd polymarket-ai-indexer
2. 环境配置
在根目录创建 .env 文件，填入以下必要参数：
code
Env
# 数据库连接
DATABASE_URL="postgresql://user:password@localhost:5432/polymarket"

# 区块链 RPC (推荐 Alchemy 或 QuickNode)
POLYGON_RPC_URL="https://polygon-mainnet.g.alchemy.com/v2/your-api-key"

# AI 秘钥
GEMINI_API_KEY="你的_GOOGLE_AI_STUDIO_API_KEY"
3. 初始化数据库
code
Bash
npm install
npx prisma db push
npx prisma db seed # 初始化同步高度
4. 运行后台索引器 (Worker)
打开终端 A，运行持续扫描任务：
code
Bash
npm run worker
5. 运行前端看板 (Dashboard)
打开终端 B，运行 Next.js 页面：
code
Bash
npm run dev
访问 http://localhost:3000，登录账号：admin / admin。
📖 API 文档
本项目内置了完善的 Swagger API 文档，方便开发者进行二次开发。
查看路径：/api-docs
核心接口：
GET /api/v1/alpha/whale-movements: 最近巨鲸成交及 AI 画像
GET /api/v1/analysis/arbitrage: 负风险套利机会扫描
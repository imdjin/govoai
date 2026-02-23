import { FileSearch, Sparkles, Monitor, LayoutTemplate, Share2, BarChart3 } from "lucide-react";

const capabilities = [
  {
    icon: FileSearch,
    title: "官方信息智能合规提取",
    desc: "输入政务办事指南页面链接，AI自动抽取关键信息，从源头规避内容错误风险",
  },
  {
    icon: Sparkles,
    title: "政务场景AI脚本自动生成",
    desc: "预设官方规范脚本框架，一键将晦涩公文转化为接地气、口语化的办事指引旁白",
  },
  {
    icon: Monitor,
    title: "办事流程自动录屏与智能标注",
    desc: "一键捕获政务服务网真实操作全流程，自动高亮关键步骤、标注填报规范与避坑红线",
  },
  {
    icon: LayoutTemplate,
    title: "政务专属标准化模板",
    desc: "预设官方规范版、适老化亲民版、新媒体传播版三大风格，一键套用政务LOGO与合规提示",
  },
  {
    icon: Share2,
    title: "全场景一键导出与适配",
    desc: "一键生成窗口二维码、政务网嵌入代码、视频号/抖音号适配视频文件，当天生成、当天上线",
  },
  {
    icon: BarChart3,
    title: "政务考核成效数据可视化",
    desc: "实时统计视频播放量、完播率、高频查看节点、扫码来源，自动生成专项成效报告",
  },
];

const CoreCapabilities = () => {
  return (
    <section id="capabilities" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">六大核心产品能力</h2>
          <p className="section-subtitle">
            每项能力对应解决一个核心痛点，形成完整的政务办事视频生产与落地闭环
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, i) => (
            <div key={item.title} className="group card-gov relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-all duration-300" style={{ background: 'var(--gradient-card)' }} />
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;

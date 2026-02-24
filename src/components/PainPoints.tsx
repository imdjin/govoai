import { AlertTriangle, FileX, Target, ShieldAlert } from "lucide-react";

const painPoints = [
  {
    icon: FileX,
    title: "内容端困境",
    subtitle: "不实用、看不懂、更新慢",
    desc: "传统图文指南晦涩难懂，政策调整后内容更新不及时，极易误导群众引发投诉",
  },
  {
    icon: AlertTriangle,
    title: "制作端困境",
    subtitle: "成本高、周期长、难批量",
    desc: "单条视频制作周期3-5天，成本5000-20000元，覆盖200+高频事项需百万级投入、近2年周期，无法规模化推广",
  },
  {
    icon: Target,
    title: "考核端困境",
    subtitle: "无成效、难量化、缺素材",
    desc: "传统指引无法量化对一次办成率、网办率的提升效果，无法为上级考核提供硬核数据支撑",
  },
  {
    icon: ShieldAlert,
    title: "合规端困境",
    subtitle: "风险高、难管控、易出错",
    desc: "第三方制作内容易出现与官方规范不符问题，存在合规风险，政务人员需投入大量精力反复审核校对",
  },
];

const PainPoints = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--gradient-section)' }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">当前政务服务的核心痛点</h2>
          <p className="section-subtitle">
            传统办事指引模式已无法满足考核要求与群众需求，四大痛点精准戳中政务部门当前面临的切身难题
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((item) => (
            <div key={item.title} className="card-gov flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm font-medium text-accent mt-0.5">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-4 text-center">
          <p className="text-sm font-medium text-foreground">
            <span className="text-accent font-bold">核心矛盾：</span>
            上级要求全量覆盖、快速见效，但传统模式成本高、周期长，政务部门陷入"想做做不起、做了难见效"的两难困境
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

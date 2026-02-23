import { Trophy, PiggyBank, Heart, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Trophy,
    title: "硬核政绩价值",
    subtitle: "直接拉升核心考核指标",
    stats: [
      { value: "60%+", label: "窗口重复咨询量下降" },
      { value: "50%+", label: "线上办理退件率下降" },
      { value: "30%+", label: "一次办成率提升" },
      { value: "40%+", label: "网办率提升" },
    ],
  },
  {
    icon: PiggyBank,
    title: "成本优化价值",
    subtitle: "大幅降低制作与人力成本",
    stats: [
      { value: "1/10", label: "制作成本降至" },
      { value: "90%+", label: "政务人员工作量减少" },
    ],
  },
  {
    icon: Heart,
    title: "服务提质价值",
    subtitle: "全面提升群众满意度",
    stats: [
      { value: "↓", label: "政务投诉率显著降低" },
      { value: "↑", label: "群众满意度大幅提升" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "合规安全价值",
    subtitle: "全流程零风险管控",
    stats: [
      { value: "100%", label: "匹配官方办事指南" },
      { value: "零风险", label: "数据安全合规" },
    ],
  },
];

const CoreValues = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">四大核心政务价值</h2>
          <p className="section-subtitle">
            直接命中核心考核KPI，每项价值都有明确量化指标
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((item) => (
            <div key={item.title} className="card-gov">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {item.stats.map((s) => (
                  <div key={s.label} className="rounded-lg bg-muted/50 p-3 text-center">
                    <div className="stat-number text-2xl">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

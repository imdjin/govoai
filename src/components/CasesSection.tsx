const cases = [
  {
    label: "标杆项目",
    title: "深圳某区政务服务数据管理局",
    content: "首批10个高频办事事项（驾驶证补证、社保参保、公积金提取、个体工商户注册等）短视频批量生成与落地",
    timeline: "10个工作日完成全量事项生成、上线",
    stats: [
      { value: "58%", label: "窗口咨询量下降" },
      { value: "52%", label: "线上退件率下降" },
      { value: "68%→95%", label: "一次办成率提升" },
      { value: "4.9分", label: "群众满意度" },
    ],
    badge: "获评市级营商环境优化标杆案例",
  },
  {
    label: "对标落地项目",
    title: "山东滨州高新区行政审批服务局",
    content: "「开办企业一件事」等核心营商环境事项短视频批量制作",
    timeline: "",
    stats: [
      { value: "45%", label: "企业开办网办率提升" },
      { value: "62%", label: "窗口咨询量下降" },
    ],
    badge: "为全市政务服务提供可复制可推广的经验",
  },
];

const CasesSection = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--gradient-section)' }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">标杆案例</h2>
          <p className="section-subtitle">
            用数据说话，以下案例均为真实合作项目，数据经过严格统计与复核
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((c) => (
            <div key={c.title} className="card-gov relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--gradient-card)' }} />
              <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                {c.label}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{c.content}</p>
              {c.timeline && (
                <p className="text-sm text-primary font-medium mb-4">{c.timeline}</p>
              )}

              <div className="grid grid-cols-2 gap-3 mb-4">
                {c.stats.map((s) => (
                  <div key={s.label} className="rounded-lg bg-muted/50 p-3 text-center">
                    <div className="stat-number text-xl">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-gov-gold/10 border border-gov-gold/20 p-3 text-center">
                <p className="text-sm font-medium text-foreground">{c.badge}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;

const steps = [
  {
    phase: "第一阶段",
    title: "需求对接",
    period: "3个工作日",
    work: "对接核心需求，梳理高频办事事项清单，确认落地场景",
    result: "事项清单、落地实施方案",
  },
  {
    phase: "第二阶段",
    title: "批量生成",
    period: "5-10个工作日",
    work: "完成全量事项视频批量生成、合规校验，提交政务方终审",
    result: "全事项视频成品、上线配套物料",
  },
  {
    phase: "第三阶段",
    title: "上线落地",
    period: "2个工作日",
    work: "完成窗口二维码制作、政务网嵌入、人员操作培训",
    result: "全场景上线落地、操作培训手册",
  },
  {
    phase: "第四阶段",
    title: "长效运营",
    period: "长期",
    work: "内容更新迭代、月度成效数据复盘、年度考核报告输出",
    result: "月度成效报告、年度考核专项素材",
  },
];

const ImplementationSection = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--gradient-section)' }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">落地实施路径</h2>
          <p className="section-subtitle">
            标准化落地实施路径，最快2周上线见效，全流程透明可控
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.phase} className="card-gov relative">
              <div className="text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 inline-block mb-3">
                {step.phase}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
              <p className="text-sm font-semibold text-gov-cyan mb-3">{step.period}</p>
              <p className="text-sm text-muted-foreground mb-3">{step.work}</p>
              <div className="border-t border-border pt-3">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">交付成果：</span>{step.result}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 text-border text-2xl">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl p-5 text-center text-primary-foreground" style={{ background: 'var(--gradient-card)' }}>
          <p className="font-semibold">
            最快<span className="text-gov-cyan font-black text-xl mx-1">10个工作日</span>即可完成从需求对接到全量上线，第15天即可产出首份成效数据报告
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;

const steps = [
  {
    phase: "第一阶段",
    title: "注册开通",
    period: "即时",
    work: "在线注册账号，选择适合的版本，即刻开通使用",
    result: "平台账号、操作指引",
  },
  {
    phase: "第二阶段",
    title: "事项梳理",
    period: "1-2天",
    work: "梳理高频办事事项清单，确认视频制作优先级",
    result: "事项清单、制作计划",
  },
  {
    phase: "第三阶段",
    title: "批量生成",
    period: "1-3天",
    work: "在线批量生成全量事项视频，AI合规校验，提交终审",
    result: "全事项视频成品、配套物料",
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
          <h2 className="section-title">快速上手路径</h2>
          <p className="section-subtitle">
            注册即用，最快1天批量产出视频，全流程在线完成
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
            注册即用，最快<span className="text-gov-cyan font-black text-xl mx-1">1天</span>即可批量产出视频，无需部署、无需等待
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;

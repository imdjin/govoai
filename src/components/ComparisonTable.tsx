import { Check, X } from "lucide-react";

const rows = [
  { dim: "单条视频制作周期", old: "3-5天", new: "10分钟" },
  { dim: "单条视频制作成本", old: "5000-20000元", new: "不到传统模式的1/10" },
  { dim: "100个高频事项覆盖周期", old: "1-2年", new: "最快3天" },
  { dim: "内容合规性", old: "人工审核，易出错", new: "AI自动校验，零合规风险" },
  { dim: "内容更新迭代", old: "重新制作，周期长", new: "10分钟重新生成" },
  { dim: "成效数据反馈", old: "无统计、无量化", new: "全流程数据可视化" },
  { dim: "政务人员工作量", old: "工作量极大", new: "仅需10分钟终审确认" },
];

const ComparisonTable = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--gradient-section)' }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">vs 传统制作模式 核心优势对比</h2>
          <p className="section-subtitle">
            每个维度都直接关系到政务服务核心考核指标与实际工作效率
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-muted-foreground border-b border-border">对比维度</th>
                <th className="text-left p-4 text-sm font-semibold text-muted-foreground border-b border-border bg-accent/5">
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-accent" />
                    传统人工制作模式
                  </div>
                </th>
                <th className="text-left p-4 text-sm font-semibold text-primary border-b-2 border-primary bg-primary/5">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    「秒懂政务」AI平台
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.dim} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="p-4 text-sm font-medium text-foreground">{row.dim}</td>
                  <td className="p-4 text-sm text-muted-foreground bg-accent/5">{row.old}</td>
                  <td className="p-4 text-sm font-semibold text-primary bg-primary/5">{row.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-xl p-5 text-center text-primary-foreground" style={{ background: 'var(--gradient-card)' }}>
          <p className="font-semibold">
            核心结论：制作效率提升<span className="text-gov-cyan font-black text-xl mx-1">30倍</span>以上，成本降至<span className="text-gov-cyan font-black text-xl mx-1">1/10</span>，政务人员工作量减少<span className="text-gov-cyan font-black text-xl mx-1">90%</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

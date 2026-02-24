import { useState } from "react";
import { Check } from "lucide-react";
import QrModal from "./QrModal";

const plans = [
  {
    name: "基础版",
    price: "199",
    unit: "元/月",
    annual: "1999元/年",
    target: "单个窗口人员 / 个人试用",
    desc: "\u201C我先试试，好用再升级\u201D",
    features: [
      "50个视频/年",
      "1个用户账号",
      "基础模板库",
      "标准输出格式",
    ],
    popular: false,
  },
  {
    name: "专业版",
    price: "4999",
    unit: "元/年",
    annual: "",
    target: "街道/乡镇便民服务中心",
    desc: "一个中心3-5个人用，覆盖所有高频事项",
    features: [
      "无限量视频",
      "3个用户账号",
      "全部模板+风格",
      "多格式输出",
      "品牌资产配置",
    ],
    popular: true,
  },
  {
    name: "机构版",
    price: "9999",
    unit: "元/年",
    annual: "",
    target: "区县级/市级政务服务中心",
    desc: "全县/区统一使用，规范风格，统计工作量",
    features: [
      "无限量视频",
      "10个用户账号",
      "专属模板定制（简单配置）",
      "数据统计看板",
      "优先客服",
    ],
    popular: false,
  },
  {
    name: "私有部署版",
    price: "\u00A0",
    unit: "",
    annual: "",
    target: "市级及以上 / 高安全需求单位",
    desc: "独立部署，数据不出域，完全自主可控",
    features: [
      "无限量视频",
      "不限用户账号",
      "本地化私有部署",
      "数据完全自主可控",
      "专属技术支持与培训",
      "定制化模板与功能开发",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const [showQr, setShowQr] = useState(false);
  return (
    <section id="pricing" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">版本与定价</h2>
          <p className="section-subtitle">
            灵活适配不同规模政务部门的预算与需求
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-gov relative flex flex-col ${
                plan.popular ? "ring-2 ring-primary scale-[1.03]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-primary-foreground px-4 py-1 rounded-full" style={{ background: 'var(--gradient-card)' }}>
                  推荐
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <div className="mt-3 mb-1">
                <span className="text-4xl font-black text-primary">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-1">{plan.unit}</span>
              </div>
              {plan.annual && (
                <p className="text-xs text-muted-foreground mb-2">或 {plan.annual}</p>
              )}
              <p className="text-sm font-medium text-accent mb-1">{plan.target}</p>
              <p className="text-xs text-muted-foreground mb-6">{plan.desc}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowQr(true)}
                className={`block w-full text-center rounded-lg py-3 font-semibold transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? "text-primary-foreground hover:opacity-90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
                style={plan.popular ? { background: 'var(--gradient-card)' } : undefined}
              >
                {plan.price.trim() === "" ? "联系我们" : "立即购买"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <QrModal open={showQr} onClose={() => setShowQr(false)} />
    </section>
  );
};

export default PricingSection;

import { ShieldCheck, Lock, Server, Headphones } from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "内容合规保障",
    items: [
      "所有内容100%源自官方公开发布的办事指南",
      "AI自动校验内容一致性，错误信息自动预警",
      "「AI生成→初审→政务终审」三级审核机制",
    ],
  },
  {
    icon: Lock,
    title: "数据安全保障",
    items: [
      "支持本地化部署、政务内网专属适配",
      "所有数据全流程在政务内网闭环",
      "完全符合等保三级、《数据安全法》等要求",
    ],
  },
  {
    icon: Server,
    title: "技术稳定保障",
    items: [
      "国产化AI技术基座，多地区政务项目验证",
      "7×24小时技术监控，确保平台稳定运行",
      "系统响应<2秒，视频生成成功率>99%",
    ],
  },
  {
    icon: Headphones,
    title: "专属服务保障",
    items: [
      "每个项目配备专属1对1项目对接人",
      "7×12小时响应，紧急情况30分钟内响应",
      "免费提供内容迭代、系统更新、操作培训",
    ],
  },
];

const SecuritySection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">合规与安全保障</h2>
          <p className="section-subtitle">
            四大安全保障体系，构建政务合作的生命线
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g) => (
            <div key={g.title} className="card-gov">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <g.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-3">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

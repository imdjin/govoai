import { Building2, Globe, Smartphone, Users } from "lucide-react";

const scenarios = [
  {
    icon: Building2,
    title: "线下政务大厅",
    desc: "办事窗口二维码、自助机贴码、等候区宣传屏、海报架，群众扫码即看，当场解决问题",
  },
  {
    icon: Globe,
    title: "线上办事渠道",
    desc: "政务服务网嵌入、粤省事/浙里办小程序集成、官方公众号菜单，查指南同步看操作",
  },
  {
    icon: Smartphone,
    title: "新媒体宣传",
    desc: "一键适配视频号、抖音、小红书，用于政务科普、政策宣传、投诉热点回应",
  },
  {
    icon: Users,
    title: "基层下沉场景",
    desc: "社区/乡镇服务站、产业园区、高校公告栏，覆盖中老年、农村、企业群体，助力适老化改造",
  },
];

const ScenariosSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 hero-overlay opacity-95" />
      <div className="relative z-10 section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">全场景落地适配</h2>
          <p className="text-base md:text-lg text-primary-foreground/60 max-w-3xl mx-auto">
            一次生成，全场景复用，全方位覆盖群众办事全生命周期
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((s) => (
            <div key={s.title} className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-primary-foreground/10">
              <div className="w-12 h-12 rounded-lg bg-gov-cyan/20 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-gov-cyan" />
              </div>
              <h3 className="font-bold text-primary-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenariosSection;

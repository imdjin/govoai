import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { Play, ArrowRight, Shield, Zap, BarChart3 } from "lucide-react";
import QrModal from "./QrModal";

const HeroSection = () => {
  const [showQr, setShowQr] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="政务数字化背景" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gov-cyan/30 bg-gov-cyan/10 px-4 py-1.5 text-sm text-gov-cyan mb-8">
            <Shield className="w-4 h-4" />
            <span>专为区县级政务服务部门打造</span>
          </div>

          {/* Title */}
          <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl font-black text-primary-foreground leading-tight mb-6">
            秒懂政务
            <span className="block text-3xl md:text-5xl font-bold mt-2 gov-gradient-text">
              1分钟，把政务变成群众看得懂的短视频
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed">
            把政策解读、办事指南和高频问答批量生成短视频，利民便民、省时省力
          </p>

          {/* CTA */}
          <div className="animate-fade-up-delay-3 flex flex-wrap gap-4 mb-16">
            <button onClick={() => setShowQr(true)} className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 cursor-pointer" style={{ background: 'var(--gradient-accent)' }}>
              立即试用
              <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#capabilities" className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-8 py-4 text-lg font-semibold text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/10">
              <Play className="w-5 h-5" />
              了解产品
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "1分钟", label: "单条视频生产" },
              { value: "1/10", label: "成本降至传统模式" },
              { value: "30倍", label: "制作效率提升" },
              { value: "100%", label: "内容合规保障" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-black text-gov-cyan">{stat.value}</div>
                <div className="text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      <QrModal open={showQr} onClose={() => setShowQr(false)} />
    </section>
  );
};

export default HeroSection;

import { ArrowRight } from "lucide-react";

const FooterSection = () => {
  return (
    <>
      {/* CTA */}
      <section id="contact" className="section-padding">
        <div className="section-container">
          <div className="rounded-2xl p-10 md:p-16 text-center text-primary-foreground relative overflow-hidden" style={{ background: 'var(--gradient-card)' }}>
            <h2 className="text-3xl md:text-4xl font-black mb-4">让政务服务更懂群众</h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              立即联系我们，了解如何10个工作日内完成全量上线，快速提升政务服务考核指标
            </p>
            <a href="mailto:contact@miaodong.gov" className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-accent-foreground transition-all hover:scale-105" style={{ background: 'var(--gradient-accent)' }}>
              预约演示
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">秒懂政务</p>
          <p>AI赋能高效办成一件事 · 全场景提升政务服务质效</p>
          <p>© 2025 秒懂政务 版权所有</p>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;

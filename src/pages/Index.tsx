import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import CoreCapabilities from "@/components/CoreCapabilities";
import ComparisonTable from "@/components/ComparisonTable";
import ScenariosSection from "@/components/ScenariosSection";
import CoreValues from "@/components/CoreValues";
import CasesSection from "@/components/CasesSection";
import PricingSection from "@/components/PricingSection";
import ImplementationSection from "@/components/ImplementationSection";
import SecuritySection from "@/components/SecuritySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainPoints />
      <CoreCapabilities />
      <ComparisonTable />
      <ScenariosSection />
      <div id="values">
        <CoreValues />
      </div>
      <div id="cases">
        <CasesSection />
      </div>
      <PricingSection />
      <ImplementationSection />
      <div id="security">
        <SecuritySection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;

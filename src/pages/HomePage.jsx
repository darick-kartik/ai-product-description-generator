import MainLayout from "../layout/MainLayout";

import Hero from "../home/Hero";
import DashboardPreview from "../home/DashboardPreview";
import TrustedCompanies from "../home/TrustedCompanies";
import Features from "../home/Features";
import HowItWorks from "../home/HowItWorks";
import Statistics from "../home/Statistics";
import Testimonials from "../home/Testimonials";
import PricingPreview from "../home/PricingPreview";
import FAQ from "../home/FAQ";
import CTA from "../home/CTA";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <DashboardPreview />
      <TrustedCompanies />
      <Features />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <PricingPreview />
      <FAQ />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
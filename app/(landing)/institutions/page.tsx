import HeroSection from "@/components/institutions/HeroSection";
import HowCTA from "@/components/institutions/HowCTA";
import InstitutionCTA from "@/components/institutions/InstitutionCTA";
import KeyOfferingsSection from "@/components/institutions/KeyOfferingsSection";
import PartenersMarque from "@/components/institutions/PartenersMarque";

const LearningInstitutions = () => {
  return (
    <section>
      <HeroSection />
      <KeyOfferingsSection />
      <PartenersMarque />
      <HowCTA />
      <InstitutionCTA />
    </section>
  );
};

export default LearningInstitutions;

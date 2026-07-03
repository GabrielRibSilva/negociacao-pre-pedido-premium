import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExperienceShift } from "@/components/ExperienceShift";
import { ProductScreen } from "@/components/ProductScreen";
import { CommercialCards } from "@/components/CommercialCards";
import { ValueLive } from "@/components/ValueLive";
import { FromModuleToOrder } from "@/components/FromModuleToOrder";
import { DemoSection } from "@/components/DemoSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperienceShift />
        <ProductScreen />
        <CommercialCards />
        <ValueLive />
        <FromModuleToOrder />
        <DemoSection />
      </main>
      <Footer />
    </>
  );
}

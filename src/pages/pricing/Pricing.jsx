import Breadcrumb from "@components/ui/Breadcrumb";
import SectionHeading from "@components/ui/SectionHeading";
import PricingCard from "@components/cards/PricingCard";
import { pricingPlans } from "@data/pricing";
import { staggerDelay } from "@utils/helpers";

const Pricing = () => {
  return (
    <>
      <Breadcrumb title="Pricing Plans" currentPage="Pricing" />

      <section id="pricing" className="section-py relative">
        <div className="container-base">
          <SectionHeading
            eyebrow="Pricing"
            title="Choose Your Plan"
            description="Simple, transparent pricing for every family — pick the plan that fits your child's learning journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-8 mt-24 md:mt-30">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                data-aos="fade-up"
                data-aos-delay={staggerDelay(index, 150)}
                className="h-full"
              >
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
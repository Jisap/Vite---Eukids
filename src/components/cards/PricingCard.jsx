import { Icon } from "@iconify/react";
import Button from "../ui/Button";

/**
 * A single pricing tier card with a floating price badge.
 *
 * @param {string} planName
 * @param {string} price
 * @param {string} description
 * @param {{label: string, included: boolean}[]} features
 * @param {string} bgColor - tailwind bg-* class for the card body
 * @param {string} [badgeBg] - tailwind bg-* class for the floating price badge (defaults to white)
 */
const PricingCard = ({
  planName,
  price,
  description,
  features,
  bgColor,
  badgeBg = "bg-white"
}) => (
  <div className={`relative ${bgColor} text-white p-10 sm:p-12 pt-24 rounded-3xl`}>
    <div className="absolute w-full -top-18 left-0 px-6">
      <div className={`${badgeBg} border-card max-w-70 mx-auto p-5 text-heading-1 rounded-2xl`}>
        <p className="text-2xl font-medium font-display">{planName}</p>

        <p className="text-xl font-semibold">
          <span className="text-2xl">{price}</span> / monthly
        </p>
      </div>
    </div>

    <p className="mb-8 text-lg opacity-90">{description}</p>

    <ul className="space-y-5 mb-12">
      {features.map((feature) => (
        <li
          key={feature.label}
          className={`flex items-center gap-2 ${feature.included ? "" : "opacity-40"}`}
        >
          <Icon icon="ic:outline-check" width="22" className="text-primary shrink-0" />
          <span>{feature.label}</span>
        </li>
      ))}
    </ul>

    <Button text="Get Started" variant="white" className="w-full" />
  </div>
);

export default PricingCard;
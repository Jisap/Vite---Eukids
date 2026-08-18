import { useState } from "react";
import { Icon } from "@iconify/react";

/**
 * Simple single-open accordion. Pass items as { title, content } where
 * content can be any ReactNode (a string, a list, etc).
 *
 * @param {{title: string, content: React.ReactNode}[]} items
 * @param {number} [defaultOpenIndex] - index open on mount, -1 for none
 */
const Accordion = ({ items, defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="border border-gray-200 rounded-2xl overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-bold font-display text-lg cursor-pointer"
            >
              {item.title}
              <Icon
                icon="material-symbols:keyboard-arrow-down-rounded"
                width={26}
                className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary-2" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="px-6 pb-5">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
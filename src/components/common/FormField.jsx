import { Icon } from "@iconify/react";

/**
 * Label + icon-led input field, used in multi-field forms like Contact.
 * @param {string} label
 * @param {string} icon - iconify icon name
 * @param {boolean} [required]
 */

const FormField = ({ label, icon, required, className = "", ...rest }) => (
	<div className={`space-y-1.5 ${className}`}>
		<label className="text-xs font-bold text-heading-1 uppercase tracking-wide">
			{label} {required && <span className="text-primary-7">*</span>}
		</label>
		<div className="relative">
			<Icon icon={icon} className="absolute left-4 top-1/2 -translate-y-1/2 text-body text-lg pointer-events-none" />
			<input
				required={required}
				className="w-full h-14 pl-12 pr-5 border border-gray-200 rounded-2xl bg-body-bg text-heading-1 placeholder:text-body/50 text-sm outline-none focus:border-primary-2 transition-colors"
				{...rest}
			/>
		</div>
	</div>
);

export default FormField;
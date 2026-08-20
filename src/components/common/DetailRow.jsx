/**
 * Icon-led label/value row used in sidebars (event cost breakdown, etc).
 * @param {string} icon - iconify icon name
 * @param {string} label
 * @param {React.ReactNode} value
 */
const DetailRow = ({ icon, label, value }) => (
    <li className="flex justify-between items-center border-b border-body/20 py-3 last:border-none">
        <div className="flex items-center gap-3">
            <div className="bg-primary w-14 h-14 p-3 rounded-full border-card flex items-center justify-center shrink-0">
                <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                />
            </div>

            <strong className="text-heading-1">{label}</strong>
        </div>

        <div className="text-right">{value}</div>
    </li>
);

export default DetailRow;

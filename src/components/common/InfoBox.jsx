/**
 * Small bordered info tile with a title and a single line of body copy.
 * @param {string} title
 * @param {string} children
 */
const InfoBox = ({ title, children }) => (
    <div className="border border-gray-200 rounded-xl p-6">
        <h4 className="font-bold text-xl mb-2 font-display">{title}</h4>
        <p className="text-gray-600">{children}</p>
    </div>
);

export default InfoBox;
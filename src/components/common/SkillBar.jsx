/**
 * Horizontal progress bar for a labeled skill/percentage pair.
 * @param {string} label
 * @param {number} percent - 0-100
 */
const SkillBar = ({ label, percent }) => (
    <div>
        <div className="flex justify-between mb-2 text-sm font-medium text-heading-1">
            <span>{label}</span>
            <span>{percent}%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-3 bg-primary rounded-full transition-all duration-700" style={{ width: `${percent}%` }} />
        </div>
    </div>
);

export default SkillBar;
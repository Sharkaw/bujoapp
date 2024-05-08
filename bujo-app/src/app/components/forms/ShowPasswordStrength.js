const ShowPasswordStrength = ({ strength }) => {
    const backgroundColor = (level) => {
        if (level === 0) return "bg-slate-400";
        if (level === 1) return "bg-slate-500";
        if (level === 2) return "bg-slate-700";
        if (level === 3) return "bg-slate-900";
    };
    const strongness = (level) => {
        switch (level) {
            case 0:
                return "Too weak";
            case 1:
                return "Weak";
            case 2:
                return "Medium";
            case 3:
                return "Strong!";
            default:
                return "Too weak";
        }
    };
    return (
        <div className="flex gap-2 items-center">
            <p className="text-xs">{strongness(strength)}</p>
            {Array.from({ length: strength + 1 }).map((_i, index) => (
                <div
                    key={index}
                    className={`h-2 w-6 rounded-md ${backgroundColor(index)}`}
                ></div>
            ))}
        </div>
    );
};
export default ShowPasswordStrength;

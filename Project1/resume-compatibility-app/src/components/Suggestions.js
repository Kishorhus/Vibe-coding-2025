import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Suggestions = ({ suggestions }) => {
    if (!suggestions || suggestions.length === 0)
        return null;
    return (_jsxs("div", { children: [_jsx("h2", { children: "Suggestions" }), _jsx("ul", { children: suggestions.map((suggestion, idx) => (_jsx("li", { children: suggestion }, idx))) })] }));
};
export default Suggestions;

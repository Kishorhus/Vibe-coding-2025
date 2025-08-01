import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const JobDescriptionInput = ({ onChange }) => {
    return (_jsxs("div", { children: [_jsx("label", { children: "Job Description: " }), _jsx("textarea", { rows: 6, onChange: e => onChange(e.target.value) })] }));
};
export default JobDescriptionInput;

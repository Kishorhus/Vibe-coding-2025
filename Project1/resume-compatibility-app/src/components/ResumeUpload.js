import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ResumeUpload = ({ onUpload }) => {
    const handleChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            onUpload(e.target.files[0]);
        }
    };
    return (_jsxs("div", { children: [_jsx("label", { children: "Upload Resume: " }), _jsx("input", { type: "file", accept: ".pdf,.doc,.docx,.txt", onChange: handleChange })] }));
};
export default ResumeUpload;

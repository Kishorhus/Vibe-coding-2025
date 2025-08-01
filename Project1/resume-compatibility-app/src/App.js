var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import axios from 'axios';
import ResumeUpload from './components/ResumeUpload';
import JobDescriptionInput from './components/JobDescriptionInput';
import CompatibilityResult from './components/CompatibilityResult';
import Suggestions from './components/Suggestions';
const App = () => {
    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState('');
    const [compatibilityResult, setCompatibilityResult] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const handleResumeUpload = (file) => {
        setResume(file);
    };
    const handleJobDescriptionChange = (description) => {
        setJobDescription(description);
    };
    const checkResumeCompatibility = () => __awaiter(void 0, void 0, void 0, function* () {
        if (resume && jobDescription) {
            const formData = new FormData();
            formData.append('resume', resume);
            formData.append('jobDescription', jobDescription);
            formData.append('yearsOfExperience', '2'); // Replace with user input if needed
            try {
                const response = yield axios.post('http://localhost:5000/api/check', formData);
                setCompatibilityResult(response.data.status);
                setSuggestions(response.data.suggestions);
            }
            catch (error) {
                setCompatibilityResult('Error checking compatibility');
                setSuggestions([]);
            }
        }
    });
    return (_jsxs("div", { children: [_jsx("h1", { children: "Resume Compatibility Checker" }), _jsx(ResumeUpload, { onUpload: handleResumeUpload }), _jsx(JobDescriptionInput, { onChange: handleJobDescriptionChange }), _jsx("button", Object.assign({ onClick: checkResumeCompatibility }, { children: "Check Compatibility" })), compatibilityResult && (_jsx(CompatibilityResult, { result: compatibilityResult })), suggestions.length > 0 && (_jsx(Suggestions, { suggestions: suggestions }))] }));
};
export default App;

import React, { useState } from 'react';
import axios from 'axios';

import ResumeUpload from './components/ResumeUpload';
import JobDescriptionInput from './components/JobDescriptionInput';
import CompatibilityResult from './components/CompatibilityResult';
import Suggestions from './components/Suggestions';

const App = () => {
    const [resume, setResume] = useState<File | null>(null);
    const [jobDescription, setJobDescription] = useState<string>('');
    const [compatibilityResult, setCompatibilityResult] = useState<string | null>(null);
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleResumeUpload = (file: File) => {
        setResume(file);
    };

    const handleJobDescriptionChange = (description: string) => {
        setJobDescription(description);
    };

    const checkResumeCompatibility = async () => {
        if (resume && jobDescription) {
            const formData = new FormData();
            formData.append('resume', resume);
            formData.append('jobDescription', jobDescription);
            formData.append('yearsOfExperience', '2'); // Replace with user input if needed

            try {
                const response = await axios.post<{ status: string; suggestions: string[] }>(
                    'http://localhost:5000/api/check',
                    formData
                );
                setCompatibilityResult(response.data.status);
                setSuggestions(response.data.suggestions);
            } catch (error) {
                setCompatibilityResult('Error checking compatibility');
                setSuggestions([]);
            }
        }
    };

    return (
        <div>
            <h1>Resume Compatibility Checker</h1>
            <ResumeUpload onUpload={handleResumeUpload} />
            <JobDescriptionInput onChange={handleJobDescriptionChange} />
            <button onClick={checkResumeCompatibility}>Check Compatibility</button>
            {compatibilityResult && (
                <CompatibilityResult result={compatibilityResult} />
            )}
            {suggestions.length > 0 && (
                <Suggestions suggestions={suggestions} />
            )}
        </div>
    );
};

export default App;
import React from 'react';

interface JobDescriptionInputProps {
    onChange: (description: string) => void;
}

const JobDescriptionInput = ({ onChange }: JobDescriptionInputProps) => {
    return (
        <div>
            <label>Job Description: </label>
            <textarea rows={6} onChange={e => onChange(e.target.value)} />
        </div>
    );
};

export default JobDescriptionInput;
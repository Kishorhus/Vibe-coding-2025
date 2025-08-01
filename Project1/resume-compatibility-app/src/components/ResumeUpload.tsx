import React from 'react';

interface ResumeUploadProps {
    onUpload: (file: File) => void;
}

const ResumeUpload = ({ onUpload }: ResumeUploadProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        if (e.target.files && e.target.files.length > 0) {
            onUpload(e.target.files[0]);
        }
    };

    return (
        <div>
            <label>Upload Resume: </label>
            <input type="file" accept=".pdf,.doc,.docx,.txt" onChange={handleChange} />
        </div>
    );
};

export default ResumeUpload;
import React from 'react';
interface CompatibilityResultProps {
    result: string;
}

const CompatibilityResult = ({ result }: CompatibilityResultProps) => (
    <div>
        <h3>Result:</h3>
        <p>{result}</p>
    </div>
);

export default CompatibilityResult;
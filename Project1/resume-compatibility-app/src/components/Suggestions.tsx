import React from 'react';

interface SuggestionsProps {
    suggestions: string[];
}

const Suggestions = ({ suggestions }: SuggestionsProps) => {
    if (!suggestions || suggestions.length === 0) return null;
    return (
        <div>
            <h2>Suggestions</h2>
            <ul>
                {suggestions.map((suggestion, idx) => (
                    <li key={idx}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default Suggestions;
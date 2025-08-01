function checkCompatibility(resume, jd) {
    const jdKeywords = jd.toLowerCase().split(/\W+/).filter(Boolean);
    const resumeText = resume.toLowerCase();
    const matches = jdKeywords.filter(word => resumeText.includes(word));
    const matchRatio = matches.length / jdKeywords.length;
    return matchRatio > 0.3 ? 'Compatible' : 'Not Compatible';
}

function getSuggestions(resume, jd, years) {
    const suggestions = [];
    if (years < 3) {
        suggestions.push('Check out this YouTube playlist for freshers: https://www.youtube.com/results?search_query=resume+tips+for+freshers');
    } else {
        suggestions.push('Improve your resume with these tips: https://www.thebalancecareers.com/top-resume-writing-tips-2063314');
    }
    suggestions.push('Google: How to tailor your resume to a job description');
    return suggestions;
}

module.exports = { checkCompatibility, getSuggestions };
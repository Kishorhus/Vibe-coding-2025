const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { checkCompatibility, getSuggestions } = require('./matcherService');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

const cache = {};

app.post('/api/check', upload.single('resume'), (req, res) => {
    const jobDescription = req.body.jobDescription;
    const yearsOfExperience = req.body.yearsOfExperience;
    const resumeBuffer = req.file ? req.file.buffer : null;
    const cacheKey = `${jobDescription}_${yearsOfExperience}_${req.file?.originalname}`;

    if (cache[cacheKey]) {
        return res.json(cache[cacheKey]);
    }

    const resumeText = resumeBuffer ? resumeBuffer.toString('utf-8') : '';

    const status = checkCompatibility(resumeText, jobDescription);
    const suggestions = getSuggestions(resumeText, jobDescription, yearsOfExperience);

    const result = { status, suggestions };
    cache[cacheKey] = result;

    res.json(result);
});

app.listen(5000, () => console.log('Backend running on port 5000'));


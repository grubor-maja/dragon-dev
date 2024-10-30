const mongoose = require('mongoose');

const caseStudySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Cybersecurity', 'PharmaTech', 'Retail', 'Finance','HealthTech'],
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    techUsed: {
        type: [String],
        required: true
    },  
});

const CaseStudy = mongoose.model('caseStudy', caseStudySchema);

module.exports = CaseStudy;
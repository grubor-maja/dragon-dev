const express = require('express');
const router = express.Router();
const CaseStudy = require('../models/CaseStudy');

router.post('/', async (req, res) => {
    try {
        const caseStudy = new CaseStudy(req.body);
        await caseStudy.save();
        res.status(201).send(caseStudy);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/', async (req,res) => {
    try {
        // query parameters
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 3;
        const category = req.query.category;
        const sortBy = req.query.sortBy || 'title';
        // filter
        const filter = category? {category} : {};

        // sorting
        const sortOption = {}
        if(sortBy) {
            const sortField = sortBy.startsWith('-') ? sortBy.slice(1) : sortBy;
            const sortOrder = sortBy.startsWith('-') ? -1 : 1;
            sortOption[sortField] = sortOrder;
        } 

        const startIndex = (page-1)*limit;
        const totalDocuments = await CaseStudy.countDocuments(filter);
        const caseStudies = await CaseStudy.find(filter).sort(sortOption).skip(startIndex).limit(limit);
        
        res.json({
            caseStudies,
            totalPages: Math.ceil(totalDocuments/limit),
            currentPage: page
        });        
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});
router.get('/:id', async (req,res) => {
    try {
        const caseStudy = await CaseStudy.findById(req.params.id);
        if(!caseStudy) return res.status(404).json({message: 'Case Study not found'});
        res.json(caseStudy);        
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});

router.put('/:id', async (req,res) => {
    try {
        const caseStudy = await CaseStudy.findById(req.params.id);
        if(!caseStudy) return res.status(404).json({message: 'Case Study not found'});
        const updatedCaseStudy = Object.assign(caseStudy, req.body);
        await updatedCaseStudy.save();
        res.json(updatedCaseStudy);        
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});

module.exports = router;
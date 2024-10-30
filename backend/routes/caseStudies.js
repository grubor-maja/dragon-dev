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
        const caseStudies = await CaseStudy.find();
        res.json(caseStudies);        
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
const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

router.post('/', async (req, res) => {
  try {
    const contactMessage = new ContactMessage(req.body);
    await contactMessage.save();
    res.status(201).json(contactMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req,res) => {
    try {
        const contactMessages = await ContactMessage.find();
        res.json(contactMessages);        
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});

module.exports = router;

const express = require('express');
const router = express.Router();
const { Person } = require('../database/models');

router.post('/addWallet', async (req, res) => {
  try {
    const { userId, amount } = req.body;

    // Find the user's associated person
    const person = await Person.findOne({ where: { id: userId } });

    if (!person) {
      res.status(404).json({ message: 'Person not found' });
    } else {
      // Update the person's wallet balance
      person.wallet += parseFloat(amount);
      await person.save();

      // Send the updated balance as a response
      res.json({ balance: person.wallet });
    }
  } catch (error) {
    console.error('Error adding funds:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }  
});

module.exports = router;

const router = require('express').Router()

const personalDetails = require('./models/personalDetails');
const businessDetails = require('./models/businessDetails');
const loanApplication = require('./models/loanApplication');

router.get('/', (req, res) => {
    res.status(200).send('server running');
});

router.post('/personal-details', async (req, res) => {
    const { firstname, lastname, email, mobile, addr1, addr2, city, state, pin, agreement } = req.body;
    try {
        const newRecord = new personalDetails({ firstname, lastname, email, mobile, addr1, addr2, city, state, pin, agreement })
        const saved = await newRecord.save();
        return res.status(201).json(saved);
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

router.post('/business-details', async (req, res) => {
    const { companyName, firstname, lastname, email, mobile, phone, fax, physicaladdr1, physicaladdr2, physicalcity, physicalstate, physicalpin, billingaddr1, billingaddr2, billingcity, billingstate, billingpin, agreement } = req.body;
    try {
        const newRecord = new businessDetails({ companyName, firstname, lastname, email, mobile, phone, fax, physicaladdr1, physicaladdr2, physicalcity, physicalstate, physicalpin, billingaddr1, billingaddr2, billingcity, billingstate, billingpin, agreement });
        const saved = await newRecord.save();
        return res.status(201).json(saved);
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

router.post('/apply-loan', async (req, res) => {
    const { firstname, lastname, email, mobile, addr1, addr2, city, state, pin, employer, occupation, income, rent,downPayment, agreement } = req.body;
    try {        
        const newRecord = new loanApplication({ firstname, lastname, email, mobile, addr1, addr2, city, state, pin, employer, occupation, income, rent,downPayment, agreement })
        const saved = await newRecord.save();
        return res.status(201).json(saved);
        } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

module.exports = router
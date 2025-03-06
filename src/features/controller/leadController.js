const leadService = require("../service/leadService");
const leadValidation = require("../validation/leadValidation");

const addLead = async (req, res) => {
    try {
        const { error } = leadValidation.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const lead = await leadService.createLead(req.body);
        res.status(201).json(lead);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const fetchLeads = async (req, res) => {
    try {
        const leads = await leadService.getLeads();
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addLead, fetchLeads };
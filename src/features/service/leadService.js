const Lead = require("../schema/Lead");

const createLead = async (leadData) => {
  return await Lead.create(leadData);
};

const getLeads = async () => {
  return await Lead.find();
};

module.exports = { createLead, getLeads };
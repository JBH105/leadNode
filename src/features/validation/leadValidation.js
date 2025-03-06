const Joi = require("joi");

const leadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  status: Joi.string().valid("New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost"),
});

module.exports = leadSchema;

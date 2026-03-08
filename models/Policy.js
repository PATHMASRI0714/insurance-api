const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
  policyNumber: {
    type: String,
    required: true,
    unique: true
  },
  policyHolderName: {
    type: String,
    required: true
  },
  policyType: {
    type: String,
    required: true
  },
  premiumAmount: {
    type: Number,
    required: true,
    min: 1
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Policy", policySchema);